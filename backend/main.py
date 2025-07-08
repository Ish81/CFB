from fastapi import FastAPI, UploadFile, Form
from services.gemini_service import GeminiService
from services.sarvam_service import SarvamService
from services.audio_service import save_audio
from models.responses import SpeakResponse
from utils.language_detector import detect_dominant_language
from utils.speaker_selector import get_default_speaker  # ✅ Import this
import uuid, os
import dotenv

dotenv.load_dotenv()

app = FastAPI()
gemini = GeminiService()
sarvam = SarvamService()

@app.post("/api/voice-query", response_model=SpeakResponse)
async def voice_query(file: UploadFile):
    temp_file = await save_audio(file)

    transcribed = await sarvam.transcribe_audio(temp_file, language_code="en-IN")  # Initial decode only

    if not transcribed:
        return SpeakResponse(
            success=False,
            error="Transcription failed",
            text=None,
            audio_url=None
        )

    # Detect language from transcribed text
    detected_lang_code = detect_dominant_language(transcribed)
    selected_speaker = get_default_speaker(detected_lang_code)

    # Generate AI response
    ai_reply = gemini.get_answer(transcribed)

    try:
        tts_path = await sarvam.text_to_speech(ai_reply, detected_lang_code, selected_speaker)
    except Exception as e:
        return SpeakResponse(
            success=False,
            error=str(e),
            text=ai_reply,
            audio_url=None
        )

    return SpeakResponse(
        success=True,
        text=ai_reply,
        audio_url=f"/static/audio/{os.path.basename(tts_path)}"
    )
