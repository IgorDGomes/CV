import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./_components/header";

export const metadata: Metadata = {
  title: "Igor Gomes Portfolio",
  description: "My portfolio made using Next.js, Typescript and TailwindCSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
