import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, Mail, MapPin, Users, TrendingUp, Award, Star, CheckCircle, Menu } from "lucide-react"

export default function LeanovaticsWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">LEANOVATICS</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600">
                Services
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600">
                Team
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <Button variant="outline" size="sm" className="md:hidden">
                <Menu className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Welcome to
                <br />
                <span className="text-blue-600">Leanovatics</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Leanovatics is a global consulting company focusing on helping businesses optimize their operations and
                achieve sustainable growth through innovative solutions and strategic planning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Get Started Today
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Professional businesswoman"
                width={400}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Build Your Business Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Professional businessman"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                <TrendingUp className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Build Your Business
                <br />
                With Right Way
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our comprehensive approach ensures your business grows sustainably while maintaining operational
                efficiency and market competitiveness.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Consultant"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Business Consulting</p>
                    <p className="text-sm text-gray-600">Strategic Planning</p>
                  </div>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              We Make Your Agency
              <br />
              Are Full Bright
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive services are designed to illuminate every aspect of your business operations and drive
              sustainable growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Consulting Services",
                description: "Strategic business consulting to optimize your operations",
                icon: Users,
              },
              {
                title: "Technology Services",
                description: "Modern tech solutions for digital transformation",
                icon: TrendingUp,
              },
              {
                title: "Technology Services",
                description: "Advanced analytics and business intelligence",
                icon: Award,
              },
              {
                title: "Technology Services",
                description: "Custom software development and integration",
                icon: CheckCircle,
              },
            ].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-blue-600 hover:bg-blue-700">View All Services</Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">356+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">784+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">963+</div>
              <div className="text-blue-100">Expert Consultants</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Professional
              <br />
              Consultants
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Michael J. Barton", role: "Senior Consultant", image: "/placeholder.svg?height=300&width=250" },
              { name: "Raymond Galario", role: "Business Analyst", image: "/placeholder.svg?height=300&width=250" },
              { name: "Samuel Bergson", role: "Strategy Director", image: "/placeholder.svg?height=300&width=250" },
              { name: "Douglas Robinson", role: "Lead Consultant", image: "/placeholder.svg?height=300&width=250" },
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={250}
                    height={300}
                    className="rounded-lg mb-4 mx-auto"
                  />
                  <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-blue-600 hover:bg-blue-700">View All Team</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's Get To Work Together
            <br />
            Ready To Work Us
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your business with our expert consulting services. Let's discuss how we can help you achieve your
            goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-gray-900">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Client's Say
              <br />
              About Solutions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Michelle C. Daniels",
                role: "CEO, TechCorp",
                content:
                  "Leanovatics transformed our business operations completely. Their strategic approach and expertise helped us achieve 40% growth in just 6 months.",
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Anthony R. Castillo",
                role: "Founder, StartupXYZ",
                content:
                  "The consulting services provided by Leanovatics were exceptional. They understood our challenges and provided tailored solutions that worked perfectly.",
                image: "/placeholder.svg?height=80&width=80",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Question</h2>
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="FAQ illustration"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-white rounded-lg px-6">
                  <AccordionTrigger className="text-left">What services does Leanovatics offer?</AccordionTrigger>
                  <AccordionContent>
                    We offer comprehensive business consulting services including strategic planning, operational
                    optimization, technology integration, and digital transformation solutions.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    How long does a typical consulting project take?
                  </AccordionTrigger>
                  <AccordionContent>
                    Project duration varies based on scope and complexity, typically ranging from 3-12 months. We
                    provide detailed timelines during our initial consultation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
                  <AccordionTrigger className="text-left">Do you work with small businesses?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we work with businesses of all sizes, from startups to enterprise-level organizations. Our
                    solutions are tailored to meet specific business needs and budgets.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Let's Get in Touch</h2>
              <p className="text-gray-600">
                Ready to transform your business? Get in touch with our expert consultants today and discover how we can
                help you achieve your goals.
              </p>
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Contact illustration"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div>
              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Get A Quote Now!</CardTitle>
                  <CardDescription>We Are Here to Help</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input placeholder="Email Address" type="email" />
                  <Input placeholder="Phone Number" type="tel" />
                  <Textarea placeholder="Your Message" rows={4} />
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="terms" className="rounded" />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to the Terms & Conditions
                    </label>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <span className="text-xl font-bold">LEANOVATICS</span>
              </div>
              <p className="text-gray-400">
                Transforming businesses through innovative consulting solutions and strategic planning for sustainable
                growth.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                  <span className="text-xs">in</span>
                </div>
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-xs">yt</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Consulting Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Business Strategy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Digital Transformation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Operations Consulting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Technology Solutions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Office Address</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>
                    123 Business Ave, Suite 100
                    <br />
                    New York, NY 10001
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>info@leanovatics.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Leanovatics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
