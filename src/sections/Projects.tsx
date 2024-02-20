import {projects} from "../../public/projects"

import html from "../assets/html.svg"
import css from "../assets/css.svg"
import js from "../assets/js.svg"
import sass from "../assets/sass.svg"
import vite from "../assets/vite.svg"
import react from "../assets/react.svg"
import tailwind from "../assets/tailwindcss.svg"

interface TechImages {
    [key: string]: string
}

const techImages: TechImages = {
    html: html,
    css: css,
    js: js,
    sass: sass,
    vite: vite,
    react: react,
    tailwind: tailwind
}


export function Projects() {

    return (
        <div id="projects" className="flex justify-center min-w-[300px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 py-20 mb-[1000px] mx-auto place-self-center max-w-[1440px]">
                {
                    projects.map((project, index) => (
                        <div key={index} className="relative flex flex-col items-center rounded-md overflow-hidden">
                            <h2 className="absolute z-0 text-white title">{project.title}</h2>
                            <a href={project.link}>
                                <img src={project.image} alt={project.title} className="w-[100svw]" />
                            </a>
                            <div className="bg-neutral-600 w-full">
                                <h3 className="max-w-[80%] mx-auto text-center text-lg font-semibold">Technologies:</h3>
                                <ul className="grid grid-cols-4 sm:grid-cols-7 gap-4">
                                    {project.tech.map((tech, index) => (
                                        <li key={index}>
                                            <img src={techImages[tech]} alt={tech} className="size-10" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>





            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 py-20 mb-[300px] mx-auto place-self-center">
                <a href="https://prime-video-redesign.netlify.app" target="_blank" className="relative z-10">
                    <div className="absolute top-0 right-0 left-0 bg-black/20 h-full rounded-md overflow-hidden">
                        <img src={imagePath1} alt="" />
                    </div>
                    <ProjectItem title="Prime Video Redesign" defined />
                    <div className="relative z-10 flex justify-center py-2 gap-1">
                        <img src={html} alt="html" className="size-6 sm:size-8" />
                        <img src={css} alt="html" className="size-6 sm:size-8" />
                        <img src={js} alt="html" className="size-6 sm:size-8" />
                        <img src={sass} alt="html" className="size-6 sm:size-8" />
                        <img src={vite} alt="html" className="size-6 sm:size-8" />
                        <img src={tailwind} alt="html" className="size-6 sm:size-8" />
                        <img src={react} alt="html" className="size-6 sm:size-8" />
                    </div>
                </a>
                <a href="https://notes-nlw.netlify.app" target="_blank" className="relative z-10 border-black hover:border-white border-[1px] rounded-lg hover:blur-[0.6px]" title="Notes NLW Project">
                    <div className="absolute top-0 right-0 left-0 bg-black/20 h-full rounded-md overflow-hidden">
                        <img src={imagePath1} alt="" className="" />
                    </div>
                    <ProjectItem title="asd" text="sdaf" defined />
                </a>
                <ProjectItem />
                <ProjectItem />
            </div> */}
        </div>
    )
}