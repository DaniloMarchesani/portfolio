import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function Work() {
  return (
    <main>
      <Link
        href="/"
        className="font-light text-sm text-neutral-500 hover:text-blue-500"
      >
        <div className="flex items-center">
          <ChevronLeft className="h-4 w-4" /> navigate back
        </div>
      </Link>
      <h1 className="mt-8 font-medium text-neutral-950 dark:text-neutral-50">
        Work Experience
      </h1>
      <p className="mt-4">
        On a mission to build and create new experiences along the way. The way
        is long and winding and there is a tons of nice people to see down the
        road.
      </p>

      <div className="mt-10">
        <h2 className="font-medium text-neutral-950 dark:text-neutral-50">
          Futura
        </h2>
        <h3 className="text-sm text-neutral-500">
          Software Engineer, 2024 - Present
        </h3>
        <p className="mt-4">
          Futura is a company that specializes in building web applications and
          providing software solutions to clients. We focus on creating
          user-friendly interfaces and efficient backend systems.
        </p>
        <p className="mt-4">
          I am currently working as a Software Engineer at Futura, where I am
          involved in building and maintaining web applications using latest the
          tech stacks.
        </p>
        <p className="mt-4">
          I am responsible for developing new features, fixing bugs, and
          ensuring the overall performance of the applications.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="font-medium text-neutral-950 dark:text-neutral-50">
          IdeaIT
        </h2>
        <h3 className="text-sm text-neutral-500">Software Developer, 2024</h3>
        <p className="mt-4">
          IdeaIT is a company that builds applications tailored for it&apos;s
          clients.
        </p>
        <p className="mt-4">
          I contributed to the maintenance of the company&apos;s web portal by
          developing new web pages using PHP (with Laravel) and ReactJS,
          creating intuitive and user-friendly interfaces. I worked closely with
          the design team to implement new features and enhance the overall user
          experience.
        </p>
      </div>
    </main>
  );
}
