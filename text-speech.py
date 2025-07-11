from sarvamai import SarvamAI
from sarvamai.play import save

client = SarvamAI(api_subscription_key="aba74afa-ed63-4477-b5c0-b53f8cec873f")
# Convert text to speech
audio = client.text_to_speech.convert(
  target_language_code="mr-IN",
  text="हॅलो अनुष्का. आजचं वेदर खूप चांगला आहे. आज 2 तारीख आहे. जुलै मधली. आणि कॉलेज सात पासून चालू होणार आहे आमचं. ओके. बाय.",
  model="bulbul:v2",
  speaker="anushka"
)
save(audio, "output1.wav")
