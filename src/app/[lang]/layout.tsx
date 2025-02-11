import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

import "../globals.css";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/themeProvider";

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
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Header language={lang} />
      {children}
      <Footer />
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  );
}
