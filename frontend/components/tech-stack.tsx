import { Brain, Mic, Volume2, Code, Zap, Globe, Phone } from "lucide-react"

export function TechStack() {
  const technologies = [
    {
      name: "Sarvam STT",
      description: "Advanced Speech-to-Text conversion with multilingual support",
      icon: Mic,
      category: "Speech Processing",
    },
    {
      name: "Gemini API",
      description: "Powerful language model for understanding and reasoning",
      icon: Brain,
      category: "AI Reasoning",
    },
    {
      name: "Sarvam TTS",
      description: "Natural Text-to-Speech with human-like voice quality",
      icon: Volume2,
      category: "Speech Synthesis",
    },
    {
      name: "Python Backend",
      description: "Robust server architecture for seamless integration",
      icon: Code,
      category: "Backend",
    },
    {
      name: "Real-time Processing",
      description: "Low-latency pipeline for instant response delivery",
      icon: Zap,
      category: "Performance",
    },
    {
      name: "Multi-language",
      description: "Support for regional languages and dialects",
      icon: Globe,
      category: "Localization",
    },
  ]

  return (
    <section id="technology" className="py-24 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technology{" "}
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built on cutting-edge AI technologies for reliable, scalable customer service
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div key={index} className="group relative">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 group-hover:scale-105 h-full">
                {/* Category Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
                  <span className="text-xs text-green-700 font-medium">{tech.category}</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="w-8 h-8 text-green-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{tech.name}</h3>
                <p className="text-gray-600 leading-relaxed">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Diagram */}
        <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">System Architecture</h3>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl flex items-center justify-center mb-4">
                <Phone className="w-10 h-10 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Customer Call</h4>
              <p className="text-sm text-gray-500">Voice Input</p>
            </div>

            <div className="hidden md:block text-gray-400">→</div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl flex items-center justify-center mb-4">
                <Mic className="w-10 h-10 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Sarvam STT</h4>
              <p className="text-sm text-gray-500">Speech Recognition</p>
            </div>

            <div className="hidden md:block text-gray-400">→</div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl flex items-center justify-center mb-4">
                <Brain className="w-10 h-10 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Gemini AI</h4>
              <p className="text-sm text-gray-500">Processing & Reasoning</p>
            </div>

            <div className="hidden md:block text-gray-400">→</div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl flex items-center justify-center mb-4">
                <Volume2 className="w-10 h-10 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Sarvam TTS</h4>
              <p className="text-sm text-gray-500">Voice Response</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
