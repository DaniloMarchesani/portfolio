import { FC } from "react";
import { Typography } from "../_shared/components";

export const AboutPage: FC = () => {
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center"
      id="about"
    >
      <Typography variant="title">About me</Typography>
      <Typography variant="subtitle" className="font-thin">
        More unasked things about me
      </Typography>
      <Typography>
        Hi, I&apos;m Danilo Marchesani, a Software Engineer specialized in
        frontend application development, physically based in Italy but mentally
        in the cloud. I love creating intuitive and dynamic user experiences
        using modern technologies.
      </Typography>
      <Typography>
        My coding journey began during my childhood, where I discovered my
        passion for coding while I found out how the web pages was created.
        Since then, I&apos;ve alwasy been curious about building software that
        someone could use, so I decided to attend a software engineering course
        where I could deep dive into all the methodologies and techniques that
        was OOP, Design patterns, Agile development, Git and I could deep in
        with various languages. I&apos;ve worked at several companies, honing my
        skills in HTML, CSS, JavaScript, and Node.js.
      </Typography>
      <Typography>
        My core skills include development with React and Node.js, with a strong
        focus on creating responsive and performant user interfaces. I also have
        experience with Git, Docker and CI/CD tools.
      </Typography>
      <Typography>
        Besides coding, I love exploring nature and traveling. I believe these
        experiences enrich my creativity and help me see problems from new
        perspectives.
      </Typography>
      <Typography>
        In the future, I want to deepen my knowledge of machine learning and
        apply it to the frontend to create increasingly intelligent interfaces.
        I would also like to contribute to technology initiatives that have a
        positive social impact.
      </Typography>
    </section>
  );
};
