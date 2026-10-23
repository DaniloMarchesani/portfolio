import Image from "next/image";

export default function Avatar() {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <Image
        src={"/me.png"}
        width={40}
        height={40}
        alt="Danilo Marchesani"
        className="rounded-full ring-1 ring-black/10 dark:ring-white/10"
      />
      <div className="min-w-0 text-sm leading-5">
        <p className="font-medium text-neutral-950 dark:text-neutral-50">
          Danilo Marchesani
        </p>
        <p className="text-neutral-500">Software Engineer · Tokyo, Japan</p>
      </div>
    </div>
  );
}
