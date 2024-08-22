import { HomePage, ContactPage, AboutPage, WorkPage } from "./pages";

export default function Home() {
  return (
    <main className="w-full p-8">
      <HomePage />
      <WorkPage />
      <AboutPage />
      <ContactPage />
    </main>
  );
}
