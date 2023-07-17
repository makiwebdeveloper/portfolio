import { getProjects } from "@/services/projects";

export const revalidate = 3600;

export default async function Home() {
  const projects = await getProjects();

  return (
    <main>
      <h1>Home</h1>
    </main>
  );
}
