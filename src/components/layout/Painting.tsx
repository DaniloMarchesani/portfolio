import Image from "next/image";

// Fixed right-hand painting: stays put while the page scrolls, hidden below lg.
// The day/night swap follows the system theme via Tailwind's `dark:` (media) variant.
export default function Painting() {
  return (
    <aside className="sticky top-0 hidden h-dvh w-1/2 shrink-0 self-start lg:flex lg:items-center">
      <div className="relative my-4 mx-auto h-[calc(100dvh-100px)] w-full overflow-hidden rounded-3xl shadow">
        <Image
          className="object-cover block items-center"
          src="/notte-stellata.svg"
          alt="Notte stellata"
          fill
          priority
        />
      </div>
    </aside>
  );
}
