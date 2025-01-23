"use client";

import { twMerge } from "tailwind-merge";

export function Language({
  lang,
  className,
}: {
  lang: string;
  className?: string;
}) {
  return (
    <button
      className={twMerge("hidden md:inline-block ml-12 text-sm", className)}
      onClick={() => console.log(lang)}
    >
      {lang.toUpperCase()}
    </button>
  );
}
