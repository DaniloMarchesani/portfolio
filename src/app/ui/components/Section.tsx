import Link from "next/link";
import { ReactNode } from "react";

interface ISectionProps {
  title: string;
  href?: string;
  children: ReactNode;
}

export default function Section({ title, href, children }: ISectionProps) {
  return (
    <section className="mt-12">
      <h2 className="mb-4 font-medium text-neutral-950 dark:text-neutral-50">
        {href ? (
          <Link href={href} className="hover:underline underline-offset-4">
            {title}
          </Link>
        ) : (
          title
        )}
      </h2>
      {children}
    </section>
  );
}
