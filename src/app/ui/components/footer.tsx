import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full flex text-center justify-center items-center tracking-tight"
    >
      <ul>
        <li className="inline-block mr-8">
          <Link href="https://x.com/Dany_M95" target="_blank">
            <p className="text-slate-500 hover:text-blue-500">@Dany_M95</p>
          </Link>
        </li>
        <li className="inline-block mr-8">
          <Link href="https://github.com/DaniloMarchesani" target="_blank">
            <p className="text-slate-500 hover:text-blue-500">Github</p>
          </Link>
        </li>
        <li className="inline-block mr-8">
          <Link
            href="https://www.linkedin.com/in/danilo-marchesani/"
            target="_blank"
          >
            <p className="text-slate-500 hover:text-blue-500">LinkedIn</p>
          </Link>
        </li>

        <li className="inline-block mr-8">
          <Link href="mailto:marchesanidanilo@gmail.com" target="_blank">
            <p className="text-slate-500 hover:text-blue-500">Email</p>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
