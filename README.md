# 📞 Vaani.ai : AI-Based Voice Customer Care System (IVR Replacement)

## 🔍 Overview

An intelligent voice-driven telecom support system that replaces outdated IVR menus. Instead of pressing buttons, customers simply **speak their query** and get a **natural AI-powered response** — all on a live phone call.

This project uses:
- 🧠 **Gemini API** for understanding telecom queries
- 🎙️ **Sarvam AI STT** to transcribe speech into text
- 🔊 **Sarvam AI TTS** to convert answers back to speech
- 🛠️ **FastAPI** backend with **Next.js** frontend
- 🎨 **Tailwind CSS** with **Radix UI** components

---

## 🗂️ Features

✅ Voice-only experience — no menus or button presses  
✅ Powered by Gemini + grounded with Telecom FAQ knowledge  
✅ Option to repeat answer or connect to a human  
✅ Modular architecture with open-source and free tools  
✅ Modern web interface with real-time voice processing  
✅ Multi-language support with automatic language detection  
✅ Responsive design with beautiful UI components  

---

## 🔄 Voice Interaction Flow

```
Caller 🧑‍💼
    ↓
🎙️ Speaks problem (e.g. "My net is slow")
    ↓
📝 Sarvam STT → Converts voice to text
    ↓
🤖 Gemini API → Matches FAQ / Troubleshooting logic
    ↓
🔊 Sarvam TTS → Generates spoken answer
    ↓
🗣️ AI: "Try restarting your router..."
    ↓
👂 Waits for follow-up:
    ├─ "Repeat" → 🔁 Replay response
    └─ "Connect me" → 📞 Simulate transfer
```

---

## 🧰 Tech Stack

| Component        | Tool / Service        |
|------------------|------------------------|
| **Backend**      | FastAPI (Python)      |
| **Frontend**     | Next.js 15 + React 18 |
| **Styling**      | Tailwind CSS + Radix UI |
| **STT**          | Sarvam AI (open source)|
| **NLP + FAQ**    | Gemini API (Free tier) |
| **TTS**          | Sarvam AI (open source)|
| **Language**     | TypeScript + Python   |
| **Deployment**   | Render / Railway / Vercel |

---

## 🛠️ Project Structure

```
CFB/
├── 📁 backend/                    # FastAPI Backend
│   ├── 📄 main.py                # FastAPI application entry point
│   ├── 📄 requirements.txt       # Python dependencies
│   ├── 📄 env_example.txt        # Environment variables template
│   ├── 📁 services/              # AI Service integrations
│   │   ├── 📄 gemini_service.py  # Gemini API integration
│   │   ├── 📄 sarvam_service.py  # Sarvam AI STT/TTS
│   │   └── 📄 audio_service.py   # Audio file handling
│   ├── 📁 models/                # Pydantic data models
│   │   ├── 📄 requests.py        # Request schemas
│   │   └── 📄 responses.py       # Response schemas
│   ├── 📁 utils/                 # Utility functions
│   │   ├── 📄 language_detector.py # Language detection
│   │   ├── 📄 language_utils.py  # Language utilities
│   │   └── 📄 speaker_selector.py # TTS speaker selection
│   └── 📁 static/                # Static files (audio outputs)
│       └── 📁 audio/             # Generated audio files
│
├── 📁 frontend/                   # Next.js Frontend
│   ├── 📄 package.json           # Node.js dependencies
│   ├── 📄 tailwind.config.ts     # Tailwind configuration
│   ├── 📄 tsconfig.json          # TypeScript configuration
│   ├── 📁 app/                   # Next.js 13+ app directory
│   │   ├── 📄 layout.tsx         # Root layout
│   │   ├── 📄 page.tsx           # Home page
│   │   ├── 📄 globals.css        # Global styles
│   │   └── 📁 connect/           # Connect page
│   ├── 📁 components/            # React components
│   │   ├── 📄 VoiceGenie.tsx     # Main voice interface
│   │   ├── 📄 navbar.tsx         # Navigation bar
│   │   ├── 📄 hero-section.tsx   # Hero section
│   │   ├── 📄 features.tsx       # Features showcase
│   │   ├── 📄 how-it-works.tsx   # How it works section
│   │   ├── 📄 tech-stack.tsx     # Technology stack
│   │   ├── 📄 about-contact.tsx  # About & contact
│   │   ├── 📄 use-case-demo.tsx  # Use case demonstrations
│   │   ├── 📄 theme-provider.tsx # Theme management
│   │   └── 📁 ui/                # Reusable UI components
│   │       ├── 📄 button.tsx     # Button components
│   │       ├── 📄 dialog.tsx     # Dialog components
│   │       ├── 📄 form.tsx       # Form components
│   │       └── ...               # 40+ other UI components
│   ├── 📁 hooks/                 # Custom React hooks
│   ├── 📁 lib/                   # Utility libraries
│   ├── 📁 public/                # Static assets
│   └── 📁 styles/                # Additional stylesheets
│
└── 📄 README.md                  # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Python 3.8+
- Node.js 18+
- pnpm or npm

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
cp env_example.txt .env
# Edit .env with your API keys
uvicorn main:app --reload
```

### Frontend Setup
```bash
cd frontend
pnpm install  # or npm install
pnpm dev      # or npm run dev
```

### Environment Variables
Create a `.env` file in the backend directory:
```env
GEMINI_API_KEY=your_gemini_api_key
SARVAM_API_KEY=your_sarvam_api_key
```

---

## 📦 Example Usage

**User Query:** "My SIM card is not showing network."

**AI Response:** "Please try reinserting the SIM and restarting your phone. If the problem persists, check for coverage in your area."

**Follow-up Options:** 
- Say 'repeat' to hear again
- Say 'connect me' to speak to a representative

---

## 🔧 API Endpoints

- `POST /api/voice-query` - Process voice queries and return AI responses
- `GET /static/audio/{filename}` - Serve generated audio files

---

## 🎨 UI Components

The frontend includes a comprehensive set of UI components built with:
- **Radix UI** primitives for accessibility
- **Tailwind CSS** for styling
- **TypeScript** for type safety
- **React Hook Form** for form handling
- **Lucide React** for icons

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
