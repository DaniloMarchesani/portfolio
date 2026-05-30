"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Title from "./Title";
import Text from "./Text";

type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  link?: string;
};

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
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Java",
      "Spring Boot",
      "PostgreSQL",
    ],
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
];

export default function WorkExperience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full py-8"
    >
      <Title
        as="h2"
        className="mb-6 text-xl leading-none text-neutral-950 dark:text-neutral-50"
      >
        <Link href={"/work"} className="hover:text-blue-500">
          Work Experience
        </Link>
      </Title>
      <div className="space-y-7">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div
              className="flex cursor-pointer flex-col gap-2 sm:flex-row sm:items-start sm:justify-between"
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
            >
              <div className="flex min-w-0 items-start">
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="mr-2 mt-0.5 text-neutral-500"
                >
                  <ChevronRight size={16} />
                </motion.div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
                    <h3 className="font-semibold text-neutral-950 dark:text-neutral-100">
                      {experience.title}
                    </h3>
                    <span className="text-neutral-400">@</span>
                    <Text
                      as="span"
                      className="text-neutral-700 dark:text-neutral-400"
                    >
                      {experience.company}
                    </Text>
                    {experience.link && (
                      <Link
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={14} />
                      </Link>
                    )}
                  </div>
                  <Text variant="muted" className="mt-1">
                    {experience.location}
                  </Text>
                </div>
              </div>
              <span className="shrink-0 text-sm text-neutral-500">
                {experience.period}
              </span>
            </div>

            {expandedIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="ml-6 mt-4 pl-4"
              >
                <ul className="mb-4 list-disc space-y-1.5 pl-4 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                  {experience.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-black/[0.04] px-2.5 py-1 text-xs text-neutral-600 dark:bg-white/[0.06] dark:text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
