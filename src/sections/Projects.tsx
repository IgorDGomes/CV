import { ProjectItem } from "../components/ProjectItem";

export function Projects() {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-6 gap-8">
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
            </div>
        </div>
    )
}