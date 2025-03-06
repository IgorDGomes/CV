"use client";

import { redirect, usePathname } from "next/navigation";

export default function Project() {
  const pathname = usePathname();
  const lang = pathname.split("/").filter(Boolean)[0];

  return redirect(`/${lang}/projects`);
}
