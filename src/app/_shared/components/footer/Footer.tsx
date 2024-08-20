import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="flex w-full fixed bottom-0 left-0 justify-between items-center p-4 text-neutral-400">
      <div className="flex items-center justify-between gap-6">
        <Link href={"#"} className="hover:text-black"><Github /></Link>
        <Link href={"#"} className="hover:text-black"><Linkedin /></Link>
        <Link href={"#"} className="hover:text-black"><Mail /></Link>
      </div>

      <div className="text-black">
        <p>&#169; Danilo Marchesani - All rights reserved - 2024</p>
      </div>
    </footer>
  );
};
