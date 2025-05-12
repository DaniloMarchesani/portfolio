import Link from "next/link";
import Avatar from "../Avatar";
import { Link2 } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-5 md:px-0">
      <Link href={"/about"}>
        <Avatar />
      </Link>
      <Link href="#contact" className="opacity-50 text-xs flex items-center">
        <Link2 className="h-4" />
        Contact Links
      </Link>
    </header>
  );
}
