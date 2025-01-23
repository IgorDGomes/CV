import { twMerge } from "tailwind-merge";

export function Divider({ className }: { className?: string }) {
  return <div className={twMerge("h-[1px] bg-divider/10", className)}></div>;
}
