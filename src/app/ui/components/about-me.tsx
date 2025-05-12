"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function MinimalAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
    <section
      ref={ref}
      className="max-w-3xl mx-auto py-16 text-justify md:text-wrap"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="space-y-6"
      >
        <motion.h2
          variants={item}
          className="text-xl font-medium tracking-tighter"
        >
          About Me
        </motion.h2>

        <motion.p
          variants={item}
          className="text-neutral-800 dark:text-neutral-300 leading-relaxed"
        >
          I&apos;m a software engineer who enjoys building clean, efficent piece
          of software and solving problems.
        </motion.p>

        <motion.p
          variants={item}
          className="text-neutral-800 dark:text-neutral-300 leading-relaxed"
        >
          {" "}
          I have a strong passion for technology and coding, I am always looking
          for new challenges and opportunities to learn and grow.
        </motion.p>

        <motion.p
          variants={item}
          className="text-neutral-800 dark:text-neutral-300 leading-relaxed"
        >
          {" "}
          I love to work on projects that have a positive impact on
          people&apos;s lives and make the world a better place.
        </motion.p>

        <motion.div variants={item} className="space-y-4">
          <p className="text-neutral-800 dark:text-neutral-300 leading-relaxed">
            I am MacOS user but despite that I love the open source world and
            since I was young I have been working with GNU/Linux.
          </p>
        </motion.div>

        <motion.p
          variants={item}
          className="text-neutral-800 dark:text-neutral-200 leading-relaxed"
        >
          Outside of coding, I&apos;m currently learning Japanese and recently
          moved to Tokyo, driven by a deep passion for Japanese culture, ramen
          and technology.
        </motion.p>
      </motion.div>
    </section>
  );
}
