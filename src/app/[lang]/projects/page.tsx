import { Poppins } from "next/font/google";

import { Divider } from "@/components/ui/divider";
import { Filter } from "@/components/projects/filter";
import { ProjectCards } from "@/components/projects/projectCards";

import { translation } from "@/lib/translate";

import project1 from "@/../public/projects/StudyBots.png";
import project2 from "@/../public/projects/RandomCharacter.png";
import project3 from "@/../public/projects/DenisaPortfolio.png";
import project4 from "@/../public/projects/LumberBeard.png";
import project5 from "@/../public/projects/apoOS.png";
import fullSizeProject1 from "@/../public/projects/fullSizeStudyBots.png";
import fullSizeProject2 from "@/../public/projects/fullSizeRandomCharacter.png";
import fullSizeProject3 from "@/../public/projects/fullSizeDenisaPortfolio.png";
import fullSizeProject4 from "@/../public/projects/fullSizeLumberBeard.png";

const poppins = Poppins({
  weight: ["600"],
  subsets: ["latin"],
});

export default async function Projects({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const language = (await params).lang;
  const dictionary = await translation(language, "projects");

  return (
    <>
      <main role="main" className="flex flex-col items-center py-5">
        <div className="w-full max-w-[300px] md:max-w-[650px] xl:max-w-[960px]">
          <h1
            className={`${poppins.className} text-center font-semibold text-2xl md:text-3xl py-5 md:pt-10 md:pb-5`}
          >
            {dictionary.title}
          </h1>
          <Divider className="w-full mb-2.5" />
          <Filter text={dictionary.latest} />
          <div className="w-full max-w-[600px] xl:max-w-[900px] py-5 md:py-10 space-y-10 mx-auto">
            <ProjectCards
              mobileImg={project1}
              fullImg={fullSizeProject1}
              showcaseLink="/"
              repositoryLink="/"
              previewLink="/"
            />
            <ProjectCards
              mobileImg={project2}
              fullImg={fullSizeProject2}
              showcaseLink="/"
              repositoryLink="/"
              previewLink="/"
            />
            <ProjectCards
              mobileImg={project3}
              fullImg={fullSizeProject3}
              showcaseLink="/"
              previewLink="/"
            />
            <ProjectCards
              mobileImg={project4}
              fullImg={fullSizeProject4}
              showcaseLink="/"
              repositoryLink="/"
              previewLink="/"
            />
            <ProjectCards
              mobileImg={project5}
              showcaseLink="/"
              repositoryLink="/"
              previewLink="/"
            />
          </div>
        </div>
      </main>
    </>
  );
}
