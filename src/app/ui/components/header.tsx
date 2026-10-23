import Link from "next/link";
import Avatar from "../Avatar";

export default function Header() {
  return (
    <header className="mb-12">
      <Link href={"/"} className="inline-block min-w-0">
        <Avatar />
      </Link>
    </header>
  );
}
