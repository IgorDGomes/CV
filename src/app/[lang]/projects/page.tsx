import { translation } from "@/app/translate";
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
      <main>
        <ThemeToggle />
      </main>
    </>
  );
}
