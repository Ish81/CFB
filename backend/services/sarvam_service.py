from sarvamai import SarvamAI
from sarvamai.play import save
import os, logging, uuid
from typing import Optional
import logging
import logging

logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)


class SarvamService:
    def __init__(self):
        self.client = SarvamAI(api_subscription_key=os.getenv("SARVAM_API_KEY"))
        os.makedirs("static/audio", exist_ok=True)

    async def transcribe_audio(self, file_path: str, language_code: Optional[str] = None) -> tuple[str, str]:
        try:
            response = self.client.speech_to_text.transcribe(
                file=open(file_path, "rb"),
                model="saarika:v2.5",
                language_code=language_code or "auto"
            )
            transcribed = response.transcript.strip()
            detected_language = response.language_code  # This should be present
            logger.info(f"Transcribed Text: {transcribed}")
            logger.info(f"Detected Language: {detected_language}")
            return transcribed, detected_language

        except Exception as e:
            logger.error(f"Error transcribing audio: {str(e)}")
            raise Exception("Failed to transcribe audio.")


    async def text_to_speech(self, text: str, language_code: str, speaker: str) -> str:
        audio = self.client.text_to_speech.convert(
            target_language_code=language_code,
            text=text,
            model="bulbul:v2",
            speaker=speaker,
        )
        file_path = f"static/audio/response_{uuid.uuid4().hex[:8]}.wav"
        save(audio, file_path)
        return file_path
