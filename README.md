# 📞 AI-Based Voice Customer Care System (IVR Replacement)

## 🔍 Overview

An intelligent voice-driven telecom support system that replaces outdated IVR menus. Instead of pressing buttons, customers simply **speak their query** and get a **natural AI-powered response** — all on a live phone call.

This project uses:
- 🧠 **Gemini API** for understanding telecom queries
- 🎙️ **Sarvam AI STT** to transcribe speech into text
- 🔊 **Sarvam AI TTS** to convert answers back to speech
- 🛠️ Optional: Free call-handling systems like **Asterisk**, **Jambonz**, or browser-based voice input

---

## 🗂️ Features

✅ Voice-only experience — no menus or button presses  
✅ Powered by Gemini + grounded with Telecom FAQ knowledge  
✅ Option to repeat answer or connect to a human  
✅ Modular architecture with open-source and free tools  
✅ Deployable on any backend (Flask/FastAPI)

---

## 🔄 Voice Interaction Flow

-Caller 🧑‍💼

-🎙️ Speaks problem (e.g. "My net is slow")

-📝 Sarvam STT → Converts voice to text

-🤖 Gemini API → Matches FAQ / Troubleshooting logic

-🔊 Sarvam TTS → Generates spoken answer

-🗣️ AI: "Try restarting your router..."

-👂 Waits for follow-up:

├─ "Repeat" → 🔁 Replay response

└─ "Connect me" → 📞 Simulate transfer



---

## 🧰 Tech Stack

| Component        | Tool / Service        |
|------------------|------------------------|
| STT              | Sarvam AI (open source)|
| NLP + FAQ        | Gemini API (Free tier) |
| TTS              | Sarvam AI (open source)|
| Backend          | Python (Flask or FastAPI) |
| Deployment       | Render / Railway / Replit |
| Optional Voice   | Asterisk / Jambonz / WebRTC |

---

## 🛠️ Folder Structure

---

## 📦 Example
User: "My SIM card is not showing network."
AI: "Please try reinserting the SIM and restarting your phone. If the problem persists, check for coverage in your area."
AI: "Say 'repeat' to hear again or 'connect me' to speak to a representative."

---
