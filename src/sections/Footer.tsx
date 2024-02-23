import { GitHubLogoIcon, LinkedInLogoIcon, PersonIcon } from "@radix-ui/react-icons";

export function Footer() {

    const d = new Date();
    const year = d.getFullYear();

    return (
        <div className="flex justify-center max-w-[500px] mx-auto py-5">
            <ul className="flex flex-col sm:flex-row items-center sm:gap-10">
                <li className="flex gap-2 items-center h-7">
                    <PersonIcon className="size-5" />
                    <span className="text-sm">{`© ${year} Igor Gomes`}</span>
                </li>
                <li>
                    <a href="https://github.com/IgorDGomes" target="_blank" className="flex gap-2 items-center h-7 border-b-slide hover:text-neutral-500">
                        <GitHubLogoIcon className="size-5 text-black" />
                        IgorDGomes
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/igordgomes/" target="_blank" className="flex gap-2 items-center h-7 border-b-slide hover:text-neutral-500">
                        <LinkedInLogoIcon className="size-5 text-black" />
                        Igordgomes
                    </a>
                </li>
            </ul>
        </div>
    )
}