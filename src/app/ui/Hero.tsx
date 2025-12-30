"use client";
import Link from "next/link";
import WavingEmoji from "./components/waving-emojis";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

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
      className="text-wrap w-full flex flex-col mt-12 mb-6 md:mt-24 md:mb-12"
    >
      <motion.h1
        variants={item}
        className="text-center md:text-left text-xl md:text-2xl"
      >
        Hello World <WavingEmoji />
      </motion.h1>

      <motion.div
        variants={item}
        className="mt-6 flex flex-col gap-4 px-3 md:px-0 text-justify leading-relaxed"
      >
        <p>
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
        </p>
      </motion.div>
    </motion.section>
  );
}
