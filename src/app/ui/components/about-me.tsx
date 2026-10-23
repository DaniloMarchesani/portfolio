import Section from "./Section";

export default function MinimalAbout() {
  return (
    <Section title="About">
      <div className="space-y-4 text-pretty">
        <p>
          I&apos;m a software engineer who enjoys building clean, efficient
          software and solving problems. I&apos;m always looking for new
          challenges and opportunities to learn and grow.
        </p>
        <p>
          I&apos;m a macOS user, but I love the open source world and have been
          using GNU/Linux since I was young.
        </p>
        <p>
          Outside of coding, I&apos;m learning Japanese and recently moved to
          Tokyo, driven by a deep passion for Japanese culture, ramen and
          technology.
        </p>
      </div>
    </Section>
  );
}
