from fastapi import FastAPI, UploadFile
from services.gemini_service import GeminiService
from services.sarvam_service import SarvamService
from services.audio_service import save_audio
from models.responses import SpeakResponse
from utils.language_detector import fallback_language_detection
from utils.speaker_selector import get_default_speaker
import uuid, os
import dotenv

dotenv.load_dotenv()

app = FastAPI()
gemini = GeminiService()
sarvam = SarvamService()

@app.post("/api/voice-query", response_model=SpeakResponse)
async def voice_query(file: UploadFile):
    temp_file = await save_audio(file)

    try:
        # Transcribe and get detected language from Sarvam
        transcribed, sarvam_detected_lang = await sarvam.transcribe_audio(temp_file)
    except Exception as e:
        return SpeakResponse(
            success=False,
            error=f"Transcription failed: {str(e)}",
            text=None,
            audio_url=None
        )

    if not transcribed:
        return SpeakResponse(
            success=False,
            error="No transcription result.",
            text=None,
            audio_url=None
        )

    # Use langdetect fallback if Sarvam gives 'en-IN' for regional language
    final_language_code = fallback_language_detection(transcribed, sarvam_detected_lang)
    selected_speaker = get_default_speaker(final_language_code)

    # Generate AI response
    ai_reply = gemini.get_answer(transcribed)

    try:
        tts_path = await sarvam.text_to_speech(ai_reply, final_language_code, selected_speaker)
    except Exception as e:
        return SpeakResponse(
            success=False,
            error=f"TTS failed: {str(e)}",
            text=ai_reply,
            audio_url=None
        )

    return SpeakResponse(
        success=True,
        text=ai_reply,
        audio_url=f"/static/audio/{os.path.basename(tts_path)}"
    )
