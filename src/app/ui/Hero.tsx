"use client";
import Link from "next/link";
import WavingEmoji from "./components/waving-emojis";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Title from "./components/Title";
import Text from "./components/Text";

export default function Hero() {
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
    <motion.section
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="flex w-full flex-col pt-12 pb-8 md:pt-16 md:pb-10"
    >
      <motion.div variants={item}>
        <Title
          as="h1"
          className="max-w-xl text-2xl leading-tight text-neutral-950 md:text-3xl dark:text-neutral-50"
        >
          Hello World <WavingEmoji />
        </Title>
      </motion.div>

      <motion.div
        variants={item}
        className="mt-6 max-w-2xl text-pretty text-[15px] leading-7 text-neutral-700 dark:text-neutral-300"
      >
        <Text>
          I&apos;m a{" "}
          <Link href={"/about"} className="text-blue-500 hover:text-blue-600">
            full-stack developer
          </Link>
          , optimist, and community builder living in the heart of Tokyo. 🗼
          <br />
          <br />
          Currently crafting digital experiences at{" "}
          <Link
            href="https://www.futura-dev.com/"
            target="_blank"
            className="text-blue-500 hover:text-blue-600"
          >
            @Futura
          </Link>
          , where I bring ideas to life using modern tech like{" "}
          <Link href={"/stack"} className="text-blue-500 hover:text-blue-600">
            React
          </Link>
          ,{" "}
          <Link href={"/stack"} className="text-blue-500 hover:text-blue-600">
            Next.js
          </Link>
          ,{" "}
          <Link href={"/stack"} className="text-blue-500 hover:text-blue-600">
            Node.js
          </Link>
          , and{" "}
          <Link href={"/stack"} className="text-blue-500 hover:text-blue-600">
            Java Spring Boot
          </Link>
          .
          <br />
          <br />I love building products that make a difference. ✨
        </Text>
      </motion.div>
    </motion.section>
  );
}
