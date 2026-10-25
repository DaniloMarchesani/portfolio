import Link from "next/link";
import Avatar from "@/components/ui/Avatar";

export default function Header() {
  return (
    <header className="mb-12 w-full">
      <Link href={"/"} className="inline-block min-w-0">
        <Avatar />
      </Link>
    </header>
  );
}
