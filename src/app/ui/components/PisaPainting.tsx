import Image from "next/image";

export default function PisaPainting() {
  return (
    <aside>
      <Image
        className="rounded-2xl"
        src={"/pisa-svg.svg"}
        alt="painting"
        width={600}
        height={800}
      />
    </aside>
  );
}
