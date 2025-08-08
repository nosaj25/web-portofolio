"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger,   TabsContent } from "@/components/ui/tabs"
import { Mail, Linkedin, DribbbleIcon as Behance, Dribbble, Github, Phone, Calendar, User, ExternalLink, Download, Search, BrainCircuit } from "lucide-react"


export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-end space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-300 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Contact me
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            {"I'm "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Jason Surya Sandjaya
            </span>
          </h1>
          <h2 className="text-3xl md:text-1xl font-bold text-white mb-8">UI UX Designer - Cyber Security Analyst - Web Developer</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            I design intuitive digital experiences that solve real user problems
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
                href="https://docs.google.com/document/d/1T1F4337FpyeLO58R9sq50ZLt0ljHt0yPemDDCH4FwqA/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
            <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
            <Download className="w-4 h-4 mr-2" />
            Download CV
            </Button>
            </a>

            <Button
            onClick={() => scrollToSection("projects")}
              size="lg"
              variant="outline"
              className="border-slate-600 text-white hover:bg-slate-800 bg-transparent"
            >
              See Projects
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
  {/* Email */}
  <a href="mailto:jasonsurya257@gmail.com" target="_blank" rel="noopener noreferrer">
    <Button size="icon" variant="ghost" className="text-slate-400 hover:text-white">
      <Mail className="w-5 h-5" />
    </Button>
  </a>

  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/jason-surya-sandjaya-b7907b28b/" target="_blank" rel="noopener noreferrer">
    <Button size="icon" variant="ghost" className="text-slate-400 hover:text-white">
      <Linkedin className="w-5 h-5" />
    </Button>
  </a>

  {/* GitHub */}
  <a href="https://github.com/nosaj25" target="_blank" rel="noopener noreferrer">
    <Button size="icon" variant="ghost" className="text-slate-400 hover:text-white">
      <Github className="w-5 h-5" />
    </Button>
  </a>

  {/* Phone (tel link) */}
  <a href="https://wa.me/+6281283377570">
    <Button size="icon" variant="ghost" className="text-slate-400 hover:text-white">
      <Phone className="w-5 h-5" />
    </Button>
  </a>
</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-blue-400 mb-4">Discover my story and what drives me.</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">About Me</h2>

            
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-80 h-96 mx-auto relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 p-1">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/foto-jason.jpeg?height=400&width=320"
                    alt=""
                    width={320}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">{"Jason Surya Sandjaya"}</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                A passionate Informatics student at President University (batch 2023), 
                now in the sixth semester specializing in Cyber Security. Jason is dedicated and hardworking, 
                with internship experience in the Partnership Office that strengthened his professional skills. 
                He has strong leadership, communication, and teamwork abilities and is committed to continuous growth, 
                problem-solving, and making meaningful contributions in academic and professional environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-500 z-0"></div>

            <div className="space-y-8">
              {/* Looking for Internship */}
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 border-4 border-slate-900">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <Card className="flex-1 bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="text-slate-400">2025 - Present</span>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Active</Badge>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Looking for Internship </h3>
                    <p className="text-slate-300">
                      Actively seeking internship opportunities in Cyber Security , Web Development, or related fields to
                      enhance my technical skills and gain real-world industry experience.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* University Club President */}
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 border-4 border-slate-900">
                  <User className="w-8 h-8 text-white" />
                </div>
                <Card className="flex-1 bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="text-slate-400">Mar 2025 - Jun 2025</span>
                      
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      Icon+ 
                    </h3>
                    <h4 className="font-bold text-white mb-4">Project Leader</h4>
                    <p className="text-slate-300">
                      Led the planning and execution of Cyber Game, a cybersecurity-themed project designed to raise awareness and engage participants through technical challenges. 
                       Coordinated team members, managed timelines, and ensured the event ran smoothly. Collaborating closely with game development students, 
                       helped design content and integrate technical elements to create an interactive, impactful experience. Additionally,
                       developed and implemented security protocols to protect web-based systems from unauthorized access and cyber threats.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 border-4 border-slate-900">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <Card className="flex-1 bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="text-slate-400">Feb 2025 – Mar 2025</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      CTF
                    </h3>
                     <h4 className="font-bold text-white mb-4">
                      Participant (Top 3)
                    </h4>
                    <p className="text-slate-300">
                    Participated in the Internal CTF Competition, an exclusive cybersecurity challenge for Informatics students, batch of 2023, at President University, 
                    aimed at enhancing hands-on skills in ethical hacking, digital forensics, cryptography, and system exploitation. Achieved a top 3 placement in the competition 
                    by solving various technical challenges under time pressure. Responsibilities included analyzing vulnerabilities, breaking down complex problems, and applying 
                    cybersecurity techniques to capture flags across different categories.

                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* PU Intern */}
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 border-4 border-slate-900">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z" />
                  </svg>
                </div>
                <Card className="flex-1 bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="text-slate-400">Oct 2023 – Apr 2024</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      President University
                    </h3>
                    <h4 className="font-bold text-white mb-4">
                      Management, Partnership Office
                    </h4>
                    <p className="text-slate-300">
                     Actively contributed to initiating and managing external collaborations by reaching out to potential partners such as companies, 
                     institutions, and organizations. My responsibilities included maintaining effective communication and handling administrative tasks to 
                     support partnership development. Through these efforts, played a key role in fostering strategic relationships that enhanced academic, 
                     research, and student development initiatives.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
