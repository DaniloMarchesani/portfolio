import Image from "next/image";

// Fixed right-hand painting: stays put while the page scrolls, hidden below lg.
// The day/night swap follows the system theme via Tailwind's `dark:` (media) variant.
export default function TokyoPainting() {
  return (
    <aside className="sticky top-0 hidden h-screen w-1/2 shrink-0 p-12 lg:block">
      <div className="relative h-full w-full overflow-hidden rounded-3xl">
        <Image
          className="object-cover dark:hidden"
          src="/tokyo-giorno.svg"
          alt="Tokyo di giorno"
          fill
          priority
        />
        <Image
          className="hidden object-cover dark:block"
          src="/tokyo-notte.svg"
          alt="Tokyo di notte"
          fill
          priority
        />
      </div>
    </aside>
  );
}
