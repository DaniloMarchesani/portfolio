import ProjectList, { Project } from "@/components/ui/ProjectList";
import Section from "@/components/ui/Section";

const projects: Project[] = [
  {
    title: "OpenWikipedia Backend",
    link: "https://github.com/DaniloMarchesani/openwikipedia-backend",
    techStack: ["Spring Boot", "Java", "MongoDB", "Spring Security"],
  },
  {
    title: "OpenWikipedia",
    link: "https://github.com/DaniloMarchesani/openwikipedia",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Zustand", "Zod"],
  },
];

export default function CodeSection() {
  return (
    <Section title="Code">
      <ProjectList projects={projects} />
    </Section>
  );
}
