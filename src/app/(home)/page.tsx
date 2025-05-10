
import MinimalAbout from "../ui/components/about-me";
import ExperienceHero from "../ui/components/work-experience";
import Hero from "../ui/Hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <ExperienceHero />
       <MinimalAbout />  
    </main>
  );
}
