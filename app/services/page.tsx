import Image from "next/image"
import Link from "next/link"
import { ChevronRight,ChevronsRight,Play } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Menu, Search } from "lucide-react"
import { useState } from "react"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageCircle, X } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function ServicesPage() {
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
              <Link href="/services" className="text-[#0CBBF2] font-semibold">
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
              <div className="hidden md:flex items-center space-x-2 text-sm text{#000000}">
                <img src="phonelogo.png"></img>
                <span>Phone Us</span>  
                <span>+1 (555) 123-4567</span>
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
            <span className="text-[#0CBBF2]">Services</span>
          </div>
        </div>
      </section>

      {/* Services Hero */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#0CBBF2]">Services</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Leanovatics offers a wide range of consultancy services designed to
            address the unique needs of each client. Our expertise spans industries, 
            ensuring that you receive strategic guidance tailored to your goals 
            and challenges.
          </p>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">With Leanovatics you gain access and expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our diverse range of consulting services is designed to address all aspects of your business needs with
              specialized expertise and proven methodologies.
            </p>
          </div>

          {/* First Row of Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/Political1.png"
                alt="Governance and Political Consulting"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Governance and Political Consulting</h3>
                <p className="text-gray-600">
                  Empower governments, political institutions, and leaders with strategies that foster democratic
                  principles, effective policies, and long-term stability.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/Management1.png"
                alt="Management Consulting"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Management Consulting</h3>
                <p className="text-gray-600">
                  Drive operational and strategic optimization to empower your organization and achieve lasting growth.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/Financial1.png"
                alt="Financial Consulting"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Financial Consulting</h3>
                <p className="text-gray-600">
                  Attain financial stability and sustainable growth with our data-driven financial strategies.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/Human.png"
                alt="Human Resources Consulting"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Human Resources Consulting</h3>
                <p className="text-gray-600">
                  Enhance workforce effectiveness, improve talent management, and support employee development.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/AI.png"
                alt="AI Consulting"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">AI Consulting</h3>
                <p className="text-gray-600">
                  Unlock the potential of artificial intelligence to optimize workflows, drive innovation, and make
                  data-driven decisions that propel your organization forward.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/Marketing.png"
                alt="Marketing Consulting"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Marketing Consulting</h3>
                <p className="text-gray-600">
                  Build a strong market presence with data-driven, audience-centric marketing strategies.
                </p>
              </div>
            </div>
          </div>

          {/* Second Row of Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/Mining.png"
                alt="Mining and Sustainable Development Consulting"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mining and Sustainable Development Consulting</h3>
                <p className="text-gray-600">
                  Achieve responsible mining practices while promoting economic growth, environmental stewardship, and
                  social equity for a more sustainable future.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/Environmental.png"
                alt="Environmental Consulting"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Environmental Consulting</h3>
                <p className="text-gray-600">
                  Promote sustainable practices and regulatory compliance to support a greener future.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/Legal.png"
                alt="Legal Consulting"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Legal Consulting</h3>
                <p className="text-gray-600">
                  Navigate complex legal landscapes with expert advice tailored to your industry.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/Public.png"
                alt="Public Relations Consulting"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Public Relations Consulting</h3>
                <p className="text-gray-600">
                  Strengthen your brand's communication strategies to reach and resonate with your target audience.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src="/Healthcare.png"
                alt="Healthcare Consulting"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Healthcare Consulting</h3>
                <p className="text-gray-600">
                  Improve healthcare service delivery and management for better patient outcomes and operational
                  efficiency.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src="/Blockchain.png"
                alt="Blockchain Consulting"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Blockchain Consulting</h3>
                <p className="text-gray-600">
                  Leverage decentralized technologies to streamline processes, enhance security, and create innovative
                  solutions for your business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Services */}
      {/*<section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Business Strategy Consulting",
                description:
                  "Develop comprehensive strategies that align with your business goals and market opportunities.",
                features: ["Strategic Planning", "Market Analysis", "Competitive Intelligence", "Growth Strategy"],
                icon: Target,
                color: "bg-blue-100 text-[#0CBBF2]",
              },
              {
                title: "Digital Transformation",
                description: "Modernize your operations with cutting-edge technology solutions and digital processes.",
                features: ["Process Automation", "Cloud Migration", "Digital Workflows", "Technology Integration"],
                icon: Zap,
                color: "bg-purple-100 text-purple-600",
              },
              {
                title: "Operations Optimization",
                description:
                  "Streamline your operations to improve efficiency, reduce costs, and enhance productivity.",
                features: ["Process Improvement", "Cost Reduction", "Quality Management", "Supply Chain Optimization"],
                icon: Settings,
                color: "bg-green-100 text-green-600",
              },
              {
                title: "Data Analytics & BI",
                description: "Transform your data into actionable insights for better decision-making and performance.",
                features: ["Data Analysis", "Business Intelligence", "Reporting Solutions", "Predictive Analytics"],
                icon: BarChart3,
                color: "bg-orange-100 text-orange-600",
              },
              {
                title: "Innovation Management",
                description: "Foster innovation culture and implement creative solutions to drive business growth.",
                features: ["Innovation Strategy", "Product Development", "R&D Optimization", "Creative Solutions"],
                icon: Lightbulb,
                color: "bg-yellow-100 text-yellow-600",
              },
              {
                title: "Risk Management",
                description: "Identify, assess, and mitigate business risks to protect your organization's future.",
                features: ["Risk Assessment", "Compliance Management", "Security Consulting", "Crisis Management"],
                icon: Shield,
                color: "bg-red-100 text-red-600",
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div
                    className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <service.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-center">{service.description}</CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-[#0CBBF2] hover:bg-blue-700">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Consulting Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and measurable results.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your business challenges and objectives" },
              {
                step: "02",
                title: "Analysis",
                description: "Comprehensive assessment of current state and opportunities",
              },
              {
                step: "03",
                title: "Strategy",
                description: "Developing tailored solutions and implementation roadmap",
              },
              {
                step: "04",
                title: "Execution",
                description: "Implementing solutions with ongoing support and monitoring",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#0CBBF2] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      {/*<section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our expertise spans across multiple industries, delivering specialized solutions for diverse business
              needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Healthcare",
              "Financial Services",
              "Manufacturing",
              "Technology",
              "Retail & E-commerce",
              "Education",
              "Real Estate",
              "Non-Profit",
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <h3 className="font-semibold text-gray-900">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* CTA Section */}
      {/*<section className="bg-[#0CBBF2] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our consulting services can help transform your business and achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#0CBBF2] hover:bg-gray-100">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-[#0CBBF2]">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>*/}

      {/* Expert Guidance Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Guidance</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <Image
                src="/pexels1.png?height=200&widt200"
                alt="Client testimonial"
                width={200}
                height={200}
                className="rounded-lg flex-shrink-0"
              />
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  "Leanovatics helped me launch my startup with invaluable insights and support throughout the process."
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Image
                src="/pexels2.png?height=200&width=200"
                alt="Client testimonial"
                width={200}
                height={200}
                className="rounded-lg flex-shrink-0"
              />
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  "Their consulting services transformed my business idea into a successful reality. Highly recommend!"
                </p>
              </div>
            </div>
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
                {/*
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>info@leanovatics.com</span>
                </div>*/}
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
