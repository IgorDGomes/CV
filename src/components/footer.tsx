import Link from "next/link";
import { Roboto } from "next/font/google";
import { GithubIcon } from "../app/[lang]/_icons/github";
import { LinkedinIcon } from "../app/[lang]/_icons/linkedin";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="bg-hover flex justify-center">
      <div className="md:w-full md:max-w-[650px] lg:max-w-[920px] grid grid-flow-row md:flex md:flex-row-reverse md:justify-between md:items-center gap-5 py-3">
        <p
          className={`${roboto.className} order-2 text-white`}
        >{`© ${currentYear} Igor Gomes`}</p>
        <div className="flex gap-8 justify-center">
          <Link
            aria-label="Github Footer Link"
            href={"https://github.com/IgorDGomes"}
            target="_blank"
          >
            <GithubIcon className="size-7 hover:scale-125 transition-all duration-300" />
          </Link>
          <Link
            aria-label="Linkedin Footer Link"
            href={"https://www.linkedin.com/in/igordgomes/"}
            target="_blank"
          >
            <LinkedinIcon className="size-7 hover:scale-125 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
