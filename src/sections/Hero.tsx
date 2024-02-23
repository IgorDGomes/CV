import { TypewriterEffect } from "../components/ui/typewriter-effect"
import { DownloadIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

import img1 from "../assets/images/YoungMan.jpg"
import { useState } from "react";
import { CheckIcon, Loader2 } from "lucide-react";

export function Hero() {

  const [loading, setLoading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleButtonClick = () => {
    setLoading(true);

    setTimeout(() => {
      setDownloaded(true);
      setLoading(false);
    }, 2000);
  };

  const renderButtonOrLoading = () => {
    if (loading) {
      return (
        <a 
          className="flex justify-center gap-2 py-3 mt-5 sm:mt-0 min-w-[170px] rounded-full bg-zinc-500/70 hover:bg-zinc-500 drop-shadow-lg hover:drop-shadow-none font-medium download"
        >
        <Loader2 className="size-5 text-white animate-spin" />Download CV
        </a>);
    } else if (downloaded) {
      return (
        <a 
          href="../assets/Resume.docx" 
          download="cv.docx" 
          className="flex justify-center gap-2 py-3 mt-5 sm:mt-0 min-w-[170px] rounded-full bg-zinc-500/70 hover:bg-zinc-500 drop-shadow-lg hover:drop-shadow-none font-medium download cursor-pointer"
          onClick={handleButtonClick}
        >
        <CheckIcon className="size-5 text-white" />Download CV
        </a>);
    } else {
      return (
        <a 
        href="../assets/Resume.docx" 
        download="cv.docx" 
          className="flex justify-center gap-2 py-3 mt-5 sm:mt-0 min-w-[170px] rounded-full bg-zinc-500/70 hover:bg-zinc-500 drop-shadow-lg hover:drop-shadow-none font-medium download"
          onClick={handleButtonClick}
        >
        <DownloadIcon className="size-5 text-white" />Download CV
        </a>);
    }
  };

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
        <div id="about" className="pt-[10svh] pb-10 sm:pt-[92px] min-h-[500px] h-fit w-full min-w-[300px] flex flex-col md:flex-row items-center justify-center overflow-hidden">
            <img src={img1} alt="Young man studying on computer" className="w-[30svw] min-w-[250px] sm:min-w-[300px] md:min-w-[400px] max-w-[600px] h-fit rounded-xl my-10" />
            <div className="flex flex-col w-full sm:gap-2 md:gap-4 md:w-[50svw] max-w-[600px] px-10 py-8 sm:py-20">
                <h2 className="tracking-wide"><TypewriterEffect words={words} /></h2>
                <p className="py-5 leading-5 text-sm sm:text-lg">I started programming because I thought it was interesting to know how websites were created from scratch, and since then I keep trying to improve my skills.</p>
                <div className="grid place-items-center sm:grid-cols-2 gap-10">
                    {renderButtonOrLoading()}
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