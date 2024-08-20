import Link from "next/link";
import { FC } from "react";
import { TButton } from "./type";
import { Send } from "lucide-react";

export const Button: FC<TButton> = ({ text }) => {
    return(
        <Link href="mailto:marchesanidanilo@gmail.com" className="px-4 py-3 mt-4 bg-black text-white rounded-lg flex items-center justify-between">
            <Send className="mr-2 w-4 h-4" />
            {text}
        </Link>
    );

}
