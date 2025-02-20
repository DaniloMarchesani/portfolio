import Image from "next/image";
import Text from "./components/Text";
import { Globe } from "lucide-react";

export default function Avatar() {
  return (
    <div className="flex items-center justify-start gap-2">
      <Image src={"/me.png"} width={50} height={50} alt="beautful girl" />
      <div className="leading-3">
        <Text variant="paragraph" className="text-sm font-bold">
          Danilo Marchesani
        </Text>
        <Text className="text-xs text-blue-500">Software Engineer</Text>
        <Text
          variant="paragraph"
          className="text-xs text-neutral-400 dark:text-neutral-400 flex gap-1 items-center justify-center align-middle"
        >
          Tokyo, Edogawa-ku, Japan
          <Globe className="h-3 w-3" />
        </Text>
      </div>
    </div>
  );
}
