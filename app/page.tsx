import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { Features } from "@/components/features"
import { UseCaseDemo } from "@/components/use-case-demo"
import { TechStack } from "@/components/tech-stack"
import { AboutContact } from "@/components/about-contact"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Features />
      <UseCaseDemo />
      <TechStack />
      <AboutContact />
    </main>
  )
}
