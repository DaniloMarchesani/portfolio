import Image from "next/image";

export default function Avatar() {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <Image
        src={"/me.png"}
        width={48}
        height={48}
        alt="Danilo Marchesani"
        className="size-12 rounded-full lg:size-10 lg:ring-1 lg:ring-divider"
      />
      {/* Below lg the TopPainting sits behind the header: white, larger text with a shadow */}
      <div className="min-w-0 text-base leading-6 lg:text-sm lg:leading-5 ">
        <p className="font-semibold lg:font-medium lg:text-heading">
          Danilo Marchesani
        </p>
        <p className="lg:text-secondary">Software Engineer · Tokyo, Japan</p>
      </div>
    </div>
  );
}
