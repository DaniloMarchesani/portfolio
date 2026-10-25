import CodeSection from "@/components/sections/CodeSection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import OpenSection from "@/components/sections/OpenSection";
import TopPainting from "@/components/layout/TopPainting";
import WorkExperience from "@/components/sections/WorkExperience";
import Hero from "@/components/sections/Hero";
import Stack from "@/components/sections/Stack";

export default function Home() {
  return (
    <main className="flex flex-col max-w-[600px]">
      <TopPainting />
      <Header />
      <Hero />
      <WorkExperience />
      <Stack />
      <OpenSection />
      <CodeSection />
      <Footer />
    </main>
  );
}
