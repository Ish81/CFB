import { Mic, Brain, Volume2, UserCheck } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Mic,
      title: "User Speaks",
      description: "Customer calls and speaks naturally in their preferred language",
      tech: "Sarvam STT",
    },
    {
      icon: Brain,
      title: "AI Understands",
      description: "Advanced reasoning processes the query against knowledge base",
      tech: "Gemini + FAQ",
    },
    {
      icon: Volume2,
      title: "AI Responds",
      description: "Natural, human-like voice response with accurate information",
      tech: "Sarvam TTS",
    },
    {
      icon: UserCheck,
      title: "Smart Transfer",
      description: "Seamlessly connects to human agent when needed",
      tech: "Call Logic",
    },
  ]

  return (
    <section id="how-it-works" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It{" "}
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four simple steps to transform your customer service experience
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-green-500/50 to-emerald-500/50 z-0" />
              )}

              {/* Step Card */}
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 group-hover:scale-105">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-green-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>

                {/* Tech Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                  <span className="text-sm text-green-700 font-medium">{step.tech}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
