"use client"

import React, { useState, useRef, useEffect } from "react"
import { Mic, MicOff, Loader2, Bot, User, Square } from "lucide-react"

type MessageType = {
  id: number
  type: "user" | "assistant"
  text: string
  timestamp: string
  isVoice?: boolean
  audioUrl?: string
}

const VoiceGenie: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [messages, setMessages] = useState<MessageType[]>([])
  const [error, setError] = useState("")
  const [audioLevel, setAudioLevel] = useState(0)

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const audioContextRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)
  const messageIdRef = useRef(2)

  useEffect(() => {
    const now = new Date().toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })

    setMessages([
      {
        id: 1,
        type: "assistant",
        text: "Hello! I'm VoiceGenie, your intelligent telecom assistant. How can I help you today?",
        timestamp: now,
      },
    ])
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const startAudioLevelMonitoring = (stream: MediaStream) => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    audioContextRef.current = audioContext
    analyserRef.current = audioContext.createAnalyser()
    const source = audioContext.createMediaStreamSource(stream)
    source.connect(analyserRef.current)
    analyserRef.current.fftSize = 256

    const bufferLength = analyserRef.current.frequencyBinCount
    const dataArray = new Uint8Array(bufferLength)

    const SILENCE_THRESHOLD = 5
    const SILENCE_DURATION = 1500
    let silenceStart = Date.now()

    const updateLevel = () => {
      analyserRef.current?.getByteFrequencyData(dataArray)
      const average = dataArray.reduce((a, b) => a + b, 0) / bufferLength
      setAudioLevel(average)

      if (average < SILENCE_THRESHOLD) {
        if (Date.now() - silenceStart > SILENCE_DURATION && isRecording) {
          stopRecording()
        }
      } else {
        silenceStart = Date.now()
      }

      animationFrameRef.current = requestAnimationFrame(updateLevel)
    }

    updateLevel()
  }

  const stopAudioLevelMonitoring = () => {
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
    if (audioContextRef.current) {
      audioContextRef.current.close()
      audioContextRef.current = null
    }
    setAudioLevel(0)
  }

  const startRecording = async () => {
    try {
      setError("")
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const recorder = new MediaRecorder(stream)
      mediaRecorderRef.current = recorder
      audioChunksRef.current = []

      recorder.ondataavailable = (event: BlobEvent) => {
        audioChunksRef.current.push(event.data)
      }

      recorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" })
        await sendAudioToBackend(audioBlob)
        stream.getTracks().forEach((track) => track.stop())
        stopAudioLevelMonitoring()
      }

      startAudioLevelMonitoring(stream)
      recorder.start()
      setIsRecording(true)
    } catch (err) {
      console.error("Recording error:", err)
      setError("Failed to access microphone. Please check permissions.")
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
    }
  }

  const sendAudioToBackend = async (audioBlob: Blob) => {
    setIsProcessing(true)
    const formData = new FormData()
    formData.append("file", audioBlob, "audio.wav")

    try {
      const response = await fetch("http://localhost:8000/api/voice-query", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

      const data = await response.json()
      const now = new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })

      const userId = messageIdRef.current++
      const assistantId = messageIdRef.current++

      setMessages((prev) => [
        ...prev,
        {
          id: userId,
          type: "user",
          text: data.user_text || "Could not transcribe.",
          timestamp: now,
        },
        {
          id: assistantId,
          type: "assistant",
          text: data.response || "I received your message.",
          timestamp: now,
          audioUrl: data.audio_url,
        },
      ])

      if (data.audio_url) {
        await playAudio(data.audio_url)
      }
    } catch (err) {
      console.error("Backend error:", err)
      setError("Failed to process voice message. Please try again.")
    } finally {
      setIsProcessing(false)
    }
  }

  const playAudio = async (audioUrl: string) => {
    try {
      setIsPlaying(true)
      const fullUrl = audioUrl.startsWith("http") ? audioUrl : `http://localhost:8000${audioUrl}`
      const audio = new Audio(fullUrl)

      audio.onended = () => {
        setIsPlaying(false)
        startRecording()
      }
      audio.onerror = () => {
        setIsPlaying(false)
        setError("Failed to play audio response.")
      }

      await audio.play()
    } catch (err) {
      console.error("Audio play error:", err)
      setIsPlaying(false)
      setError("Failed to play audio response.")
    }
  }

  const toggleRecording = () => {
    isRecording ? stopRecording() : startRecording()
  }

  return (
    <section id="try-it-now" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Try It <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Now</span>
          </h2>
          <p className="text-lg text-gray-600">Talk to our AI assistant using your voice and see how it responds in real-time.</p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl p-6 md:p-10 shadow-2xl">
          <div className="max-h-96 overflow-y-auto space-y-6">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-4 ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                {msg.type === "assistant" && (
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                <div className={`max-w-xs lg:max-w-sm ${msg.type === "user" ? "order-1" : ""}`}>
                  <div className={`p-4 rounded-2xl ${msg.type === "user" ? "bg-green-500 text-white ml-auto" : "bg-gray-100 text-gray-900"}`}>
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                  <p className="text-xs text-gray-400 mt-1 px-2">{msg.timestamp}</p>
                </div>
                {msg.type === "user" && (
                  <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-3">
                <button
                  onClick={startRecording}
                  disabled={isRecording}
                  className="p-4 rounded-full bg-green-500 hover:bg-green-600 text-white transition duration-300"
                >
                  <Mic className="w-6 h-6" />
                </button>
                <button
                  onClick={stopRecording}
                  disabled={!isRecording}
                  className="p-4 rounded-full bg-red-500 hover:bg-red-600 text-white transition duration-300"
                >
                  <Square className="w-6 h-6" />
                </button>
              </div>
              <p className="text-sm text-gray-600">
                {isRecording ? "Recording..." : isProcessing ? "Processing..." : "Click to speak"}
              </p>
              {isProcessing && <Loader2 className="w-5 h-5 animate-spin text-green-500" />}
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {isPlaying && <p className="text-green-500 text-sm italic">AI is speaking...</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VoiceGenie
