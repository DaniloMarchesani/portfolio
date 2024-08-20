import { HomePage, ContactPage, AboutPage } from "./pages";

export default function Home() {
  return (
    <main className="w-full p-8">
      <HomePage />
      <AboutPage />
      <ContactPage />
    </main>
  );
}
