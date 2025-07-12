from sarvamai import SarvamAI
from sarvamai.play import save
import os, logging, uuid
from typing import Optional, Tuple

# Logger setup
logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)


class SarvamService:
    def __init__(self):
        self.client = SarvamAI(api_subscription_key=os.getenv("SARVAM_API_KEY"))
        os.makedirs("static/audio", exist_ok=True)

    async def transcribe_audio(self, file_path: str, language_code: Optional[str] = None) -> Tuple[str, str]:
        """
        Transcribe audio using Sarvam Speech-to-Text.
        Returns: Tuple(transcribed_text, detected_language_code)
        """
        try:
            response = self.client.speech_to_text.transcribe(
                file=open(file_path, "rb"),
                model="saarika:v2.5",
                language_code=language_code or "unknown"
            )
            transcribed = response.transcript.strip()
            detected_language = response.language_code
            logger.info(f"Transcribed Text: {transcribed}")
            logger.info(f"Detected Language: {detected_language}")
            return transcribed, detected_language
        except Exception as e:
            logger.error(f"Error transcribing audio: {str(e)}")
            return "", "en-IN"

    async def text_to_speech(self, text: str, language_code: str, speaker: str) -> str:
        """
        Convert text to speech using Sarvam TTS.
        Returns: File path of saved audio.
        """
        try:
            audio = self.client.text_to_speech.convert(
                target_language_code=language_code,
                text=text,
                model="bulbul:v2",
                speaker=speaker,
            )
            file_path = f"static/audio/response_{uuid.uuid4().hex[:8]}.wav"
            save(audio, file_path)
            return file_path
        except Exception as e:
            logger.error(f"Error in text_to_speech: {str(e)}")
            raise Exception("TTS conversion failed.")
