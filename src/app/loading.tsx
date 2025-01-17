import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});

export default function Loading() {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-4">
      <h1 className={`text-4xl font-medium ${poppins.className}`}>
        Loading...
      </h1>
      <div className="loader"></div>
    </main>
  );
}
