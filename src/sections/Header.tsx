import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react"

export function Header() {
    const [smallDevice, setSmallDevice] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 600) {
                setSmallDevice(true);
            } else {
                setSmallDevice(false);
            }
        }

        handleResize()

        return window.addEventListener("resize", handleResize);

    }, [])

    return (
        <>
            {
                smallDevice ? (
                    <div className="flex items-center bg-neutral-400 w-full min-h-[70px]">
                        <div className="ml-[5svw]">
                            <h1 className="font-bold text-xl">My Portfolio</h1>
                        </div>
                        <div className="fixed z-10 right-[5svw] bg-neutral-400 rounded-full">
                            <DropdownMenu.Root>
                                <DropdownMenu.Trigger asChild>
                                    <HamburgerMenuIcon className="border rounded-full p-1 w-[40px] h-fit menu-shadow hover:shadow-none hover:border-neutral-200" />
                                </DropdownMenu.Trigger>
                                <DropdownMenu.Portal>
                                    <DropdownMenu.Content className="flex flex-col gap-[6px] bg-neutral-200 p-3 rounded-md w-[150px] mr-5">
                                        <DropdownMenu.Item>
                                            <a href="#about" 
                                            target="_self"
                                            className="flex justify-center py-1 px-2 hover:bg-neutral-300 rounded-md w-full font-semibold"
                                            >
                                                About Me
                                            </a>
                                        </DropdownMenu.Item>
                                        <DropdownMenu.Separator className="h-[1px] bg-neutral-400" />
                                        <DropdownMenu.Item>
                                            <a href="#projects" 
                                            target="_self" 
                                            className="flex justify-center py-1 px-2 outline-none hover:bg-neutral-300 rounded-md w-full font-semibold"
                                            >
                                                Projects
                                            </a>
                                        </DropdownMenu.Item>
                                        <DropdownMenu.Separator className="h-[1px] bg-neutral-400" />
                                        <DropdownMenu.Item>
                                            <a href="#skills" 
                                            target="_self"
                                            className="flex justify-center py-1 px-2 outline-none hover:bg-neutral-300 rounded-md w-full font-semibold"
                                            >
                                                Skills
                                            </a>
                                        </DropdownMenu.Item>
                                        <DropdownMenu.Separator className="h-[1px] bg-neutral-400" />
                                        <DropdownMenu.Item>
                                            <a href="#contact" 
                                            target="_self"
                                            className="flex justify-center py-1 px-2 outline-none hover:bg-neutral-300 rounded-md w-full font-semibold"
                                            >
                                                Contact Me
                                            </a>
                                        </DropdownMenu.Item>
                                        <DropdownMenu.Arrow className="fill-neutral-300" />
                                    </DropdownMenu.Content>
                                </DropdownMenu.Portal>
                            </DropdownMenu.Root>
                        </div>
                    </div>
                ) : (
                    <div className="fixed top-0 z-10 w-full bg-neutral-400 min-h-[90px] h-[10svh] max-h-[110px]">
                        <ul className="flex justify-center items-center gap-[7svw] md:gap-[5svw] w-full h-full text-white font-semibold text-[1.3rem] tracking-wide">
                            <li className="hover:text-black border-b-slide"><a href="#about" target="_self">About Me</a></li>
                            <li className="hover:text-black border-b-slide"><a href="#projects" target="_self">Projects</a></li>
                            <li className="hover:text-black border-b-slide"><a href="#skills" target="_self">Skills</a></li>
                            <li className="hover:text-black border-b-slide"><a href="#contact" target="_self">Contact Me</a></li>
                        </ul>
                    </div>
                )
            }
        </>
    )
}