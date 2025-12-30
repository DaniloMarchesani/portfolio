"use client";

import { motion, useInView } from "framer-motion";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function OpenSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const codeLinks = [
    {
      title: "Pfree CLI",
      link: "https://github.com/DaniloMarchesani/pfree",
      description:
        "A simple and powerful CLI tool to quickly free up ports by killing the processes using them.",
      techStack: ["Nodejs", "Typescript", "Commander"],
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
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      variants={container}
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="w-full"
    >
      <motion.h2 variants={item} className="text-lg font-medium mb-4">
        Open Source
      </motion.h2>
      <div className="flex flex-col">
        <ul>
          {codeLinks.map((link, index) => (
            <motion.li variants={item} key={index} className="mb-8">
              <p>
                <Link
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-blue-600"
                >
                  <ChevronsRight className="inline h-4 text-slate-500" />
                  {link.title}
                </Link>
              </p>
              {/* <p className="text-slate-300 mt-2 ml-7">{link.description}</p> */}
              <p className="text-neutral-500 ml-7 text-sm">
                {link.techStack.join(", ")}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
