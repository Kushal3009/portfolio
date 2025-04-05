"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="flex flex-col items-center text-center mb-12"
        >
          <Badge variant="outline" className="mb-2">
            About Me
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Journey</h2>
          <div className="w-12 h-1 bg-primary mt-4 mb-6 rounded-full" />
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Get to know more about me, my background, and what drives me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
          >
            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I&apos;m Kushal Padhiyar, a passionate Full-Stack Developer with expertise in building modern web
                    applications using the MERN stack and other cutting-edge technologies.
                  </p>
                  <p>
                    With a strong foundation in JavaScript and its ecosystem, I enjoy creating efficient, scalable, and
                    user-friendly solutions that solve real-world problems.
                  </p>
                  <p>
                    I&apos;m constantly learning and exploring new technologies to stay at the forefront of
                    development. My goal is to build applications that not only function flawlessly but also provide
                    exceptional user experiences.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeInUp}
          >
            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">Education & Experience</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Bachelor of Computer Science Engineering</h4>
                    <p className="text-muted-foreground">Gujarat Technological University • 2020-2024</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Backend Developer Intern</h4>
                    <p className="text-muted-foreground">SRKAY Consulting Group • 4+ months</p>
                    <ul className="list-disc list-inside text-muted-foreground mt-2">
                      <li>Developed and maintained backend systems</li>
                      <li>Collaborated with cross-functional teams</li>
                      <li>Implemented RESTful APIs and database solutions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

