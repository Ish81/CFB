import os
import uuid
from fastapi import UploadFile

async def save_audio(file: UploadFile) -> str:
    ext = file.filename.split(".")[-1]
    filename = f"temp_{uuid.uuid4().hex[:8]}.{ext}"
    file_path = f"static/audio/{filename}"

    with open(file_path, "wb") as f:
        f.write(await file.read())
    return file_path
