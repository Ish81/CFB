from pydantic import BaseModel
from typing import Optional

class SpeakResponse(BaseModel):
    success: bool
    text: Optional[str]
    audio_url: Optional[str]
    error: Optional[str] = None
