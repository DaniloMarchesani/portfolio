import Image from "next/image";
import React from "react";
import me from "@/app/assets/me.png";
import { Button, Typography } from "../_shared/components";

function HomePage() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center" id="home">
      <Image src={me} alt={"me"} className="p-2" />
      <div className="p-6 flex flex-col justify-between items-center">
        <Typography variant="subtitle" className="font-light">Hello, I&apos;m </Typography>
        <Typography variant="title">Danilo Marchesani</Typography>
        <Typography variant="subtitle" className="font-bold text-transparent gradient-text animate-gradient text-2xl scale-125">Frontend Software Engineer</Typography>
        <Typography>
          I enjoy working with the Node.js stack and love contributing to the
          open-source community, where I can both share my skills and learn from
          others. Beyond coding, I have a deep love for nature and traveling,
          finding inspiration in the places I visit and the cultures I encounter.
        </Typography>
        <Button text="Say Hello"/>
      </div>
    </section>
  );
}

export { HomePage };
