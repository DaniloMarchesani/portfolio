import { Linkedin, Github, Twitter, Mail } from "lucide-react";

export default function SocialLinks() {
  return (
    <>
      <ul className="flex items-center justify-around gap-2 relative">
        <li>
          <Linkedin className="h-5 w-5 my-2 text-divider transition-colors hover:text-heading" />
        </li>
        <li>
          <Github className="h-5 w-5 my-2 text-divider transition-colors hover:text-heading" />
        </li>
        <li>
          <Twitter className="h-5 w-5 my-2 text-divider transition-colors hover:text-heading" />
        </li>
        <li>
          <Mail className="h-5 w-5 my-2 text-divider transition-colors hover:text-heading" />
        </li>
      </ul>
    </>
  );
}
