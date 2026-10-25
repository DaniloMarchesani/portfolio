import ProjectList, { Project } from "@/components/ui/ProjectList";
import Section from "@/components/ui/Section";

const projects: Project[] = [
  {
    title: "Pfree CLI",
    link: "https://github.com/DaniloMarchesani/pfree",
    techStack: ["Node.js", "TypeScript", "Commander"],
  },
];

export default function OpenSection() {
  return (
    <Section title="Open Source">
      <ProjectList projects={projects} />
    </Section>
  );
}