<section id="skills" className="py-20 px-6">
  <div className="container mx-auto max-w-6xl">
    <div className="text-center mb-16">
      <p className="text-blue-400 mb-4">Tools for crafting great user experiences.</p>
      <h2 className="text-4xl md:text-6xl font-bold text-white">Tools and Skills</h2>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
      {[
        {
          name: "JavaScript",
          color: "from-[#F7DF1E] to-[#E4C900]",
          logo: "/logos/js.png", // Assuming public/logos/js.png
        },
        {
          name: "Java",
          color: "from-white to-white",
          logo: "/logos/java.png", // Assuming public/java.png (direct in public folder)
        },
        {
          name: "HTML",
          color: "from-[#E44D26] to-[#F16529]",
          logo: "/logos/html.png", // Assuming public/logos/html.svg
        },
        {
          name: "CSS",
          color: "from-[#264DE4] to-[#2965F1]",
          logo: "/logos/css.png", // Assuming public/logos/css.svg
        },
        {
          name: "Tailwind CSS",
          color: "from-white to-white",
          logo: "/logos/tailwindcss.png", // Assuming public/logos/tailwindcss.svg
        },
        {
          name: "MySQL",
          color: "from-white to-white",
          logo: "/logos/mysql.png", // Assuming public/logos/mysql.svg
        },
        {
          name: "Kali Linux",
          color: "from-white to-white",
          logo: "/logos/kali-linux.png", // Assuming public/logos/kali-linux.svg
        },
        {
          name: "Android Studio",
          color: "from-white to-white",
          logo: "/logos/androidstudio.png", // Assuming public/logos/wireshark.svg
        },
        {
          name: "Burp Suite",
          color: "from-white to-white",
          logo: "/logos/burpsuit.png", // Assuming public/logos/burp-suite.svg
        },
        {
          name: "React",
          color: "from-white to-white",
          logo: "/logos/react.png", // Assuming public/logos/react.svg
        },
        {
          name: "Net Beans",
          color: "from-white to-white",
          logo: "/logos/netbeans.png", // Assuming public/logos/android-studio.svg
        },
        {
          name: "Ubuntu",
          color: "from-[#333333] to-[#1c1c1c]",
          logo: "/logos/ubuntu.png", // Assuming public/logos/ubuntu.svg
        },
      ].map((tool, index) => (
        <Card
          key={index}
          className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors"
        >
          <CardContent className="p-6 flex flex-col items-center justify-center">
            <div
              className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tool.color} flex items-center justify-center mb-4`}
            >
              <img
                src={tool.logo}
                alt={`${tool.name} logo`}
                className="w-8 h-8 object-contain"
              />
            </div>
            {/* Changed font-medium to font-bold here */}
            <p className="text-slate-300 text-center text-sm font-bold">{tool.name}</p>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* This is your second grid for other skills, left unchanged */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        ["UX Research", "Usability Testing", "Forensic"],
        ["UI Design", "Mobile Programming", "Web Security"],
        ["Front End", "Cryptography", "Penetration Testing"],
      ].map((column, columnIndex) => (
        <div key={columnIndex} className="space-y-4">
          {column.map((skill, skillIndex) => (
            <Card
              key={skillIndex}
              className="bg-slate-800/30 border-slate-700 hover:bg-slate-700/30 transition-colors"
            >
              <CardContent className="p-4">
                <p className="text-slate-300 text-center">{skill}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ))}
    </div>
  </div>
</section>
      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-blue-400 mb-4">{"Let's have a look at my portfolio"}</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white">Featured Projects</h2>
          </div>

          <div className="space-y-12">
            <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 space-y-6">
                    <h3 className="text-2xl font-bold text-white">The Cyber Games | Icon+</h3>
                    <p className="text-slate-300">
                     The Cyber Games is web-based cybersecurity game designed to enhance awareness and practical knowledge of cyber threats. 
                     The project aims to educate users on cybersecurity concepts through interactive challenges while implementing 
                     real-world security practices to safeguard the platform.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                        onClick={() => window.open("https://docs.google.com/document/d/1_HdsI5Cq_NczGxuVm4lvCU6iWoXnlI3cphg68wXZ55Y/edit?tab=t.0", "_blank")}
                      >
                        Full Project Report <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                        Web Security
                      </Badge>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                        Web Development
                      </Badge>
                    </div>
                  </div>
                  <div className=" from-slate-300 to-slate-400 p-8 flex items-center justify-center">
                    <div className="w-full max-w-sm">
                      <Image
                        src="/thecybergame.png?height=900&width=900"
                        alt=""
                        width={400}
                        height={300}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className=" from-slate-700 to-slate-800 p-8 flex items-center justify-center order-2 md:order-1">
                    <div className="w-full max-w-sm">
                      <Image
                        src="/pulof.png?height=300&width=400"
                        alt=""
                        width={400}
                        height={300}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="p-8 space-y-6 order-1 md:order-2">
                    <h3 className="text-2xl font-bold text-white">PULOF</h3>
                    <p className="text-slate-300">
                      The PU Lost and Found App is a mobile platform for the President University community to report, search,
                      and manage lost items on campus, promoting efficiency and accessibility for students, staff, and faculty.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                          Mobile App Design
                        </Badge>
                      </div>
                      <Button
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                        onClick={() => window.open("https://github.com/nosaj25/Lost-And-Found-App", "_blank")}
                      >
                        Full project <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 space-y-6">
                    <h3 className="text-2xl font-bold text-white">CTF | Internal Competition</h3>
                    <p className="text-slate-300">
                      The Internal CTF Competition is a cybersecurity challenge held exclusively for Informatics students, batch of 2023, at President University, 
                      designed to strengthen practical skills in ethical hacking, digital forensics, cryptography, and system exploitation. 
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                        onClick={() => window.open("https://docs.google.com/document/d/1_HdsI5Cq_NczGxuVm4lvCU6iWoXnlI3cphg68wXZ55Y/edit?tab=t.0://github.com/yourusername", "_blank")}
                      >
                        Full Report <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                        Competition
                      </Badge>
                    </div>
                  </div>
                  <div className=" from-slate-700 to-slate-800 p-8 flex items-center justify-center">
                    <div className="w-full max-w-sm">
                      <Image
                        src="/CTF.png?height=300&width=400"
                        alt="Employee Self Service App"
                        width={400}
                        height={300}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className=" from-slate-700 to-slate-800 p-8 flex items-center justify-center order-2 md:order-1">
                    <div className="w-full max-w-sm">
                      <Image
                        src="/taskmanager.png?height=300&width=400"
                        alt=""
                        width={400}
                        height={300}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="p-8 space-y-6 order-1 md:order-2">
                    <h3 className="text-2xl font-bold text-white">Task Manager</h3>
                    <p className="text-slate-300">
                      The PU Lost and Found App is a mobile platform for the President University community to report, search,
                      and manage lost items on campus, promoting efficiency and accessibility for students, staff, and faculty.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                          Docker
                        </Badge>
                        <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                          Python
                        </Badge>
                      </div>
                      <Button
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                        onClick={() => window.open("https://github.com/nosaj25/taskmanager", "_blank")}
                      >
                        Full project <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
           <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 space-y-6">
                    <h3 className="text-2xl font-bold text-white">Security Risk Management | Security Risk Management Project</h3>
                    <p className="text-slate-300">
                      The Security Risk Management System is a cybersecurity project developed based on the NIST 800-30 Rev.1 framework, 
                      aimed at identifying threats, assessing vulnerabilities, and analyzing risks to 
                      protect digital assets and support informed decision-making.The system integrates real-time threat 
                      intelligence using MISP and emphasizes collaborative risk mitigation through detailed reporting and analysis.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                        onClick={() => window.open("https://docs.google.com/document/d/13HlDvJtRAHR07GO4UGei8EvEmjQJGMvV4KddSMj_LJE/edit?usp=sharing", "_blank")}
                      >
                        Full Report <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                        NIST Framework
                      </Badge>
                       <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                       MISP Integration
                      </Badge>
                      
                    </div>
                  </div>
                  <div className=" from-slate-700 to-slate-800 p-8 flex items-center justify-center">
                    <div className="w-full max-w-sm">
                      <Image
                        src="/SRM.png?height=300&width=400"
                        alt="Employee Self Service App"
                        width={400}
                        height={300}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card> 
            
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Contact Me</h2>
          <p className="text-xl text-slate-300 mb-12">{"Build with me. Create something exceptional."}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
  <a
    href="mailto:your.jasonsurya257@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      size="lg"
      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
    >
      <Mail className="w-4 h-4 mr-2" />
      Send Email
    </Button>
  </a>

  <a
    href="https://www.linkedin.com/in/jason-surya-sandjaya-b7907b28b/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      size="lg"
      variant="outline"
      className="border-slate-600 text-white hover:bg-slate-800 bg-transparent"
    >
      <Linkedin className="w-4 h-4 mr-2" />
      Connect on LinkedIn
    </Button>
  </a>
</div>


          <div className="flex justify-center space-x-6">
  {/* Email */}
  <a href="mailto:jasonsurya257@gmail.com" target="_blank" rel="noopener noreferrer">
    <Button size="icon" variant="ghost" className="text-slate-400 hover:text-white">
      <Mail className="w-5 h-5" />
    </Button>
  </a>

  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/jason-surya-sandjaya-b7907b28b/" target="_blank" rel="noopener noreferrer">
    <Button size="icon" variant="ghost" className="text-slate-400 hover:text-white">
      <Linkedin className="w-5 h-5" />
    </Button>
  </a>

  {/* GitHub */}
  <a href="https://github.com/nosaj25" target="_blank" rel="noopener noreferrer">
    <Button size="icon" variant="ghost" className="text-slate-400 hover:text-white">
      <Github className="w-5 h-5" />
    </Button>
  </a>

  {/* WhatsApp */}
  <a href="https://wa.me/+6281283377570" target="_blank" rel="noopener noreferrer">
    <Button size="icon" variant="ghost" className="text-slate-400 hover:text-white">
      <Phone className="w-5 h-5" />
    </Button>
  </a>
</div>
        </div>
      </section>
    </div>
  )
}
