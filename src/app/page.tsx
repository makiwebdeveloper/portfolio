import Container from "@/components/Container";
import { getProjects } from "@/services/projects";

export const revalidate = 3600;

export default async function Home() {
  const projects = await getProjects();

  return (
    <main>
      <Container>Home</Container>
    </main>
  );
}
