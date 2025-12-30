import MinimalAbout from "../ui/components/about-me";
import CodeSection from "../ui/components/code-section";
import OpenSection from "../ui/components/open-section";
import ExperienceHero from "../ui/components/work-experience";
import Hero from "../ui/Hero";

export default function Home() {
  return (
    <main className="flex flex-col gap-2 md:gap-0 items-center justify-center p-8">
      <Hero />
      <ExperienceHero />
      <OpenSection />
      <CodeSection />
      <MinimalAbout />
    </main>
  );
}
