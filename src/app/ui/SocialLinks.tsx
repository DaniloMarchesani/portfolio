import { Linkedin, Github, Twitter, Mail } from "lucide-react";

export default function SocialLinks() {
  return (
    <>
      <ul className="flex items-center justify-around gap-2 relative">
        <li>
          <Linkedin className="h-5 w-5 my-2 text-neutral-300 dark:text-neutral-700 hover:text-[--foreground]" />
        </li>
        <li>
          <Github className="h-5 w-5 my-2 text-neutral-300 dark:text-neutral-700 hover:text-[--foreground]" />
        </li>
        <li>
          <Twitter className="h-5 w-5 my-2 text-neutral-300 dark:text-neutral-700 hover:text-[--foreground]" />
        </li>
        <li>
          <Mail className="h-5 w-5 my-2 text-neutral-300 dark:text-neutral-700 hover:text-[--foreground]" />
        </li>
      </ul>
    </>
  );
}
