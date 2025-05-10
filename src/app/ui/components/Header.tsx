import Link from "next/link";
import Avatar from "../Avatar";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-5 md:px-0">
      <Link href={"/about"}><Avatar /></Link>
    </header>
  );
}
