from fastapi import FastAPI, UploadFile, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

from services.gemini_service import GeminiService
from services.sarvam_service import SarvamService
from services.audio_service import save_audio
from models.responses import SpeakResponse
from utils.language_detector import fallback_language_detection
from utils.speaker_selector import get_default_speaker

import os
import dotenv

dotenv.load_dotenv()

app = FastAPI()

# Mount static folder
app.mount("/static", StaticFiles(directory="static"), name="static")

# Serve audio files with correct MIME
@app.get("/static/audio/{filename}")
async def serve_audio(filename: str, request: Request):
    file_path = os.path.join("static", "audio", filename)
    if not os.path.isfile(file_path):
        raise HTTPException(status_code=404, detail="Audio not found")
    return FileResponse(file_path, media_type="audio/wav")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Services
gemini = GeminiService()
sarvam = SarvamService()

@app.post("/api/voice-query", response_model=SpeakResponse)
async def voice_query(file: UploadFile):
    temp_file = await save_audio(file)

    try:
        transcribed, detected_lang = await sarvam.transcribe_audio(temp_file)
        if not transcribed:
            return SpeakResponse(success=False, error="Transcription failed.", response=None, audio_url=None, user_text=None)

        final_language = fallback_language_detection(transcribed, detected_lang)
        speaker = get_default_speaker(final_language)

        ai_reply = gemini.get_answer(transcribed)
        tts_path = await sarvam.text_to_speech(ai_reply, final_language, speaker)

        return SpeakResponse(
            success=True,
            user_text=transcribed,
            response=ai_reply,
            audio_url=f"/static/audio/{os.path.basename(tts_path)}"
        )

    except Exception as e:
        return SpeakResponse(
            success=False,
            error=str(e),
            response=None,
            user_text=None,
            audio_url=None
        )
