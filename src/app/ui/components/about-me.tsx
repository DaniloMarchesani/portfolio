"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Server, Globe, BookOpen } from "lucide-react"

export default function MinimalAbout() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section ref={ref} className="max-w-3xl mx-auto py-16">
      <motion.div variants={container} initial="hidden" animate={isInView ? "show" : "hidden"} className="space-y-8">
        <motion.h2 variants={item} className="text-xl font-medium tracking-tighter">
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-4 mb-4 p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50 dark:bg-neutral-800/50"
        >
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <div className="text-sm text-neutral-500 dark:text-neutral-400 ml-1">Currently in Tokyo, Japan</div>
          </div>
          <div className="font-mono text-sm text-neutral-600 dark:text-neutral-400">
            $ learning --language="japanese" --location="tokyo" --icon="🇯🇵" 
          </div>
        </motion.div>

        <motion.p variants={item} className="text-neutral-800 dark:text-neutral-300 leading-relaxed">
          I'm a passionate software engineer who enjoys building clean, maintainable user interfaces and exploring how
          frontend and backend systems interact. I love working on full-stack projects where I can be involved in both
          the architecture and the implementation.
        </motion.p>

        {/* <motion.div variants={item} className="flex items-center space-x-6 py-2">
          <div className="h-px bg-neutral-200 dark:bg-neutral-700 flex-grow" />
          <div className="flex space-x-4">
            <Code className="text-neutral-400" size={20} />
            <Server className="text-neutral-400" size={20} />
          </div>
          <div className="h-px bg-neutral-200 dark:bg-neutral-700 flex-grow" />
        </motion.div> */}

        <motion.div variants={item} className="space-y-4">
          <p className="text-neutral-800 dark:text-neutral-300 leading-relaxed">
            On the frontend, I mostly use React, Next.js, and TypeScript. On the backend, I've worked with Node.js and
            Spring Boot I use tools like Prisma, and Zod to keep things type-safe and reliable.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {["React", "Next.js", "TypeScript", "Node.js", "Spring Boot", "Prisma","Zod"].map(
              (tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.05, duration: 0.3 }}
                  className="px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 rounded-full"
                >
                  {tech}
                </motion.span>
              ),
            )}
          </div>
        </motion.div>

       {/*  <motion.div variants={item} className="flex items-center space-x-6 py-2">
          <div className="h-px bg-neutral-200 dark:bg-neutral-700 flex-grow" />
          <div className="flex space-x-4">
            <Globe className="text-neutral-400" size={20} />
            <BookOpen className="text-neutral-400" size={20} />
          </div>
          <div className="h-px bg-neutral-200 dark:bg-neutral-700 flex-grow" />
        </motion.div> */}

        <motion.p variants={item} className="text-neutral-800 dark:text-neutral-200 leading-relaxed">
          Outside of coding, I'm currently learning Japanese and recently moved to Tokyo, driven by a deep passion for
          Japanese culture and technology. I believe that combining cultural curiosity with technical skills opens up
          unique personal and professional opportunities.
        </motion.p>

      
      </motion.div>
    </section>
  )
}
