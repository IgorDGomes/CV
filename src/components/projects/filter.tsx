"use client";

import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { Roboto } from "next/font/google";
import { useState } from "react";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

export function Filter({ text }: { text: string }) {
  const [latestFirst, setLatestFirst] = useState(true);

  function handleSorting() {
    if (latestFirst) {
      console.log("Show latest at last");
      return setLatestFirst(false);
    }

    console.log("Show latest at first");
    setLatestFirst(true);
  }

  return (
    <div>
      <button className="flex items-center gap-1" onClick={handleSorting}>
        <span className={`${roboto.className} text-sm tracking-wide`}>
          {text}
        </span>
        {latestFirst ? (
          <ArrowUpIcon className="size-4" />
        ) : (
          <ArrowDownIcon className="size-4" />
        )}
      </button>
    </div>
  );
}
