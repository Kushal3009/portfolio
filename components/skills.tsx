"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", level: 30 },
      { name: "JavaScript", level: 65 },
      { name: "HTML", level: 80 },
      { name: "CSS", level: 40 },
      { name: "Tailwind CSS", level: 60 },
      { name: "Bootstrap", level: 70 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 60 },
      { name: "MongoDB", level: 45 },
      { name: "MSSQL", level: 60 },
      { name: "REST API", level: 70 },
      { name: "Django", level: 40 },
      { name: "Flask", level: 50 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", level: 50 },
      { name: "GitHub", level: 50 },
      { name: "Docker", level: 10 },
      { name: "VS Code", level: 80 },
      { name: "Postman", level: 70 },
      { name: "Microsoft Office", level: 70 },
    ],
  },
]

export default function Skills() {
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
    <section id="skills" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <Badge variant="outline" className="mb-2">
            My Skills
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Expertise</h2>
          <div className="w-12 h-1 bg-primary mt-4 mb-6 rounded-full" />
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            A showcase of my technical skills and proficiency levels in various technologies.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((skillGroup, index) => (
            <motion.div key={index} variants={item} transition={{ duration: 0.5 }}>
              <Card className="h-full overflow-hidden border-primary/20 transition-all duration-300 hover:shadow-md hover:border-primary/50 backdrop-blur-sm bg-background/80">
                <CardHeader className="pb-2">
                  <CardTitle>{skillGroup.category}</CardTitle>
                  <CardDescription>My {skillGroup.category.toLowerCase()} skills and proficiency</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full rounded-full bg-gradient-to-r from-primary/80 to-primary"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

