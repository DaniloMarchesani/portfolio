import ProjectHero from "./ui/components/ProjectsHero";
import Hero from "./ui/Hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-2">
      <Hero />
      <ProjectHero />
    </main>
  );
}
