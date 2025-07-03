# from google import genai
# import os

# client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

# chats = client.chats.create( model = "gemini-2.5-flash")

# while True:
#     message = input("> ")
#     if message.lower() in ["exit", "quit"]:
#         break

#     response = chats.send_message(message)
#     print(response.text)

from google import genai
import os

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

upload = client.files.upload(file=r"E:\Programming Files\C programs and Files\Python\python codes\sarvam\sample2.mp3")



response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents=["Transcribe audio", upload]
)

print(response.text)