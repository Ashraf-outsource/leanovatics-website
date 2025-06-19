import Image from "next/image"
import Link from "next/link"
import { ChevronRight,ChevronsRight,Play } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Menu, Search } from "lucide-react"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 mb-4">
                  <img src="leanovatics.png"></img>               
              </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-[#0CBBF2]">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-[#0CBBF2]">
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-[#0CBBF2]">
                Services
              </Link>
              <Link href="/team" className="text-[#0CBBF2] font-semibold">
                Team
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#0CBBF2]">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-sm text-[#000000]">
                <a
                  href="tel:+15551234567"
                  className="bg-[#ffffff] text-black px-3 py-1 rounded flex items-center gap-2 hover:bg-blue-700 transition"
                >
                  <img src="phonelogo.png" alt="Phone" className="w-10 h-10" />
                  <span>Phone Us</span>
                  <span>+1 (555) 123-4567</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#0CBBF2]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#0CBBF2]">Our Team</span>
          </div>
        </div>
      </section>

      {/* Team Hero */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-[#0CBBF2]">Expert Team</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our diverse team of experienced consultants brings together decades of expertise across various industries
            to deliver exceptional results for our clients.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the visionary leaders who guide Leanovatics towards excellence and innovation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Kossivi Nayo",
                role: "Managing Partner at Leanovatics",
                experience: "Over 20 years in leadership, cybersecurity, political strategy, and international consultancy",
                education: "Ph.D. candidate, MBA in Business Innovation, B.A. in Homeland Security",
                bio: " A visionary leader with a global impact, Kossivi Nayo blends strategic innovation and cross-cultural expertise to drive sustainable growth and security solutions worldwide",
                image: "/team1.jpg?height=400&width=300",
              },
              {
                name: "Imane ATALI",
                role: " Civil Engineer at Leanovatics",
                experience: "10+ years in civil and mining engineering, risk management, and sustainable development",
                education: "Advanced degree in Civil Engineering with certifications in environmental management, risk assessment, and HSE",
                bio: "Imane ATALI is a seasoned civil engineer specializing in sustainable mining management, known for leading risk mitigation, environmental audits, and HSE policy development to ensure innovative and eco-conscious project outcomes at Leanovatics.",
                image: "/team2.jpg?height=400&width=300",
              },
              {
                name: " Samuel D. Akhibi",
                role: "Managing Partner at Leanovatics",
                experience: "10+ years in blockchain, AI, and digital transformation across global enterprises",
                education: "Certified Blockchain Developer, Architect, and Cryptocurrency Expert (Blockchain Council)",
                bio: "Samuel D. Akhibi is a visionary technologist and strategic consultant leading Leanovatics in delivering innovative blockchain, AI, and digital transformation solutions that empower organizations to thrive in the evolving digital economy.",
                image: "/team3.jpg?height=400&width=300",
              },
            ].map((leader, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Image
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    width={300}
                    height={400}
                    className="rounded-lg mb-4 mx-auto"
                  />
                  <h3 className="font-bold text-xl text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-[#0CBBF2] font-semibold mb-2">{leader.role}</p>
                  <p className="text-sm text-gray-600 mb-2">{leader.experience}</p>
                  <p className="text-sm text-gray-600 mb-3">{leader.education}</p>
                  <p className="text-gray-700 text-sm mb-4">{leader.bio}</p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-[#0CBBF2] hover:text-blue-800">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-[#0CBBF2] hover:text-blue-800">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-[#0CBBF2] hover:text-blue-800">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Senior Consultants */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Senior Consultants</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our senior consultants bring specialized expertise and proven track records in their respective domains.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alexis Parker",
                role: "Managing Partner at Leanovatics Consulting",
                specialization: "Data-driven financial planning, risk mitigation, and business transformation",
                experience: "15+ years",
                image: "/team4.jpeg?height=300&width=250",
              },
              {
                name: "Tabitha Babyak",
                role: "Managing Partner at MarketEdge Consulting & Director at Leanovatics Consulting",
                specialization: " Audience-centric, data-driven marketing, brand strategy, and digital campaign execution",
                experience: "12+ years",
                image: "/team5.jpeg?height=300&width=250",
              },
              {
                name: "Eric King",
                role: "Director at Leanovatics Consulting",
                specialization: "Healthcare service delivery optimization, patient-centered care, operational efficiency, and technology integration",
                experience: "18+ years",
                image: "/team6.jpeg?height=300&width=250",
              },
              {
                name: "Carter Harris",
                role: " Director at Leanovatics",
                specialization: "Governance frameworks, democratic reforms, policy innovation, political strategy, and stakeholder engagement",
                experience: "14+ years",
                image: "/team7.jpeg?height=300&width=250",
              },
              {
                name: "Eliana Smith",
                role: "Director at Leanovatics",
                specialization: " Workforce optimization, talent management, leadership development, DEI programs, and HR strategy alignment",
                experience: "11+ years",
                image: "/team8.jpeg?height=300&width=250",
              },
              {
                name: "David Thompson",
                role: "Financial Consultant",
                specialization: "Financial Planning & Analysis",
                experience: "16+ years",
                image: "/team10.png?height=300&width=250",
              },
              {
                name: "Lisa Wang",
                role: "HR Consultant",
                specialization: "Organizational Development",
                experience: "13+ years",
                image: "/team11.png?height=300&width=250",
              },
              {
                name: "Robert Anderson",
                role: "Risk Management Consultant",
                specialization: "Compliance & Risk Assessment",
                experience: "17+ years",
                image: "/team12 (1).png?height=300&width=250",
              },
            ].map((consultant, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Image
                    src={consultant.image || "/placeholder.svg"}
                    alt={consultant.name}
                    width={250}
                    height={300}
                    className="rounded-lg mb-4 mx-auto"
                  />
                  <h3 className="font-semibold text-gray-900 mb-1">{consultant.name}</h3>
                  <p className="text-[#0CBBF2] text-sm font-medium mb-2">{consultant.role}</p>
                  <p className="text-gray-600 text-sm mb-1">{consultant.specialization}</p>
                  <p className="text-gray-500 text-xs">{consultant.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#191A24] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                  <img src="leanovatics.png"></img>               
              </div>
              <p className="text-gray-400">
                Transforming businesses through innovative consulting solutions and strategic planning for sustainable
                growth.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="flex items-center gap-1 hover:text-white">
                    <ChevronRight className="w-4 h-4 hover:text-[#0CBBF2]" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="flex items-center gap-1 hover:text-white">
                    <ChevronRight className="w-4 h-4 hover:text-[#0CBBF2]" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="flex items-center gap-1 hover:text-white">
                    <ChevronRight className="w-4 h-4 hover:text-[#0CBBF2]" />
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="flex items-center gap-1 hover:text-white">
                    <ChevronRight className="w-4 h-4 hover:text-[#0CBBF2]" />
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="flex items-center gap-1 hover:text-white">
                    <ChevronRight className="w-4 h-4 hover:text-[#0CBBF2]" />
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
             <div>
              <h3 className="font-semibold mb-4">Consulting Services</h3>
              <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-1 hover:text-white">
                    <ChevronRight className="w-4 h-4 hover:text-[#0CBBF2]" />
                    Planning Design
                </li>
                <li className="flex items-center gap-1 hover:text-white">
                    <ChevronRight className="w-4 h-4" />
                    Business Strategy
                </li>
                <li className="flex items-center gap-1 hover:text-white">
                    <ChevronRight className="w-4 h-4 hover:text-[#0CBBF2]" />
                    Online Coaching
                </li>
                <li className="flex items-center gap-1 hover:text-white">
                    <ChevronRight className="w-4 h-4 hover:text-[#0CBBF2]" />
                    Business Startup
                </li>
                <li className="flex items-center gap-1 hover:text-white">
                    <ChevronRight className="w-4 h-4 hover:text-[#0CBBF2]" />
                    Business Pattern
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Head Office Address</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-start space-x-2">
                  {/*<MapPin className="w-5 h-5 mt-1 flex-shrink-0" />*/}
                  <span>
                    Lumbung Hidup St 425 East Java
                    <br />
                    Madiun City Block ABC 123
                  </span>
                </div>
                <h3 className="efont-semibold mb-4 text-[#ffffff]">Days Open</h3>
                  <div className="flex items-start space-x-2">
                  <span>Monday - Friday 08 AM - 10 PM</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex justify-between items-center">
            <p className="text-left text-[#0CBBF2]">&copy; 2024 Leanovatics. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 text-[#0CBBF2]" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5 text-[#0CBBF2]" />
              </a>
               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-[#0CBBF2]" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-[#0CBBF2]" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
