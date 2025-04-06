"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Backend Developer Intern",
    company: "SRKAY Consulting Group",
    period: "Jan 2024 - Apr 2024",
    description:
      "Worked on backend development using Node.js and Express.js. Implemented RESTful APIs and database solutions.",
    responsibilities: [
      "Developed and maintained backend systems using Node.js and Express",
      "Implemented RESTful APIs for client applications",
      "Worked with MongoDB and MsSQL for database management",
      "Create and maintained documentation for APIs"
    ],
  },
  {
    title: "Backend Developer",
    company: "ANV Tech (Arham Share Pvt. Ltd)",
    period: "Nov 2024 - Present",
    description:
      "Developed and maintained maintails Backend systems using Node.js and Express. Worked on database management and API development.",
    responsibilities: [
      "Developed and maintained backend systems using Node.js and Express",
      "Implemented RESTful APIs for client applications",
      "Worked with MsSQL for database management",
      "Create and maintained documentation for APIs"
    ],
  },
]

export default function Experience() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  }

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <Badge variant="outline" className="mb-2">
            Work Experience
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Professional Journey</h2>
          <div className="w-12 h-1 bg-primary mt-4 mb-6 rounded-full" />
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            My professional experience and career milestones.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-border transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div key={index} variants={item} transition={{ duration: 0.5 }} className="mb-8 md:mb-12">
              <div className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="md:w-1/2 relative">
                  {/* Timeline dot */}
                  <div
                    className={`hidden md:block absolute top-6 w-4 h-4 rounded-full bg-primary z-10 
                    ${index % 2 === 0 ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"}`}
                  />

                  <div className={`p-1 md:p-6 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <Card className="hover:bg-background/80 hover:border-b-2 hover:border-primary transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase className="h-4 w-4 text-primary" />
                          <CardTitle>{exp.title}</CardTitle>
                        </div>
                        <CardDescription className="flex items-center gap-2">
                          <span>{exp.company}</span>
                          <span>•</span>
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {exp.period}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-3 text-muted-foreground">{exp.description}</p>
                        <ul className="space-y-1 list-disc list-inside text-sm text-muted-foreground">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex}>{resp}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

