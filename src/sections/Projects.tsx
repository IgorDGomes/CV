import { ProjectItem } from "../components/ProjectItem";

import imagePath1 from "../../public/PrimeVideo.jpg"

export function Projects() {


    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-20 mb-[300px] mx-auto">
                <div className="relative z-10">
                    <div className="absolute top-0 right-0 left-0 bg-black/20 h-full rounded-md overflow-hidden">
                        <img src={imagePath1} alt="" />
                    </div>
                    <ProjectItem title="asd" text="sdaf" defined />
                </div>
                <div className="relative z-10">
                    <div className="absolute top-0 right-0 left-0 bg-black/20 h-full rounded-md overflow-hidden">
                        <img src={imagePath1} alt="" className="" />
                    </div>
                    <ProjectItem title="asd" text="sdaf" defined />
                </div>
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
            </div>
        </div>
    )
}