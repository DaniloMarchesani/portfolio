import Link from "next/link";
import WavingEmoji from "@/components/ui/WavingEmoji";
import { linkClass } from "@/lib/styles";

export default function Hero() {
  return (
    <section className="space-y-4">
      <h1 className="font-medium text-heading">
        Hello World <WavingEmoji size="small" />
      </h1>
      <div className="space-y-4 text-pretty">
        I am developer and thinker. <br />
        Currently moved to Tokyo to learn a new perspetive of lifea nd a nre way
        to see things. Currently I am studying more about the culture and the
        language but always keeping coding in my free time to create what my
        mind says. <br />
        Previusly I worked at Futura as a software engineer. I've been coding
        since litte age and during the years I could meet many incredible people
        that left in me a significant thing for my career and life. <br /> My
        life's work is to keep creating and learning.
      </div>
      <div className="space-y-4 text-pretty">
        Outside of coding, I'm learning Japanese and recently moved to Tokyo,
        driven by a deep passion for Japanese culture, ramen and technology.
      </div>
    </section>
  );
}
