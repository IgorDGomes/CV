interface ProjectItemProps {
    title?: string
    text?: string
    defined?: boolean
}

export function ProjectItem({ title, text, defined }: ProjectItemProps) {

    return (
        defined ? (
            <div className="relative z-10 w-[330px] h-[206px] sm:w-full sm:h-[206px] rounded-md flex flex-col justify-end items-center overflow-hidden text-white">
                <h2 className="w-[350px] text-center">{title}</h2>
                <p>{text}</p>
            </div>
        ) :
        (
            <div className="relative w-[330px] h-[206px] sm:w-full sm:h-[206px] bg-white rounded-md flex justify-center items-center overflow-hidden">
                <div className="loader1"></div>
                <div className="absolute">In developmment</div>
            </div>
        )
    )
}