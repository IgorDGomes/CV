import Link from "next/link";
import { Poppins } from "next/font/google";

import { GithubIcon } from "../_icons/github";
import { LinkedinIcon } from "../_icons/linkedin";

import { translation } from "../../translate";
import { Language } from "./languageSelection";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});

export async function Header({ language }: { language: string }) {
  const dictionary = await translation(language, "common");

  return (
    <header
      className={`${poppins.className} h-14 flex items-center justify-center border-b border-divider/10 px-[10%]`}
    >
      <nav className="flex flex-1 justify-center pl-[108px] gap-10">
        <Link
          href={`/${language}`}
          className="hover:text-hover transition-all duration-300"
        >
          {dictionary.link1}
        </Link>
        <Link
          href={`/${language}/projects`}
          className="hover:text-hover transition-all duration-300"
        >
          {dictionary.link2}
        </Link>
        <Link
          href={`/${language}/about`}
          className="hover:text-hover transition-all duration-300"
        >
          {dictionary.link3}
        </Link>
        <Link
          href={`/${language}/about/#contact`}
          className="hover:text-hover transition-all duration-300"
        >
          {dictionary.link4}
        </Link>
      </nav>
      <div className="flex gap-8">
        <Link href={"https://github.com/IgorDGomes"}>
          <GithubIcon className="size-7 hover:scale-125 transition-all duration-300" />
        </Link>
        <Link href={"https://www.linkedin.com/in/igordgomes/"}>
          <LinkedinIcon className="size-7 hover:scale-125 transition-all duration-300" />
        </Link>
      </div>
      <Language lang={language} />
    </header>
  );
}
