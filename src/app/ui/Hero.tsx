import Link from "next/link";
import WavingEmoji from "./components/waving-emojis";
import { linkClass } from "./utils/styles";

export default function Hero() {
  return (
    <section>
      <h1 className="mb-4 font-medium text-neutral-950 dark:text-neutral-50">
        Hello World <WavingEmoji size="small" />
      </h1>
      <div className="space-y-4 text-pretty">
        <p>
          I&apos;m a{" "}
          <Link href={"/about"} className={linkClass}>
            full-stack developer
          </Link>
          , optimist, and community builder living in the heart of Tokyo.
        </p>
        <p>
          Currently crafting digital experiences at{" "}
          <Link
            href="https://www.futura-dev.com/"
            target="_blank"
            className={linkClass}
          >
            Futura
          </Link>
          , where I bring ideas to life using{" "}
          <Link href={"/stack"} className={linkClass}>
            React, Next.js, Node.js and Java Spring Boot
          </Link>
          .
        </p>
        <p>I love building products that make a difference.</p>
      </div>
    </section>
  );
}
