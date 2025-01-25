import { translation } from "@/lib/translate";
import { ThemeToggle } from "@/components/themeToggle";

export default async function Projects({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const language = (await params).lang;
  const dictionary = await translation(language, "projects");

  return (
    <>
      <main>
        <ThemeToggle />
        {dictionary.title}
      </main>
    </>
  );
}
