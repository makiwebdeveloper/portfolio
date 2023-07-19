import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { getProjects } from "@/services/projects";

export const revalidate = 3600;

export default async function Home() {
  const projects = await getProjects();

  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Contacts />
    </main>
  );
}
