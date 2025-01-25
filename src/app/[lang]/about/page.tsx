import { translation } from "@/lib/translate";

export default async function About({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const language = (await params).lang;
  const dictionary = await translation(language, "common");

  return (
    <>
      <main>{dictionary.link1}</main>
    </>
  );
}
