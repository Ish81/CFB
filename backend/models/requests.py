from pydantic import BaseModel, Field

class SpeakRequest(BaseModel):
    text: str = Field(..., min_length=1)
    language_code: str = Field(default="en-IN")
    speaker: str = Field(default="anushka")
