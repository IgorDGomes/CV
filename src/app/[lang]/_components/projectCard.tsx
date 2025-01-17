import Link from "next/link";

export function ProjectCard() {
  return (
    <div className="grid grid-cols-3 border border-foreground rounded-lg overflow-hidden">
      <div className="col-span-1 bg-white"></div>
      <div className="col-span-2 p-4">
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi eum
          eveniet unde possimus aspernatur qui deleniti ratione sit ducimus
          blanditiis rerum non, necessitatibus enim corrupti ut quidem sed
          distinctio repellendus.
        </p>
        <div className="flex">
          <Link href={"/"}>Open Website</Link>
          <Link href={"/"}>Open Repository</Link>
        </div>
        <div className="flex">
          <div>Tech</div>
          <div>Tech</div>
          <div>Tech</div>
          <div>Tech</div>
          <div>Tech</div>
          <div>Tech</div>
        </div>
      </div>
    </div>
  );
}
