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
      <main>
        <h1>About</h1>
        <div className="w-fit m-auto">
          <details className="text-center">
            <summary>Dictionary</summary>
            <h3 className="text-lg font-semibold pt-4 pb-2">Links</h3>
            <p>{dictionary.link1}</p>
            <p>{dictionary.link2}</p>
            <p>{dictionary.link3}</p>
            <p>{dictionary.link4}</p>
            <h3 className="text-lg font-semibold pt-4 pb-2">Socials</h3>
            <p>{dictionary.socials[0]}</p>
            <p>{dictionary.socials[1]}</p>
            <p>{dictionary.socials[2]}</p>
          </details>
        </div>
      </main>
    </>
  );
}
