import { FC } from "react";
import { Button, Typography } from "../_shared/components";

export const ContactPage: FC = () => {
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center"
      id="contact"
    >
      <Typography variant="title">Get in touch</Typography>
      <Typography variant="subtitle" className="font-thin">
        What&apos;s next? Let&apos;s talk about it
      </Typography>
      <Typography className="mt-10">
        Although I&apos;m not currently looking for any new opportunities, my
        inbox is always open. Whether you have a question or just want to say
        hi, I&apos;ll try my best to get back to you!
      </Typography>

      <Button text="Say Hello" />
    </section>
  );
};
