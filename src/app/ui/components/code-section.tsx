"use client";

import { useInView, motion } from "framer-motion";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import Title from "./Title";

export default function CodeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const codeLinks = [
    {
      title: "OpenWikipedia Backend",
      link: "https://github.com/DaniloMarchesani/openwikipedia-backend",
      description:
        "Open Wikipedia is a RESTful API application built with Spring Boot that allows user authentication, registration, and the management of favorite articles. Articles can be saved, modified, and deleted in a NoSQL database. The application also features version control for articles, creating snapshots of previous versions when they are modified, allowing for future restoration",
      techStack: [
        "Spring Boot",
        "Java",
        "NoSQL",
        "RESTful",
        "MongoDB",
        "Spring Security",
      ],
    },
    {
      title: "OpenWikipedia",
      link: "https://github.com/DaniloMarchesani/openwikipedia",
      description:
        "Welcome to the Open Wikipeida, a React-based application that allows users to fetch, save, modify, and delete articles from Wikimedia's Free API. This app serves as a personal archive where you can keep your favorite articles for future reference.",
      techStack: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Axios",
        "Zustand",
        "React Router",
        "Zod",
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      variants={container}
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="w-full py-8"
    >
      <motion.div variants={item}>
        <Title as="h2" className="mb-5 text-xl text-neutral-950 dark:text-neutral-50">
          Code
        </Title>
      </motion.div>
      <div className="flex flex-col">
        <ul>
          {codeLinks.map((link, index) => (
            <motion.li variants={item} key={index} className="mb-6">
              <p>
                <Link
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-medium transition hover:text-blue-600"
                >
                  <ChevronsRight className="inline h-4 text-neutral-500" />
                  {link.title}
                </Link>
              </p>
              {/* <p className="text-slate-300 mt-2 ml-7">{link.description}</p> */}
              <p className="ml-6 mt-1 text-sm text-neutral-500">
                {link.techStack.join(", ")}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
