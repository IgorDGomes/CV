import Link from "next/link";

export default function ErrorPage() {
  return (
    <main className="flex flex-col h-screen items-center justify-center gap-4 text-foreground">
      <h1 className="text-4xl font-mono font-semibold">Not Found</h1>
      <p className="text-xl font-mono">Could not find requested resource</p>
      <Link href="/" className="underline underline-offset-2 font-mono text-lg">
        Return Home
      </Link>
    </main>
  );
}
