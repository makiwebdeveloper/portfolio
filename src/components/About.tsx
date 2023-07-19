import { cn } from "@/lib/cn";
import { Lobster } from "next/font/google";

const lobster = Lobster({ subsets: ["latin"], weight: ["400"] });

export default function About() {
  return (
    <section
      id="about"
      className="bg-orange-100 border-t-2 border-slate-600 h-screen"
    >
      <div className="container">
        <h1 className={cn("title text-shadow-orange", lobster.className)}>
          About
        </h1>
      </div>
    </section>
  );
}
