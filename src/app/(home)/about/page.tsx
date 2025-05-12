import MinimalAbout from "@/app/ui/components/about-me";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function AboutMe() {
  return (
    <main className=" my-14">
      <Link
        href="/"
        className="font-light text-sm text-neutral-500 hover:text-blue-500"
      >
        <div className="flex items-center">
          <ChevronLeft className="h-4 w-4" />
          navigate back
        </div>
      </Link>
      <MinimalAbout />
    </main>
  );
}
