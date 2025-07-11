import { Phone, User, Bot } from "lucide-react"

export function UseCaseDemo() {
  const conversation = [
    {
      type: "user",
      message: "Hi, I'm having trouble with my internet connection. It's been really slow for the past few days.",
      time: "10:30 AM",
    },
    {
      type: "ai",
      message:
        "I understand you're experiencing slow internet speeds. Let me help you troubleshoot this. Can you tell me what speed you're currently getting?",
      time: "10:30 AM",
    },
    {
      type: "user",
      message: "I'm getting about 10 Mbps, but I'm paying for 100 Mbps.",
      time: "10:31 AM",
    },
    {
      type: "ai",
      message:
        "I can see there's a service issue in your area affecting speeds. I'll schedule a technician visit for tomorrow between 2-4 PM and provide a service credit. Is that time convenient?",
      time: "10:31 AM",
    },
  ]

  return (
    <section id="demo" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See It In{" "}
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience how natural conversations lead to quick problem resolution
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Demo Interface */}
          <div className="relative">
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 shadow-2xl">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">AI Customer Care</h3>
                  <p className="text-sm text-gray-500">Connected • 2:31</p>
                  <p className="text-xs text-gray-600 mt-1">This is chat but the same happens in live call with user</p>
                </div>
                <div className="ml-auto flex gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-green-600">Live</span>
                </div>
              </div>

              {/* Conversation */}
              <div className="space-y-6 max-h-96 overflow-y-auto">
                {conversation.map((msg, index) => (
                  <div key={index} className={`flex gap-4 ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                    {msg.type === "ai" && (
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div className={`max-w-xs lg:max-w-sm ${msg.type === "user" ? "order-1" : ""}`}>
                      <div
                        className={`p-4 rounded-2xl ${
                          msg.type === "user" ? "bg-green-500 text-white ml-auto" : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{msg.message}</p>
                      </div>
                      <p className="text-xs text-gray-400 mt-2 px-2">{msg.time}</p>
                    </div>
                    {msg.type === "user" && (
                      <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Voice Indicator */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-1 bg-green-500 rounded-full animate-pulse`}
                        style={{
                          height: `${Math.random() * 20 + 10}px`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-green-600 font-medium">AI is listening...</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Instant Problem Identification</h4>
              <p className="text-gray-600">
                AI quickly understands the issue and accesses relevant account information in real-time.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Proactive Solutions</h4>
              <p className="text-gray-600">
                Automatically checks for service issues and offers immediate resolutions without escalation.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Seamless Experience</h4>
              <p className="text-gray-600">
                Natural conversation flow that feels like talking to a knowledgeable human agent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
