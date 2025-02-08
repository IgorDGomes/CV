import { translation } from "@/lib/translate";
import { ThemeToggle } from "@/components/themeToggle";

export default async function Projects({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const language = (await params).lang;
  const dictionary = await translation(language, "common");

  return (
    <>
      <main role="main">
        <ThemeToggle />
        {dictionary.link1}
      </main>
    </>
  );
}
