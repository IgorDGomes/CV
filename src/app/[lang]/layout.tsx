import type { Metadata } from "next";
import "../globals.css";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

export const metadata: Metadata = {
  title: "Igor Gomes Portfolio",
  description: "My portfolio made using Next.js, Typescript and TailwindCSS.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body className="antialiased">
        <Header language={lang} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
