"use client";
import Link from "next/link";
import WavingEmoji from "./components/waving-emojis";
import { TerminalIcon } from "lucide-react";

export default function Hero() {
  return (
    <section className=" w-full flex flex-col text-center md:text-left md:mt-24 md:mb-12">
      <h1 className="text-2xl font-medium">Hello World <WavingEmoji /></h1>

      <div className="mt-6 md:leading-normal flex flex-col gap-4 px-3 md:px-0 text-pretty">
        <p>
          I&apos;m a developer, optimist, and community builder. I work as
          software engineer at{" "}
          <Link
            href="#"
            className="text-blue-500 hover:text-blue-600"
          >
            @Futura
          </Link>
          , where I am involved in developing producs using{" "}
          <span aria-label="nextjs" className="text-blue-500"><Link href={'/stack'}>Next.js</Link></span> Web framework of React
          and <span aria-label="Nodejs" className="text-blue-500"><Link href={'/stack'}>Node.js</Link></span> for build server side applications.
        </p>
      </div>
    </section>
  );
}
