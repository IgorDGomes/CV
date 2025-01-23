import { Poppins, Roboto } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Suspense } from "react";

interface ProjectProps {
  img: StaticImageData;
  website: string;
  title: string;
  description: string;
  repo: string;
  tech: Array<{
    name: string;
    src: StaticImageData;
  }>;
  lang: string;
}

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export function ProjectCard({
  img,
  website,
  title,
  description,
  repo,
  tech,
  lang,
}: ProjectProps) {
  return (
    <div className="grid grid-flow-row border border-foreground rounded-lg overflow-hidden dark:bg-white/10 bg-black/10 backdrop-blur-md">
      <div className="relative overflow-hidden">
        <Link href={website} target="_blank">
          <Suspense
            fallback={
              <div className="bg-gray-400 w-[298px] md:w-[338px] lg:w-[305px] h-[212px] md:h-[240px] lg:h-[216.5px] animate-pulse"></div>
            }
          >
            <Image
              src={img}
              alt={title}
              className="hover:scale-110 transition-all duration-500"
            />
          </Suspense>
        </Link>
        <Link
          href={website}
          className={`${roboto.className} font-medium absolute top-0 right-0 text-black bg-cardBg rounded-bl-xl px-4`}
          target="_blank"
        >
          Preview
        </Link>
      </div>
      <div className="flex flex-col items-start text-start gap-4 pt-5 px-5 min-h-[320px]">
        <h3 className={`${poppins.className} text-xl`}>{title}</h3>
        <p className={`${roboto} font-normal text-sm min-h-20`}>
          {description}
        </p>
        <Link
          href={repo}
          className={`${poppins.className} bg-secondaryBtn hover:bg-hover hover:text-white rounded-md px-4 py-2 text-black text-sm transition-all duration-300`}
          target="_blank"
        >
          {lang === "en" ? "Go to Repository" : "Ir para o repositório"}
        </Link>
        <div className="grid grid-cols-5 gap-3 py-2">
          {tech.map((item, index) => {
            return (
              <Image
                src={item.src}
                alt={item.name}
                key={index}
                className="size-10"
                title={item.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
