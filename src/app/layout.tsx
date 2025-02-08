import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Igor Gomes Portfolio",
  description: "My portfolio made using Next.js, Typescript and TailwindCSS.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className="antialiased transition-all duration-300">
        {children}
      </body>
    </html>
  );
}
