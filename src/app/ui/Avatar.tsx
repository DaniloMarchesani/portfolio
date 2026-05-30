import Image from "next/image";
import Text from "./components/Text";
import { Globe } from "lucide-react";
import AnimatedGradientTitle from "./components/animated-gradient-text";

export default function Avatar() {
  return (
    <div className="flex min-w-0 items-center justify-start gap-3">
      <Image
        src={"/me.png"}
        width={52}
        height={52}
        alt="Danilo Marchesani"
        className="rounded-full ring-1 ring-black/10 dark:ring-white/10"
      />
      <div className="min-w-0 leading-tight">
        <Text variant="paragraph" className="text-sm font-bold">
          Danilo Marchesani
        </Text>
        <AnimatedGradientTitle text="Software Engineer" className="text-xs" />
        <Text
          variant="paragraph"
          className="mt-0.5 flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400"
        >
          Edogawa-ku, Tokyo, Japan
          <Globe className="h-3 w-3" />
        </Text>
      </div>
    </div>
  );
}
