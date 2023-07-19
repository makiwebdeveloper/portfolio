import { cn } from "@/lib/cn";
import { Lobster } from "next/font/google";

const lobster = Lobster({ subsets: ["latin"], weight: ["400"] });

export default function Hero() {
  return (
    <section className="container h-screen flex items-center">
      <div className="w-2/3 -mt-20 space-y-10">
        <h1 className={cn("text-8xl text-shadow-purple", lobster.className)}>
          maki
          <br />
          webdeveloper
        </h1>
        <p>
          I am a front-end developer with 1 year of work experience in
          programming web applications. During this time, I successfully
          completed different projects that you can check in GitHub. Possess a
          strong understanding of web development principles and a passion for
          creating user-friendly and visually appealing applications.
        </p>
      </div>
    </section>
  );
}
