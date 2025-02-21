import Link from "next/link";
import Text from "./components/Text";

export default function Hero() {
  return (
    <section className=" w-full flex flex-col text-center md:text-left my-32 md:my-24">
      <Text variant="title">Hello World 👋</Text>

      <div className="mt-10 md:leading-normal flex flex-col gap-4 px-3 md:px-0 text-pretty">
        <Text>
          I&apos;m a developer, optimist, and community builder. I work as
          software engineer at{" "}
          <Link
            href="#"
            className=" dark:text-red-400 text-blue-500 dark:hover:text-red-500 hover:text-blue-500"
          >
            @Futura
          </Link>
          , where I am involved in developing producs using{" "}
          <span className="text-blue-500">Next.js</span> Web framework of React
          and NestJs for build server side applications.
        </Text>
        {/* <Text>
          I like confronting people about new stuff coming out in the tech world
          and joining communities. Sometimes you can find me arguing on Reddit
          or on my chair fixing bugs.
        </Text>
        <Text>
          In my free time, I enjoy contributing to open-source projects and
          exploring dungeons
        </Text> */}
      </div>
    </section>
  );
}
