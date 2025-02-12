"use client";

import { translation } from "@/lib/translate";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

interface Error {
  title: string;
  description: string;
  link: string;
}

export default function NotFound() {
  const language = usePathname().split("/").filter(Boolean)[0];
  const [dictionary, setDictionary] = useState<Error>();

  const getTranslation = useCallback(async () => {
    try {
      const dictionary = await translation(language, "common").then((res) => {
        setDictionary(res.error);
      });

      return dictionary;
    } catch (error) {
      console.error("Error fetching page translation: ", error);
      setDictionary({
        title: "Not Found",
        description: "Could not find requested resource",
        link: "Return Home",
      });
    }
  }, [language]);

  useEffect(() => {
    getTranslation();
  }, [getTranslation]);

  return (
    <main className="flex flex-col h-screen items-center justify-center gap-4 text-background bg-foreground">
      <h1 className="text-4xl font-mono font-semibold">{dictionary?.title}</h1>
      <p className="text-xl font-mono">{dictionary?.description}</p>
      <Link
        href="/"
        className="underline underline-offset-2 font-mono text-lg hover:no-underline hover:text-zinc-50"
      >
        {dictionary?.link}
      </Link>
    </main>
  );
}
