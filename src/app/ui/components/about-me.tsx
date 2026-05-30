"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Title from "./Title";
import Text from "./Text";

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
      className="w-full py-8"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="space-y-5 text-pretty text-[15px] leading-7"
      >
        <motion.div variants={item}>
          <Title as="h2" className="mb-1 text-xl text-neutral-950 dark:text-neutral-50">
            About Me
          </Title>
        </motion.div>

        <motion.div
          variants={item}
          className="text-neutral-700 dark:text-neutral-300"
        >
          <Text>
            I&apos;m a software engineer who enjoys building clean, efficent
            piece of software and solving problems.
          </Text>
        </motion.div>

        <motion.p
          variants={item}
          className="text-neutral-700 dark:text-neutral-300"
        >
          I have a strong passion for technology and coding, I am always looking
          for new challenges and opportunities to learn and grow.
        </motion.p>

        <motion.div
          variants={item}
          className="text-neutral-700 dark:text-neutral-300"
        >
          <Text>
            I love to work on projects that have a positive impact on
            people&apos;s lives and make the world a better place.
          </Text>
        </motion.div>

        <motion.div variants={item} className="space-y-4">
          <Text className="text-neutral-700 dark:text-neutral-300">
            I am MacOS user but despite that I love the open source world and
            since I was young I have been working with GNU/Linux.
          </Text>
        </motion.div>

        <motion.div
          variants={item}
          className="text-neutral-700 dark:text-neutral-300"
        >
          <Text>
            Outside of coding, I&apos;m currently learning Japanese and recently
            moved to Tokyo, driven by a deep passion for Japanese culture, ramen
            and technology.
          </Text>
        </motion.div>
      </motion.div>
    </section>
  );
}
