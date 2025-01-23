import { translation } from "@/app/translate";

export default async function About({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const language = (await params).lang;
  const dictionary = await translation(language, "common");

  return (
    <>
      <main></main>
    </>
  );
}
