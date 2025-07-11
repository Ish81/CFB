import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutContact() {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* About Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            About This{" "}
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
              Project
            </span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              This AI-powered telecom customer care assistant represents the future of customer service. By combining
              advanced speech recognition, natural language processing, and intelligent reasoning, we've created a
              solution that understands customers like never before.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  Leveraging cutting-edge AI to solve real-world customer service challenges
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Efficiency</h3>
                <p className="text-gray-600">
                  Reducing wait times and improving resolution rates through intelligent automation
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Experience</h3>
                <p className="text-gray-600">Creating natural, human-like interactions that customers actually enjoy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Team</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Want to learn more about the talented individuals behind this innovative AI telecom solution? Get to know
            our team and their expertise.
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/connect">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-green-500/25 transition-all duration-300"
              >
                Meet The Team
              </Button>
            </Link>

            <div className="flex gap-4">
              <a href="https://github.com/Ish81/CFB" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 p-4 rounded-full bg-white"
                >
                  <Github className="w-6 h-6" />
                </Button>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-gray-500">
            <p>🌐 Built with ❤️ using Sarvam AI, Gemini, and modern web technologies</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-500">
            © 2024 AI Telecom Assistant. Transforming customer care with artificial intelligence.
          </p>
        </div>
      </div>
    </section>
  )
}
