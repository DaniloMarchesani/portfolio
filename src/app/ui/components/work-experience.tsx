"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight, ExternalLink } from "lucide-react"
import Link from "next/link"

type Experience = {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  technologies: string[]
  link?: string
}

const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Futura",
    location: "Remote",
    period: "2024 - Present",
    description: [
      "Led the development of a next-generation product platform",
      "Managed a team of 5 developers and implemented agile methodologies",
      "Reduced API response time by 40% through performance optimization",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Java", "Spring Boot", "PostgreSQL"],
  },
  {
    title: "Software Developer",
    company: "IdeaIT",
    location: "Chieti, Italy",
    period: "04/2024 - 05/2024",
    description: [
      "Built responsive web applications with React and TypeScript",
      "Collaborated with designers to implement pixel-perfect UIs",
      "Contributed to the company's component library",
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "CSS", "Linux"],
  },
]

export default function WorkExperience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="w-full py-16">
      <h2 className="text-lg font-medium mb-8 tracking-tighter"><Link href={"/work"} className="hover:text-blue-500">Work Experience <span className="text-neutral-800 dark:text-neutral-500 text-sm ml-4">// click me for more details</span></Link></h2>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 cursor-pointer"
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <div className="flex items-center">
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="mr-2 text-neutral-500"
                >
                  <ChevronRight size={16} />
                </motion.div>
                <h3 className="font-medium">{experience.title}</h3>
                <span className=" ml-2 mr-1 text-neutral-400">@</span>
                <p   className="text-neutral-800 dark:text-neutral-400">{experience.company}</p>
                {experience.link && (
                  <Link
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={14} />
                  </Link>
                )}
              </div>
              <span className="text-sm text-neutral-500 mt-1 sm:mt-0">{experience.period}</span>
            </div>

            {expandedIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="ml-6 pl-2 border-l border-neutral-200 dark:border-neutral-800"
              >
                <p className="text-sm text-neutral-500 mb-2">{experience.location}</p>
                <ul className="list-disc list-inside text-sm space-y-1 mb-3 text-neutral-800 dark:text-neutral-200">
                  {experience.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-2">
                  {experience.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            <div className="mt-2 border-b border-neutral-100 dark:border-neutral-800 pb-2"></div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
