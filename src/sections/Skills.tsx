import { RocketIcon } from "@radix-ui/react-icons";

export function Skills() {

    const skills = ["HTML", "CSS", "Javascript", "Typescript", "React", "TailwindCSS", "SCSS",];

    return (
        <div id="skills" className="flex flex-col justify-center items-center py-10 min-w-[300px]">
            <h2 className="text-2xl sm:text-3xl font-bold">Skills</h2>
            <div className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-8 md:gap-0 w-full max-w-[1200px] lg:px-20 py-20">
                <div className="w-[100%] flex justify-center">
                    <div className="relative min-w-[200px] min-h-[130px]">
                        <RocketIcon className="size-32 absolute top-0 left-0" />
                        <RocketIcon className="size-5 absolute top-0 left-36" />
                        <RocketIcon className="size-10 absolute top-12 left-44" />
                    </div>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 w-[100%] text-center">
                    {skills.map((skill, index) => {
                        return <li key={index} className="font-semibold text-xl pb-5">{skill}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}