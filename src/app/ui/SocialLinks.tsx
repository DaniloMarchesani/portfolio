import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

export default function SocialLinks() {
  return (
    <>
      <ul className="flex items-center justify-around gap-2">
        <li>
          <Link href={"#"}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg"
              alt="x"
              width={25}
              height={25}
              className="opacity-30 hover:opacity-100"
            />
          </Link>
        </li>
        <li>
          <Link href={"#"}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
              alt="linkedin"
              width={25}
              height={25}
              className="opacity-30 hover:opacity-100"
            />
          </Link>
        </li>
        <li>
          <Link href={"#"}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              alt="github"
              width={25}
              height={25}
              className="opacity-30 hover:opacity-100"
            />
          </Link>
        </li>
      </ul>
    </>
  );
}
