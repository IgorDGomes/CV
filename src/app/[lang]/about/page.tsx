import { Suspense } from "react";

import { list } from "@vercel/blob";

import { Poppins, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon, MailIcon } from "lucide-react";
import { LinkedinIcon } from "../_icons/linkedin";
import { GithubIcon } from "../_icons/github";

import { VideoComponent } from "@/components/about/videoComponent";
import { Divider } from "@/components/ui/divider";

import { translation } from "@/lib/translate";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export default async function About({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const language = (await params).lang;
  const dictionary = await translation(language, "about");

  const { blobs } = await list({
    prefix: "profile.jpg",
    limit: 1,
  });
  const { url } = blobs[0];

  return (
    <>
      <main role="main" className="py-14 flex flex-col gap-10">
        <section
          id="card"
          className="bg-cardBg rounded-xl overflow-hidden w-[90%] max-w-[320px] md:max-w-[600px] lg:max-w-[800px] mx-auto pb-10"
        >
          <div className="relative h-28 md:h-40 lg:h-52 w-full">
            <Suspense
              fallback={
                <div className="w-full h-full bg-zinc-500 animate-pulse"></div>
              }
            >
              <VideoComponent
                fileName="video.mp4"
                classname="absolute inset-0 size-full object-fill"
              />
            </Suspense>
            <div className="absolute w-full bottom-0 pl-5 md:pl-0">
              <div className="absolute size-20 flex items-center justify-center bg-gradient-to-br from-[#1E4E8C] to-[#7EC8E3] rounded-full overflow-hidden top-1/2 -translate-y-1/2 md:left-1/2 md:-translate-x-1/2">
                <Image
                  src={url}
                  alt="Profile Picture"
                  className="size-[72px] rounded-full border-2 border-cardBg"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
          <div className="px-5 text-black">
            <div className="w-full flex items-center justify-end gap-4 pt-5">
              <Link href={"https://github.com/IgorDGomes"} target="_blank">
                <GithubIcon className="size-6 md:size-8 fill-black hover:scale-125 transition-all duration-300" />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/igordgomes/"}
                target="_blank"
              >
                <LinkedinIcon className="size-6 md:size-8 fill-black hover:scale-125 transition-all duration-300" />
              </Link>
            </div>
            <h2
              className={`${poppins.className} font-semibold text-lg md:text-center md:pt-2 md:text-xl`}
            >
              Igor Gomes
            </h2>
            <h3 className={`${poppins.className} md:text-center md:text-lg`}>
              {dictionary.position}
            </h3>
          </div>
          <div className="px-10 md:max-w-[550px] lg:max-w-[700px] text-black mx-auto">
            <p
              className={`${roboto.className} text-center text-sm md:text-base tracking-wide py-8`}
            >
              {dictionary.description}
            </p>
            <Divider className="w-[90%] bg-hover/50 mx-auto" />
            <div className="py-8">
              <h3 className={`${poppins.className} font-medium md:text-lg`}>
                {dictionary.interests.title}
              </h3>
              <ul className="pl-4 md:pl-8 flex flex-col gap-1 py-1">
                {dictionary.interests.list.map(
                  (interest: string, index: number) => {
                    return (
                      <li
                        className={`${roboto.className} text-sm md:text-base`}
                        key={index}
                      >
                        {interest}
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
            <Divider className="w-[90%] bg-hover/50 mx-auto" />
            <div className="py-8">
              <h3 className={`${poppins.className} font-medium md:text-lg`}>
                {dictionary.languages.title}
              </h3>
              <ul className="pl-4 md:pl-8 flex flex-col gap-1 py-1">
                {dictionary.languages.list.map(
                  (language: string, index: number) => {
                    return (
                      <li
                        className={`${roboto.className} text-sm md:text-base`}
                        key={index}
                      >
                        {language}
                      </li>
                    );
                  }
                )}
                <li>
                  <Divider className="max-w-40 bg-hover/50 my-2" />
                </li>
                {dictionary.languages.learningList.map(
                  (learning: string, index: number) => {
                    return (
                      <li
                        className={`${roboto.className} text-sm md:text-base`}
                        key={index}
                      >
                        {learning} 🤏
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="bg-cardBg rounded-xl w-[90%] max-w-[320px] md:max-w-[600px] lg:max-w-[800px] mx-auto"
        >
          <div className="p-10 text-black flex flex-col gap-4">
            <h2 className={`${poppins.className} text-xl font-semibold`}>
              {dictionary.contact.title}
            </h2>
            <p className={`${roboto.className}`}>
              <span className={`${roboto.className} font-medium`}>Email: </span>
              igordgomes.webdev@gmail.com
            </p>
            <Link
              href={"mailto:igordgomes.webdev@gmail.com"}
              target="_blank"
              className="w-fit flex gap-2 group"
            >
              <MailIcon />
              <span>{dictionary.contact.message}</span>
              <ArrowRightIcon className="hidden group-hover:block" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
