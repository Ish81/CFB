from sarvamai import SarvamAI

client = SarvamAI(
    api_subscription_key="aba74afa-ed63-4477-b5c0-b53f8cec873f",
)

response = client.speech_to_text.transcribe(
    file=open("E:/Python/sample2.mp3", "rb"),
    model="saarika:v2.5",
    language_code="mr-IN"
)

print(response)