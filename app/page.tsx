import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Mail, Phone, MapPin, Download, Calendar, GraduationCap, Award } from "lucide-react"
import Link from "next/link"
import { ContactForm } from "./contact-form"

export default function MohsinPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Mohsin Shaikh</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>
          <Button
            className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800"
            asChild
          >
            <Link href="/resume.pdf" target="_blank">
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-700/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  💻 Available for Full-Time Opportunities
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Hi, I'm
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                    {" "}
                    Mohsin Shaikh
                  </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700">Full Stack Web Developer</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Passionate about creating robust web applications using .NET, Angular, and SQL. Currently working at
                  Ernst & Young, building enterprise solutions that make a difference.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-lg px-8 py-3"
                  asChild
                >
                  <Link href="#contact">Get In Touch</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-3 bg-transparent"
                  asChild
                >
                  <Link href="#projects">View Projects</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <Link
                  href="mailto:smohsin223@gmail.com"
                  className="flex items-center space-x-2 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>smohsin223@gmail.com</span>
                </Link>
                <Link
                  href="tel:+919892599694"
                  className="flex items-center space-x-2 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>+91 9892599694</span>
                </Link>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative z-10">
                <img
                  src="/mohsin-profile.png"
                  alt="Mohsin Shaikh - Full Stack Developer"
                  width={500}
                  height={600}
                  className="rounded-3xl shadow-2xl"
                />
                <Link
                  href="https://wa.me/919892599694?text=Hi%20Mohsin,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20opportunity."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-green-600 transition-colors">
                      Available for work
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized in modern web technologies with a focus on scalable, enterprise-grade solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Frontend Development",
                skills: ["Angular", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
                description: "Creating responsive, user-friendly interfaces with modern frameworks.",
              },
              {
                icon: Globe,
                title: "Backend Development",
                skills: [".NET", ".NET Core", "MVC", "Web Forms", "Web API"],
                description: "Building robust server-side applications and RESTful APIs.",
              },
              {
                icon: Database,
                title: "Database Management",
                skills: ["SQL Server", "T-SQL", "Stored Procedures", "Database Design"],
                description: "Designing and optimizing database structures for performance.",
              },
            ].map((skill, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-center">{skill.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skill.skills.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-blue-50 text-blue-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              My professional journey in web development and software engineering.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                company: "Ernst & Young (EY)",
                role: "Full Stack Developer",
                period: "Jan 2022 - Present",
                location: "Mumbai, India",
                description:
                  "Working at client location on enterprise solutions using Angular, .NET, .NET Core, SQL, Web Forms, Angular JS, MVC, HTML, CSS",
                technologies: ["Angular", ".NET Core", "SQL Server", "MVC", "Web Forms"],
                current: true,
              },
              {
                company: "Bluezone Systems Pvt Ltd",
                role: "Web Developer",
                period: "Sep 2021 - Dec 2021",
                location: "Mumbai, India",
                description:
                  "Worked on internal projects using .NET, SQL, MVC, Angular JS, HTML, CSS, Bootstrap, JavaScript, Web API",
                technologies: [".NET", "Angular JS", "SQL", "MVC", "Bootstrap"],
                current: false,
              },
              {
                company: "HERE Maps",
                role: "Intern",
                period: "Feb 2018 - May 2018",
                location: "Mumbai, India",
                description: "Added new map lines on newly added roads using their HERE MAPS official application.",
                technologies: ["HERE Maps API", "GIS"],
                current: false,
              },
            ].map((job, index) => (
              <Card
                key={index}
                className={`border-l-4 ${job.current ? "border-l-green-500" : "border-l-blue-500"} shadow-lg`}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900">{job.role}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-blue-600">{job.company}</CardDescription>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2 md:mt-0">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      {job.current && <Badge className="bg-green-100 text-green-800">Current</Badge>}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-blue-200 text-blue-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enterprise solutions I've worked on at Ernst & Young and other organizations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "IN Payroll Process",
                description:
                  "Comprehensive payroll processing system for Indian operations with automated calculations and compliance features.",
                technologies: [".NET Core", "Angular", "SQL Server"],
                status: "Enterprise Solution",
              },
              {
                title: "IN EY Payroll Common DB",
                description: "Centralized database system for payroll data management across multiple business units.",
                technologies: ["SQL Server", ".NET", "Web API"],
                status: "Database Solution",
              },
              {
                title: "IN Digital Gate Pass",
                description: "Digital gate pass system for secure entry and exit management with real-time tracking.",
                technologies: ["Angular", ".NET Core", "SQL"],
                status: "Security System",
              },
              {
                title: "IN Client Master",
                description:
                  "Client management system for maintaining comprehensive client information and relationships.",
                technologies: [".NET", "MVC", "SQL Server"],
                status: "CRM Solution",
              },
              {
                title: "IN FS Repository",
                description: "Financial services repository system for document management and compliance tracking.",
                technologies: ["Angular", ".NET Core", "SQL"],
                status: "Document Management",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700 text-xs">
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-gray-200 text-gray-700 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Education */}
            <div className="h-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <GraduationCap className="w-8 h-8 mr-3 text-blue-600" />
                Education
              </h2>
              <div className="space-y-6">
                {/* BSC CS */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      Bachelor of Science in Computer Science (BSC CS)
                    </CardTitle>
                    <CardDescription className="text-lg text-blue-600">
                      Maharashtra College of Arts, Commerce & Science
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-gray-700">University of Mumbai</p>
                      <p className="text-gray-600">2020-2021 • SGPI: 7.88</p>
                      <p className="text-gray-600">Mumbai, India</p>
                    </div>
                  </CardContent>
                </Card>

                {/* HSC */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      Higher Secondary Certificate (HSC)
                    </CardTitle>
                    <CardDescription className="text-lg text-blue-600">
                      Maharashtra College of Arts, Commerce & Science
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-gray-700">University of Mumbai</p>
                      <p className="text-gray-600">2017-2018 • Percentage: 47%</p>
                      <p className="text-gray-600">Mumbai, India</p>
                    </div>
                  </CardContent>
                </Card>

                {/* SSC */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      Secondary School Certificate (SSC)
                    </CardTitle>
                    <CardDescription className="text-lg text-blue-600">Anjuman Islam Urdu High School</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-gray-700">Maharashtra Board</p>
                      <p className="text-gray-600">2014-2015 • Percentage: 74%</p>
                      <p className="text-gray-600">Mumbai, India</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Certifications */}
            <div className="h-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Award className="w-8 h-8 mr-3 text-blue-600" />
                Certifications
              </h2>
              <div className="space-y-4 h-full flex flex-col">
                {[
                  "Microsoft Azure Fundamentals",
                  "GIT and Visual Studio with Azure DevOps",
                  "DevOps CI/CD Continuous Integration",
                  "C# Basics for Beginners",
                  "Microsoft SQL for Beginners",
                  "Database Management System (Part 1 & 2)",
                ].map((cert, index) => (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700 font-medium">{cert}</span>
                        <Badge variant="outline" className="ml-auto text-xs">
                          Udemy
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
              <p className="text-xl text-gray-600">
                I'm always interested in new opportunities and exciting projects. Let's discuss how we can collaborate.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                    <Link
                      href="tel:+919892599694"
                      className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      +91 9892599694
                    </Link>
                    <p className="text-sm text-gray-500">Available Mon-Fri 9am-6pm IST</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                    <Link
                      href="mailto:smohsin223@gmail.com"
                      className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      smohsin223@gmail.com
                    </Link>
                    <p className="text-sm text-gray-500">I'll respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                    <Link
                      href="https://www.google.com/maps/search/?api=1&query=Mumbai,+Maharashtra,+India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      Mumbai, Maharashtra
                    </Link>
                    <p className="text-sm text-gray-500">India</p>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Mohsin Shaikh</span>
              </div>
              <p className="text-gray-400">
                Full Stack Web Developer specializing in .NET, Angular, and SQL Server solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#about" className="hover:text-blue-400 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#experience" className="hover:text-blue-400 transition-colors">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="hover:text-blue-400 transition-colors">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Technologies</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/skills/dotnet" className="hover:text-blue-400 transition-colors">
                    .NET & .NET Core
                  </Link>
                </li>
                <li>
                  <Link href="/skills/angular" className="hover:text-blue-400 transition-colors">
                    Angular
                  </Link>
                </li>
                <li>
                  <Link href="/skills/sql" className="hover:text-blue-400 transition-colors">
                    SQL Server
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="mailto:smohsin223@gmail.com" className="hover:text-blue-400 transition-colors">
                    Email
                  </Link>
                </li>
                <li>
                  <Link href="tel:+919892599694" className="hover:text-blue-400 transition-colors">
                    Phone
                  </Link>
                </li>
                <li>
                  <Link href="/resume.pdf" className="hover:text-blue-400 transition-colors">
                    Resume
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Professional Profiles</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link
                    href="https://www.naukri.com/mnjuser/profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity flex items-center space-x-3"
                  >
                    <img src="/naukri-logo.png" alt="Naukri" className="w-6 h-6" />
                    <span className="hover:text-blue-400 transition-colors">Naukri.com</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/mohsin-shaikh-72179516b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity flex items-center space-x-3"
                  >
                    <img src="/linkedin-logo.png" alt="LinkedIn" className="w-6 h-6" />
                    <span className="hover:text-blue-400 transition-colors">LinkedIn</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.shine.com/myshine/myprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity flex items-center space-x-3"
                  >
                    <img src="/shine-logo.png" alt="Shine.com" className="w-6 h-6" />
                    <span className="hover:text-blue-400 transition-colors">Shine.com</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity flex items-center space-x-3"
                  >
                    <img src="/indeed-logo.png" alt="Indeed" className="w-6 h-6" />
                    <span className="hover:text-blue-400 transition-colors">Indeed</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Mohsin Shaikh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
