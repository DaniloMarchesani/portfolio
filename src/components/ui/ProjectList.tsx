import Link from "next/link";
import { linkClass } from "@/lib/styles";

export type Project = {
  title: string;
  link: string;
  techStack: string[];
};

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ul className="space-y-3">
      {projects.map((project) => (
        <li key={project.link}>
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            {project.title}
          </Link>
          <p className="text-sm text-secondary">
            {project.techStack.join(", ")}
          </p>
        </li>
      ))}
    </ul>
  );
}
