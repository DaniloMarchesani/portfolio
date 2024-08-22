import { FC } from "react";
import { Badge, Typography } from "../_shared/components";
import WorkDraw from "@/app/assets/work-draw.png";
import Image from "next/image";

export const WorkPage: FC = () => {
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center"
      id="works"
    >
      <Typography variant="title">Works</Typography>
      <Typography variant="subtitle" className="font-light">
        Related work experience
      </Typography>
      <div className="mt-8 flex justify-center items-center gap-12 p-10">
        <div id="left">
          <Image src={WorkDraw} alt="work" className="scale-90" />
        </div>

        <div id="right" className="flex flex-col items-center justify-center">
          <Typography variant="subtitle" className="font-bold text-black">
            Fontend Software Engineer @Futura Srl
          </Typography>
          <Typography className="font-thing text-zinc-400 !-m-1 italic">
            from 07/2024 - Current
          </Typography>
          <Typography className="max-w-[400px]">
            Developed and maintaining PWA’s and could experience for a diverse
            array of projects for clients where I mainly worked on Frontend-side
            projects that I was responsible of the developing the user interface
            and improve app performace. I could work on internal projects where
            I was responsible of optimization and implement new features to
            improve the user experience.
          </Typography>
          <div className="flex flex-wrap gap-2 mt-8 max-w-[400px]">
            <p className="font-medium">Used Tech:</p>
            <Badge text="React" />
            <Badge text="Typescript" />
            <Badge text="Nodejs" />
            <Badge text="Lerna" />
            <Badge text="Redux" />
            <Badge text="Styled Components" />
            <Badge text="Nestjs" />
            <Badge text="Azure" />
            <Badge text="Agile" />
          </div>
        </div>
      </div>
    </section>
  );
};
