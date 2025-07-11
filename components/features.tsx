import { Zap, Globe, Mic2, Phone, Shield, Clock } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Zap,
      title: "Real-Time Voice Processing",
      description: "Instant speech-to-text conversion with minimal latency for seamless conversations",
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Communicate in multiple languages with native-level understanding and response",
    },
    {
      icon: Mic2,
      title: "Natural Language Understanding",
      description: "Advanced AI comprehends context, intent, and nuanced customer queries",
    },
    {
      icon: Phone,
      title: "Smart Call Transfer",
      description: "Intelligent routing to human agents when complex issues require personal touch",
    },
    {
      icon: Shield,
      title: "Voice Clarity Optimization",
      description: "Crystal-clear audio processing ensures perfect communication quality",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock customer support without human resource constraints",
    },
  ]

  return (
    <section id="features" className="py-24 px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful{" "}
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built with cutting-edge AI technology to deliver exceptional customer experiences
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 group-hover:scale-105 h-full">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
