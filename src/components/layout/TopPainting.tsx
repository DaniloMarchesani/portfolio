import Image from "next/image";

export default function TopPainting() {
  return (
    <div
      className="lg:hidden fixed top-0 left-0 h-[200px] w-full -z-30 opacity-40"
      style={{
        maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 40%, transparent 100%)",
      }}
    >
      <Image
        className="object-cover block items-center overflow-hidden"
        src="/notte-stellata.svg"
        alt="Notte stellata"
        fill
        priority
      />
    </div>
  );
}
