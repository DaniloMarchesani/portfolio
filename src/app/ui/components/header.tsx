import Link from "next/link";
import Avatar from "../Avatar";
import { Link2 } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-6 pb-4">
      <Link href={"/about"} className="min-w-0">
        <Avatar />
      </Link>
      <Link
        href="#contact"
        className="flex shrink-0 items-center gap-1.5 text-xs font-medium text-neutral-500 transition hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-400"
      >
        <Link2 className="h-3.5 w-3.5" />
        Contact
      </Link>
    </header>
  );
}
