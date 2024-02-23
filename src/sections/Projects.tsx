import {projects} from "../utils/data/projects"

import html from "../assets/images/html.svg"
import css from "../assets/images/css.svg"
import js from "../assets/images/js.svg"
import sass from "../assets/images/sass.svg"
import vite from "../assets/images/vite.svg"
import react from "../assets/images/react.svg"
import tailwind from "../assets/images/tailwindcss.svg"
import ts from "../assets/images/typescript.svg"
import postgresql from "../assets/images/postgresql.svg"
import node from "../assets/images/nodejs.svg"
import express from "../assets/images/express.svg"

interface TechImages {
    [key: string]: string
}

const techImages: TechImages = {
    html: html,
    css: css,
    js: js,
    ts: ts,
    sass: sass,
    vite: vite,
    react: react,
    tailwind: tailwind,
    postgresql: postgresql,
    node: node,
    express: express,
}


export function Projects() {

    return (
        <div id="projects" className="flex flex-col justify-center items-center min-w-[300px] py-10">
            <h2 className="text-2xl sm:text-3xl font-bold">Latest Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 py-20 mx-auto place-self-center max-w-[1440px]">
                {
                    projects.map((project, index) => (
                        project.development ? (
                            <div key={index} className="relative flex flex-col items-center rounded-md overflow-hidden">
                                <div className="loader1 absolute"></div>
                                <h2 className="absolute top-0 bg-neutral-500 px-5 py-2 rounded-b-2xl z-0 text-white title">{project.title}</h2>
                                <img src={project.image} alt={project.title} className="w-[100%] h-[100%]" />
                                <div className="bg-neutral-600 w-full pt-2 pb-4 px-5">
                                    <h3 className="max-w-[80%] mx-auto text-center text-lg font-semibold mb-2">Technologies:</h3>
                                    <ul className="flex lg:flex-wrap justify-center items-center gap-3 min-h-[30px] lg:py-[9%]">
                                        {project.tech.map((tech, index) => (
                                            <li key={index}>
                                                <img src={techImages[tech]} alt={tech} className="size-9" />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ) :
                        (
                            <div key={index} className="relative flex flex-col items-center rounded-md overflow-hidden">
                                <h2 className="absolute top-0 bg-neutral-500 px-5 py-2 rounded-b-2xl z-0 text-white title">{project.title}</h2>
                                <a href={project.link} target="_blank">
                                    <img src={project.image} alt={project.title} className="w-[100svw]" />
                                </a>
                                <div className="bg-neutral-600 w-full pt-2 pb-4 px-5">
                                    <h3 className="max-w-[80%] mx-auto text-center text-lg font-semibold mb-2">Technologies:</h3>
                                    <ul className="flex justify-center items-center gap-3 min-h-[30px] lg:py-[18%]">
                                        {project.tech.map((tech, index) => (
                                            <li key={index}>
                                                <img src={techImages[tech]} alt={tech} className="size-9" />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )
                    ))
                }
            </div>
        </div>
    )
}



{/* <div className="relative flex flex-col items-center rounded-md overflow-hidden">
<div className="loader1 rounded-md overflow-hidden">
    <img src={project.image} alt={project.title} className="absolute -z-10" />
    <div className="absolute top-0 w-full py-[10px] flex justify-center items-center text-white title bg-neutral-500 font-semibold tracking-wide text-lg">
        In Development...
    </div>
    <div className="bg-neutral-600 text-black w-full pt-2 pb-4 px-5 absolute bottom-0 min-h-[88px]">
        <h3 className="max-w-[80%] mx-auto text-center text-lg font-semibold mb-2">Technologies:</h3>
        <ul className="flex justify-center items-center gap-3 max-h-[30px]">
            {project.tech.map((tech, index) => (
                <li key={index}>
                    <img src={techImages[tech]} alt={tech} className="size-7" />
                </li>
            ))}
        </ul>
    </div>
</div>
</div> */}