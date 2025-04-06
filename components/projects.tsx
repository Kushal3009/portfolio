"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment integration.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    demoLink: "https://project-demo.com",
    githubLink: "https://github.com/username/project",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    githubLink: "https://github.com/username/project",
  },
  {
    title: "Real Time Risk Management(RTRMS)",
    description: "A Real-Time Risk Management System (RTRMS) designed for financial institutions to perform Beginning of Day (BOD), End of Day (EOD) operations, capture live market snapshots, and calculate client margins dynamically. The system ensures real-time monitoring of client exposure, portfolio risk, and margin requirements to support informed decision-making and regulatory compliance.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Node.js", "Express", "MSSQL"],
  },
  {
    title: "Weather Application",
    description: "A weather forecast application with location-based services and interactive maps.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "OpenWeather API", "Leaflet", "CSS"],
    // githubLink: "https://github.com/username/project",
  },
  {
    title: "Blog Platform",
    description: "A content management system for blogs with markdown support and user authentication.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    // githubLink: "https://github.com/username/project",
  },
  {
    title: "Customer Support Complain or Complain Ticket Management System",
    description: "A customer generate complain or ticket then support team can manage the ticket and resolve it.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Express", "MSSQL", "Node.js"],
    // githubLink: "https://github.com/username/project",
  },

]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <Badge variant="outline" className="mb-2">
            My Work
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
          <div className="w-12 h-1 bg-primary mt-4 mb-6 rounded-full" />
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            A collection of my recent projects showcasing my skills and expertise.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500 group-hover:scale-105"></div>

              <Card className="relative h-full overflow-hidden transition-all duration-300 backdrop-blur-sm bg-background/80 border border-transparent rounded-xl">

                {/* <div className="relative overflow-hidden h-48">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div> */}
                <CardHeader className="pb-2">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  {/* <Button variant="outline" size="sm" asChild className="border-primary/20 hover:bg-primary/10">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button> */}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

