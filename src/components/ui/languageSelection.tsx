"use client";

import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

export function Language({
  lang,
  className,
}: {
  lang: string;
  className?: string;
}) {
  const router = useRouter();
  const pathList = usePathname().split("/").filter(Boolean);
  const pathAfterLanguage = pathList.slice(1).join("/");

  function handleLanguageSelection(e: ChangeEvent<HTMLSelectElement>) {
    const selectedLanguage = e.target.value;

    return router.push(`/${selectedLanguage}/${pathAfterLanguage}`);
  }

  return (
    <select
      className={twMerge("md:ml-12 hover:cursor-pointer", className)}
      onChange={handleLanguageSelection}
      name="languageSelection"
    >
      {lang === "en" ? (
        <>
          <option value="en" defaultValue={lang}>
            EN
          </option>
          <option value="pt">PT</option>
        </>
      ) : (
        <>
          <option value="pt" defaultValue={lang}>
            PT
          </option>
          <option value="en">EN</option>
        </>
      )}
    </select>
  );
}
