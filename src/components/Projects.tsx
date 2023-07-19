import { cn } from "@/lib/cn";
import { Lobster } from "next/font/google";

const lobster = Lobster({ subsets: ["latin"], weight: ["400"] });

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-purple-100 min-h-screen border-t-2 border-slate-600"
    >
      <div className="container">
        <h1 className={cn("title text-shadow-purple", lobster.className)}>
          Projects
        </h1>
      </div>
    </section>
  );
}
