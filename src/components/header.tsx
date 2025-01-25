import Link from "next/link";
import { Poppins } from "next/font/google";

import { GithubIcon } from "../app/[lang]/_icons/github";
import { LinkedinIcon } from "../app/[lang]/_icons/linkedin";

import { translation } from "../lib/translate";
import { Language } from "./ui/languageSelection";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Divider } from "./ui/divider";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});

export async function Header({ language }: { language: string }) {
  const dictionary = await translation(language, "common");

  return (
    <header
      className={`${poppins.className} h-14 flex items-center justify-end md:justify-center border-b border-divider/10 px-[10%]`}
    >
      {/* Mobile */}
      <div className="flex md:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon className="size-7" />
          </SheetTrigger>
          <SheetContent className="w-[50%] border-white/10">
            <SheetHeader className="py-2">
              <SheetTitle className="text-xl">Menu</SheetTitle>
            </SheetHeader>
            <Divider />
            <nav className="pt-4">
              <ul
                className={`${poppins.className} flex flex-col items-center gap-2 font-semibold tracking-wide`}
              >
                <li>
                  <Link
                    href={`/${language}`}
                    className="outline-none focus:outline-cta"
                  >
                    {dictionary.link1}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${language}/projects`}
                    className="outline-none focus:outline-cta"
                  >
                    {dictionary.link2}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${language}/about`}
                    className="outline-none focus:outline-cta"
                  >
                    {dictionary.link3}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${language}/about/#contact`}
                    className="outline-none focus:outline-cta"
                  >
                    {dictionary.link4}
                  </Link>
                </li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      {/* Tablet/Desktop */}
      <nav className="hidden md:flex flex-1 justify-center pl-[108px] gap-10">
        <Link
          href={`/${language}`}
          className="hover:text-hover transition-all duration-300 outline-none focus:outline-cta"
        >
          {dictionary.link1}
        </Link>
        <Link
          href={`/${language}/projects`}
          className="hover:text-hover transition-all duration-300 outline-none focus:outline-cta"
        >
          {dictionary.link2}
        </Link>
        <Link
          href={`/${language}/about`}
          className="hover:text-hover transition-all duration-300 outline-none focus:outline-cta"
        >
          {dictionary.link3}
        </Link>
        <Link
          href={`/${language}/about/#contact`}
          className="hover:text-hover transition-all duration-300 outline-none focus:outline-cta"
        >
          {dictionary.link4}
        </Link>
      </nav>
      <div className="hidden lg:flex gap-8">
        <Link
          href={"https://github.com/IgorDGomes"}
          className="outline-none focus:outline-cta"
          target="_blank"
        >
          <GithubIcon className="fill-black dark:fill-white size-7 hover:scale-125 transition-all duration-300" />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/igordgomes/"}
          className="outline-none focus:outline-cta"
          target="_blank"
        >
          <LinkedinIcon className="fill-black dark:fill-white size-7 hover:scale-125 transition-all duration-300" />
        </Link>
      </div>
      <Language lang={language} className="outline-none focus:outline-cta" />
    </header>
  );
}
