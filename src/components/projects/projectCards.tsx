"use client";

import { Suspense, useCallback, useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { Poppins, Roboto } from "next/font/google";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import { AlertTriangleIcon } from "lucide-react";

import { getRepos } from "@/lib/getRepos";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  weight: ["500"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
});

interface ProjectCardProps {
  mobileImg: string | StaticImport;
  fullImg?: string | StaticImport;
  title: string;
  description?: string;
  technologies?: string[];
  projectName?: string;
  preview?: string;
}

export function ProjectCards({
  mobileImg,
  fullImg,
  title,
  description,
  technologies,
  projectName,
  preview,
}: ProjectCardProps) {
  const [previewLink, setPreviewLink] = useState(preview);
  const [repositoryLink, setRepositoryLink] = useState<string | null>();
  const [projectTitle, setProjectTitle] = useState<string>(
    projectName || title
  );
  const lang = usePathname().split("/").filter(Boolean)[0];

  const getRepositoryInfo = useCallback(async () => {
    if (!projectName) return;

    try {
      const project = await getRepos(projectName);
      setPreviewLink(project.homepage);
      setRepositoryLink(project.html_url);
      setProjectTitle(projectName);

      return project;
    } catch (error) {
      console.error("Error fetching project data: " + error);
    }
  }, [projectName]);

  useEffect(() => {
    getRepositoryInfo();
  }, [getRepositoryInfo]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 xl:grid-cols-6 bg-background/50 backdrop-blur-md rounded-lg overflow-hidden border border-foreground dark:border-border min-h-[400px] md:min-h-[350px] xl:min-h-[360px] md:max-h-60">
      <div className="relative h-40 md:h-full col-span-2">
        {previewLink ? (
          <div className="group">
            <div className="absolute inset-0 overflow-hidden">
              <Link
                href={previewLink}
                className={
                  fullImg ? "" : "flex h-full items-center justify-center"
                }
                target="_blank"
              >
                <Image
                  src={fullImg ? fullImg : mobileImg}
                  alt={title || "project image"}
                  className="hidden md:block group-hover:scale-110 transition-all duration-500"
                />
                <Image
                  src={mobileImg}
                  alt={title || "project image"}
                  className="md:hidden group-hover:scale-110 transition-all duration-500"
                />
              </Link>
            </div>
            <Link
              href={previewLink}
              className={`${roboto.className} absolute top-0 right-0 bg-cardBg px-4 py-0.5 rounded-bl-md font-medium text-black`}
              target="_blank"
            >
              Preview
            </Link>
          </div>
        ) : (
          <div className="absolute inset-0 overflow-hidden">
            <Suspense
              fallback={
                <div className="size-full bg-foreground animate-pulse"></div>
              }
            >
              <Image
                src={fullImg ? fullImg : mobileImg}
                alt={title || "project image"}
                className="hidden md:block"
              />
              <Image
                src={mobileImg}
                alt={title || "project image"}
                className="md:hidden"
              />
            </Suspense>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center px-5 xl:pl-8 pt-2.5 pb-5 md:py-5 col-span-3 xl:col-span-4 xl:max-w-[90%]">
        <h2 className={`${poppins.className} font-medium text-xl pb-5`}>
          {title}
        </h2>
        <p className={`${roboto.className} font-normal text-sm`}>
          {description
            ? description
            : `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ea
            sit non modi laudantium iste possimus quod voluptatem nam, dolore,
            repellat id temporibus distinctio.`}
        </p>
        <div
          className={`${poppins.className} py-8 md:py-6 space-y-2 text-black font-medium text-sm`}
        >
          <Link
            href={`/${lang}/project/${projectTitle.replaceAll(/[ _]/g, "-")}`}
            className="bg-secondaryBtn hover:bg-hover hover:text-white transition-all duration-300 py-1.5 rounded-md flex justify-center"
          >
            Project Showcase
          </Link>
          {repositoryLink && (
            <Link
              href={repositoryLink}
              className="bg-secondaryBtn hover:bg-hover hover:text-white transition-all duration-300 py-1.5 rounded-md flex justify-center hover:bg"
              target="_blank"
            >
              Repository
            </Link>
          )}
        </div>
        {technologies ? (
          <div className="grid grid-cols-5 gap-y-5"></div>
        ) : (
          <div className="grid grid-cols-5 gap-y-5 md:gap-y-2 md:grid-cols-8 place-items-center">
            <div className="bg-zinc-300 size-8 rounded-sm flex items-center justify-center">
              <AlertTriangleIcon className="text-red-600" />
            </div>
            <div className="bg-zinc-300 size-8 rounded-sm flex items-center justify-center">
              <AlertTriangleIcon className="text-red-600" />
            </div>
            <div className="bg-zinc-300 size-8 rounded-sm flex items-center justify-center">
              <AlertTriangleIcon className="text-red-600" />
            </div>
            <div className="bg-zinc-300 size-8 rounded-sm flex items-center justify-center">
              <AlertTriangleIcon className="text-red-600" />
            </div>
            <div className="bg-zinc-300 size-8 rounded-sm flex items-center justify-center">
              <AlertTriangleIcon className="text-red-600" />
            </div>
            <div className="bg-zinc-300 size-8 rounded-sm flex items-center justify-center">
              <AlertTriangleIcon className="text-red-600" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
