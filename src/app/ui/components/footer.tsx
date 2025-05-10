import Link from "next/link";
import Text from "./Text";

export default function Footer() {
    return (
        <footer className="flex items-center justify-center mt-4 px-5 md:px-0">
            <ul>
                <li className="inline-block mr-8">
                    <Link href="#"><p className="text-sm text-neutral-500 hover:text-blue-500">@DaniloMarchesani</p></Link>
                </li>
                <li className="inline-block mr-8">
                    <Link href="#"><p  className="text-sm text-neutral-500 hover:text-blue-500">Github</p></Link>
                </li>
                <li className="inline-block mr-8">
                    <Link href="#"><p className="text-sm text-neutral-500 hover:text-blue-500">LinkedIn</p></Link>
                </li>
                
                <li className="inline-block mr-8">
                    <Link href="#"><p className="text-sm text-neutral-500 hover:text-blue-500">Email</p></Link>
                </li>
            </ul>
        </footer>
    );
}