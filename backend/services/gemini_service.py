import os
from google import generativeai as genai

class GeminiService:
    def __init__(self):
        # Configure the API key for generative AI
        self.api_key = os.getenv("GEMINI_API_KEY")
        if not self.api_key:
            raise ValueError("GEMINI_API_KEY environment variable not set")
        
        genai.configure(api_key=self.api_key)

        # Create model instance
        self.model = genai.GenerativeModel(model_name="gemini-2.5-flash")
        self.chat = self.model.start_chat(history=[])

    def get_answer(self, user_input: str) -> str:
        # Provide context for telecom domain
        context = (
            "You are a telecom support assistant for Indian users.\n\n"
            "You must:\n"
            
            "1. Understand and respond to queries in multiple Indian languages (Hindi, Marathi, Tamil, Bengali, Telugu, etc.) and English.\n"
            "2. Handle code-mixed queries like Hindi-English or Marathi-English in the same sentence.\n"
            "3. Preserve the original language composition. Do not fully translate unless asked.\n"
            "4. Keep responses short, polite, and suitable for voice playback.\n"
            "5. Use simple spoken-friendly phrases.\n"
            "6. For known issues like 'no signal', 'slow net', 'SIM problem', give basic troubleshooting.\n"
            "7. If query is unclear or complex, say: 'I’ll connect you to a support executive.'\n\n"
            "Avoid long responses. Respect multilingual input style.\n"
        )

        response = self.chat.send_message(f"{context}\n\nCustomer: {user_input}")
        return response.text.strip()
