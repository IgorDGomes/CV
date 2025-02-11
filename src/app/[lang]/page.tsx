import Link from "next/link";
import Image from "next/image";
import { Poppins, Roboto } from "next/font/google";

import profilePic from "/public/profile.jpg";
import lumberBeard from "/public/projects/LumberBeard_Desktop.png";
import studyBots from "/public/projects/StudyBots.png";
import randomCharacter from "/public/projects/RandomCharacter.png";
import {
  html,
  css,
  js,
  ts,
  tailwind,
  next,
  nodejs,
  express,
} from "./_icons/icons";

import { Divider } from "../../components/ui/divider";
import { ProjectCard } from "./_components/projectCard";

import { translation } from "../../lib/translate";
import { GithubIcon } from "./_icons/github";
import { LinkedinIcon } from "./_icons/linkedin";

const poppins = Poppins({
  weight: ["500", "600"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
});

// ! Alert Increase contrast ratio from the About me button

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const language = (await params).lang;
  const dictionary = await translation(language, "home");

  return (
    <>
      <main role="main" className="relative flex flex-col items-center">
        <section
          id="hero"
          className="py-10 lg:py-24 max-w-[300px] md:max-w-[500px] lg:max-w-[880px] lg:flex lg:items-center lg:gap-48"
        >
          <div className="flex flex-col items-center gap-7 md:gap-12 lg:items-start">
            <h1
              className={`${poppins.className} font-semibold text-2xl md:text-3xl`}
            >
              {dictionary.hero.title}
            </h1>
            <p
              className={`${roboto.className} font-normal text-sm md:text-base text-center lg:text-start`}
            >
              {dictionary.hero.description}
            </p>
            <div className="flex items-center gap-6">
              <Link
                href={`/${language}/about`}
                className={`${poppins.className} bg-cta hover:bg-hover px-10 py-2 rounded-md transition-all duration-300 text-white`}
              >
                {dictionary.hero.button}
              </Link>
              <Link
                href={"https://github.com/IgorDGomes"}
                target="_blank"
                className="bg-background hover:bg-cta p-1.5 rounded-lg transition-all duration-300 group"
              >
                <GithubIcon className="size-7 fill-black dark:fill-white group-hover:fill-white transition-all duration-300" />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/igordgomes/"}
                target="_blank"
                className="bg-background hover:bg-cta p-1.5 rounded-lg transition-all duration-300 group"
              >
                <LinkedinIcon className="size-7 fill-black dark:fill-white group-hover:fill-white transition-all duration-300" />
              </Link>
            </div>
          </div>
          <Image
            src={profilePic}
            alt="Profile Picture"
            className="hidden lg:block h-64 w-fit rounded-2xl border border-border"
            priority
          />
        </section>
        <Divider className="w-[80%]" />
        <section
          id="skills"
          className="py-10 max-w-[300px] md:max-w-[500px] text-center"
        >
          <h2
            className={`${poppins.className} font-medium text-2xl md:text-3xl pb-12`}
          >
            {dictionary.skills.title}
          </h2>
          <ul
            className={`${roboto.className} font-normal grid grid-cols-2 gap-y-2 text-center md:gap-x-10`}
          >
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Typescript</li>
          </ul>
          <ul className="grid grid-cols-3 gap-y-2 md:gap-x-10 pt-10">
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Playwright</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Postgresql</li>
            <li>Postman</li>
            <li>Git</li>
          </ul>
        </section>
        <Divider className="w-[80%]" />
        <section
          id="projects"
          className="flex flex-col items-center py-10 max-w-[300px] md:max-w-[700px] lg:max-w-[960px] gap-12"
        >
          <h2
            className={`${poppins.className} font-medium text-2xl md:text-3xl`}
          >
            {dictionary.projects.title}
          </h2>
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ProjectCard
              title={dictionary.projects.first.title}
              description={dictionary.projects.first.description}
              img={lumberBeard}
              repo="https://github.com/IgorDGomes/LumberBeard_Website"
              tech={[
                { name: "Next", src: next },
                { name: "Tailwind CSS", src: tailwind },
                { name: "Typescript", src: ts },
              ]}
              website="https://lumber-beard.vercel.app"
              lang={language}
            />
            <ProjectCard
              title={dictionary.projects.second.title}
              description={dictionary.projects.second.description}
              img={randomCharacter}
              repo="https://github.com/IgorDGomes/random-Character"
              tech={[
                { name: "HTML", src: html },
                { name: "CSS", src: css },
                { name: "Javascript", src: js },
                { name: "Typescript", src: ts },
                { name: "Node.js", src: nodejs },
                { name: "Express", src: express },
              ]}
              website="https://igordgomes.github.io/Random-Character/"
              lang={language}
            />
            <ProjectCard
              title={dictionary.projects.third.title}
              description={dictionary.projects.third.description}
              img={studyBots}
              repo="https://github.com/IgorDGomes/Study-Bots-Website"
              tech={[
                { name: "Next", src: next },
                { name: "Tailwind CSS", src: tailwind },
                { name: "Typescript", src: ts },
              ]}
              website="https://study-bots-website.vercel.app/"
              lang={language}
            />
          </div>
          <Link
            href={`/${language}/projects`}
            className={`${roboto.className} font-medium text-lg max-w-[500px] bg-hover hover:bg-cta rounded-md px-20 py-1 transition-all duration-300 text-white`}
          >
            {dictionary.projects.more}
          </Link>
        </section>
      </main>
    </>
  );
}
