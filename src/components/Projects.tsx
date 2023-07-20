import { IProject } from "@/interfaces/project.interface";
import { cn } from "@/lib/cn";
import { PortableText } from "@portabletext/react";
import { Lobster } from "next/font/google";
import Image from "next/image";

const lobster = Lobster({ subsets: ["latin"], weight: ["400"] });

interface Props {
  projects: IProject[];
}

export default function Projects({ projects }: Props) {
  return (
    <section
      id="projects"
      className="bg-purple-100 min-h-screen border-t-2 border-slate-600"
    >
      <div className="container space-y-10">
        <h1 className={cn("title text-shadow-purple", lobster.className)}>
          Projects
        </h1>
        <div>
          {projects.map((project) => (
            <article className="flex">
              <div className="relative w-[200px] h-[150px]">
                <Image
                  src={project.image}
                  fill
                  alt={project.name}
                  className="object-cover"
                />
              </div>
              <div>
                <h5>{project.name}</h5>
                <PortableText value={project.content} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
