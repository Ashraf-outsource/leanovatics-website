import Image from "next/image"
import Link from "next/link"
import { ChevronRight,ChevronsRight,Play } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {Phone, Mail,MapPin,Users,TrendingUp,
Award,
  CheckCircle,
  Menu,
  Target,
  Eye,
  Heart,
  Search,
} from "lucide-react"

export default function AboutPage() {
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
              <Link href="/about" className="text-[#0CBBF2] font-semibold">
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-[#0CBBF2]">
                Services
              </Link>
              <Link href="/team" className="text-gray-700 hover:text-[#0CBBF2]">
                Team
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#0CBBF2]">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              {/*<Search className="w-5 h-5 text-gray-600" />*/}
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
              <Button variant="outline" size="sm" className="md:hidden">
                <Menu className="w-4 h-4" />
              </Button>
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
            <span className="text-[#0CBBF2]">About Us</span>
          </div>
        </div>
      </section>

      {/* About Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                About
                <br />
                <span className="text-[#0CBBF2]">Leanovatics</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Leanovatics was founded by a team of visionary professionals – PhD and MBA alumni 
                from a prestigious institution who aimed to merge academic rigor with practical 
                problem-solving. Built on principles of collaboration, innovation, and leadership, 
                Leanovatics has grown from a small group of elite consultants into a trusted global 
                consultancy, renowned for its excellence and client-focused results.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/about1.png?height=500&width=500"
                alt="About Leanovatics"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/our story.png?height=400&width=500"
                alt="Company Story"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded on the principles of collaboration, innovation, and leadership, Leanovatics was born from 
                the desire to create a consultancy that could harness the power of interdisciplinary knowledge. 
                The founding team—comprising PhD and MBA alumni—recognized a gap in the market for a firm that could
                 tackle complex issues across industries with a holistic approach. Leanovatics started as a small, 
                 elite team of consultants and quickly grew due to its reputation for excellence, integrity, and 
                 results-driven solutions. Today, it is recognized as one of the leading consultancies in business, 
                 governance, and development, with a global presence.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission, Vision, Values */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These fundamental principles guide everything we do and shape our approach to business consulting.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-[#0CBBF2]" />
                </div>
                <CardTitle className="text-xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our mission is to empower organizations and institutions worldwide by delivering innovative, 
                  evidence-based solutions. We aim to foster sustainable growth, improve leadership practices, 
                  and drive positive social and economic development. Through our vast network of professionals,
                  we provide tailored strategies that enable our clients to navigate challenges and
                  seize opportunities with confidence..
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-[#0CBBF2]" />
                </div>
                <CardTitle className="text-xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To be the world’s most trusted consultancy firm, known for our unparalleled expertise, innovative approaches,
                  and commitment to driving meaningful change. We aspire to become the go-to partner for organizations seeking 
                  to enhance their leadership, operations, and impact in a rapidly evolving global landscape
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Values Section with Image */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              With Leanovatics you gain access
              <br />
              and expertise
            </h2>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Innovation",
                description:
                  "We are committed to driving forward-thinking solutions that challenge the status quo and create lasting impact.",
              },
              {
                title: "Excellence",
                description:
                  "We strive for the highest standards in everything we do, delivering exceptional results for our clients.",
              },
              {
                title: "Collaboration",
                description:
                  "We believe that the best solutions are born from teamwork and the exchange of diverse ideas and perspectives.",
              },
              {
                title: "Integrity",
                description:
                  "We act with honesty and transparency in all our dealings, building trust and long-term relationships with clients.",
              },
              {
                title: "Sustainability",
                description:
                  "We focus on creating sustainable solutions that promote long-term growth, social equity, and environmental stewardship.",
              },
              {
                title: "Leadership",
                description:
                  "We inspire leadership in every organization we work with, empowering them to achieve their full potential.",
              },
              {
                title: "Diversity",
                description:
                  "We embrace and celebrate the richness of perspectives that come from different backgrounds, industries, and geographies.",
              },
            ].map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Statement */}
          <div className="text-center">
            <p className="text-lg italic text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Leanovatics continues to stand as a beacon of innovation, excellence, and leadership, helping businesses
              and governments navigate their most pressing challenges while fostering growth and development across
              sectors.
            </p>
          </div>
        </div>
      </section>
      {/* Services Showcase Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">With Leanovatics you gain access and expertise</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <Image
                src="/Political1.png"
                alt="Governance and Political Consulting"
                width={400}
                height={400}
                className="rounded-lg"
              />
              <h3 className="text-xl font-bold text-gray-900">Governance and Political Consulting</h3>
              <p className="text-gray-600">
                Empower governments, political institutions, and leaders with strategies that foster democratic
                principles, effective policies, and long-term stability.
              </p>
            </div>
            <div className="space-y-4">
              <Image
                src="/Management1.png"
                alt="Management Consulting"
                width={400}
                height={400}
                className="rounded-lg"
              />
              <h3 className="text-xl font-bold text-gray-900">Management Consulting</h3>
              <p className="text-gray-600">
                Drive operational and strategic optimization to empower your organization and achieve lasting growth.
              </p>
            </div>
            <div className="space-y-4">
              <Image
                src="/Financial1.png"
                alt="Financial Consulting"
                width={400}
                height={400}
                className="rounded-lg"
              />
              <h3 className="text-xl font-bold text-gray-900">Financial Consulting</h3>
              <p className="text-gray-600">
                Attain financial stability and sustainable growth with our data-driven financial strategies.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/services" >
              <Button size="lg" className="bg-[#0CBBF2] hover:bg-blue-700">
                View All Team
                <ChevronsRight className="w-4 h-4 grid md:grid-cols-1 gap-8" />
              </Button>
            </Link>
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
