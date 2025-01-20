import Link from "next/link";
import { Roboto } from "next/font/google";
import { GithubIcon } from "../_icons/github";
import { LinkedinIcon } from "../_icons/linkedin";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-hover">
      <div className="h-12 flex max-w-[1000px] mx-auto items-center justify-between">
        <p className={`${roboto.className}`}>{`© ${year} Igor Gomes`}</p>
        <div className="flex gap-8">
          <Link href={"https://github.com/IgorDGomes"}>
            <GithubIcon className="size-7 hover:scale-125 transition-all duration-300" />
          </Link>
          <Link href={"https://www.linkedin.com/in/igordgomes/"}>
            <LinkedinIcon className="size-7 hover:scale-125 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
