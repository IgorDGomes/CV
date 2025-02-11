"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function SetHtmlLangTag() {
  const pathname = usePathname();

  useEffect(() => {
    const lang = pathname.split("/").filter(Boolean)[0];
    if (lang) {
      document.documentElement.lang = lang;
    }
  }, [pathname]);

  return null;
}
