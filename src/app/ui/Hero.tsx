import Text from "./components/Text";

export default function Hero() {
  return (
    <section className=" w-full flex flex-col text-center md:text-left my-24 md:my-32">
      <Text variant="title">Hello World 👋</Text>
      <Text variant="muted">didn&apos;t you already hear this?</Text>
    </section>
  );
}
