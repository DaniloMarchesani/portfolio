import Link from "next/link";

const links = [
  { label: "GitHub", href: "https://github.com/DaniloMarchesani" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/danilo-marchesani/" },
  { label: "Email", href: "mailto:marchesanidanilo@gmail.com" },
];

export default function Footer() {
  return (
    <footer id="contact" className="mt-16 text-sm">
      <ul className="flex flex-wrap gap-x-5 gap-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              target="_blank"
              className="text-nav transition-colors hover:text-nav-hover"
            >
              {link.label} ↗
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
