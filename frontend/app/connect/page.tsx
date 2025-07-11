import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, ArrowLeft, Users, Star, Award } from "lucide-react"
import Link from "next/link"

export default function TeamPage() {
  const teamLeader = {
    name: "Chinmay Inamdar",
    role: "Team Leader",
    description:
      "Leading the development of AI-powered telecom solutions with expertise in machine learning and system architecture.",
    image: "/placeholder.svg?height=300&width=300",
    skills: ["AI/ML", "System Design", "Team Leadership", "Product Strategy"],
  }

  const teamMembers = [
    {
      name: "Ishaan Chepurwar",
      role: "AI Developer",
      description:
        "Specializing in natural language processing and speech recognition technologies for seamless customer interactions.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["NLP", "Speech Recognition", "Python", "TensorFlow"],
    },
    {
      name: "Anushka Waghmare",
      role: "Backend Developer",
      description:
        "Building robust backend systems and API integrations to power the AI telecom assistant infrastructure.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["Backend Development", "API Design", "Database Management", "Cloud Services"],
    },
    {
      name: "Raman Gandewar",
      role: "Frontend Developer",
      description: "Creating intuitive user interfaces and seamless user experiences for the AI assistant platform.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["React", "UI/UX Design", "Frontend Architecture", "Responsive Design"],
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Transparent Green Bar - Same height as navbar */}
      <div className="fixed top-0 left-0 right-0 z-40 h-16 bg-gradient-to-r from-green-500/30 via-emerald-500/30 to-green-500/30 backdrop-blur-sm"></div>

      <div className="pt-32">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 backdrop-blur-sm border border-green-500/20 mb-6">
              <Users className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-gray-700">Meet Our Team</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              The Team Behind{" "}
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the talented individuals who are revolutionizing telecom customer service with cutting-edge AI
              technology.
            </p>
          </div>

          {/* Team Leader Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                  Team Leader
                </span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative">
                      <img
                        src={teamLeader.image || "/placeholder.svg"}
                        alt={teamLeader.name}
                        className="w-full h-80 lg:h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                          <Star className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{teamLeader.name}</h3>
                      <p className="text-lg text-green-600 font-semibold mb-4">{teamLeader.role}</p>
                      <p className="text-gray-600 mb-6 leading-relaxed">{teamLeader.description}</p>

                      {/* Skills */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {teamLeader.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-sm text-green-700 font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Team Members Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                  Team Members
                </span>
              </h2>
              <p className="text-lg text-gray-600">The brilliant minds working together to bring this vision to life</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-xl overflow-hidden group hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300"
                >
                  <CardContent className="p-0">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-green-600 font-semibold mb-3">{member.role}</p>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.description}</p>

                      {/* Skills */}
                      <div className="mb-4">
                        <h4 className="text-xs font-semibold text-gray-900 mb-2">Skills</h4>
                        <div className="flex flex-wrap gap-1">
                          {member.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-xs text-green-700 font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Stats */}
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Our{" "}
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                Achievements
              </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">4</div>
                <div className="text-gray-600">Team Members</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-gray-600">Dedication</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">1</div>
                <div className="text-gray-600">Shared Vision</div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600 max-w-2xl mx-auto">
                Together, we're building the future of AI-powered customer service, combining our diverse skills and
                shared passion for innovation to create solutions that truly make a difference.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to Connect?</h3>
            <p className="text-gray-600 mb-6">
              Interested in learning more about our project or discussing potential collaborations?
            </p>
            <a href="mailto:ichprogramming50@gmail.com">
              <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
