import Section from "@/components/ui/Section";

type Experience = {
  title: string;
  company: string;
  period: string;
};

const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Futura",
    period: "2024 — Present",
  },
  {
    title: "Software Developer",
    company: "IdeaIT",
    period: "2024",
  },
];

export default function WorkExperience() {
  return (
    <Section title="Work" href="/work">
      <ul className="space-y-2">
        {experiences.map((experience) => (
          <li
            key={experience.company}
            className="flex items-baseline justify-between gap-4"
          >
            <span className="min-w-0 truncate">
              <span className="text-heading">
                {experience.company}
              </span>
              <span className="text-secondary"> · {experience.title}</span>
            </span>
            <span className="shrink-0 text-sm tabular-nums text-secondary">
              {experience.period}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
