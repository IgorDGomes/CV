import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { TypewriterEffect } from "../components/ui/typewriter-effect"

import img1 from "../assets/YoungMan.jpg"

export function Hero() {

    const words = [
        {
          text: "Welcome",
        },
        {
          text: "to",
        },
        {
          text: "my",
        },
        {
          text: "portfolio!",
        },
        {
          text: "I'm",
        },
        {
          text: "Igor",
        },
        {
          text: "Gomes,",
        },
        {
          text: "a",
        },
        {
          text: "Frontend",
        },
        {
          text: "Developer.",
        },
      ];

    return (
        <div className="bg-slate-300 pt-[10svh] pb-10 sm:pt-[92px] min-h-[500px] h-fit w-full min-w-[300px] flex flex-col sm:flex-row items-center justify-center overflow-hidden">
            <img src={img1} alt="Young man studying on computer" className="w-[30svw] min-w-[250px] sm:min-w-[300px] md:min-w-[380px] max-w-[480px] h-fit rounded-xl my-10" />
            <div className="flex flex-col w-full sm:gap-2 md:gap-4 sm:w-[50svw] max-w-[600px] px-10 py-8 sm:py-20">
                <h2 className="tracking-wide"><TypewriterEffect words={words} /></h2>
                <p className="py-5 leading-5 text-sm sm:text-base">I started programming because I thought it was interesting to know how websites were created from scratch, and since then I keep trying to improve my skills.</p>
                <div className="grid place-items-center sm:grid-cols-2 gap-10">
                    <a href="../assets/Resume.docx" download="cv.docx" className=" flex justify-center py-3 mt-5 sm:mt-0 min-w-[140px] rounded-full bg-neutral-400/70 hover:bg-neutral-400 drop-shadow-lg hover:drop-shadow-none font-medium">Download CV</a>
                    <div className="flex gap-5">
                        <a href="https://github.com/IgorDGomes">
                            <GitHubLogoIcon className="w-[30px] sm:w-[40px] h-fit perspective" />
                        </a>
                        <a href="https://www.linkedin.com/in/igordgomes/">
                            <LinkedInLogoIcon className="w-[30px] sm:w-[40px] h-fit perspective" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}