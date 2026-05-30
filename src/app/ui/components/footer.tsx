import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="flex w-full items-center justify-center py-8 text-center text-sm"
    >
      <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
        <li>
          <Link href="https://x.com/Dany_M95" target="_blank">
            <p className="text-neutral-500 transition hover:text-blue-500">
              @Dany_M95
            </p>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/DaniloMarchesani" target="_blank">
            <p className="text-neutral-500 transition hover:text-blue-500">
              Github
            </p>
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/danilo-marchesani/"
            target="_blank"
          >
            <p className="text-neutral-500 transition hover:text-blue-500">
              LinkedIn
            </p>
          </Link>
        </li>

        <li>
          <Link href="mailto:marchesanidanilo@gmail.com" target="_blank">
            <p className="text-neutral-500 transition hover:text-blue-500">
              Email
            </p>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
