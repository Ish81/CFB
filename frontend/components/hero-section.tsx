import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-emerald-400/10 to-lime-400/10" />
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-5" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-400/20 rounded-full blur-xl animate-bounce" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-emerald-400/20 rounded-full blur-xl animate-pulse" />

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 backdrop-blur-sm border border-green-500/20 mb-8">
          <Zap className="w-4 h-4 text-green-500" />
          <span className="text-sm font-medium text-gray-700">Powered by Advanced AI</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Reimagining Telecom
          <br />
          <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500 bg-clip-text text-transparent">
            Customer Care
          </span>
          <br />
          with Voice AI
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          No more IVR menus. No more waiting on hold.
          <br />
          Just speak naturally and get instant, intelligent assistance.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link href="/connect">
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm bg-white/80"
            >
              Meet Our Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
