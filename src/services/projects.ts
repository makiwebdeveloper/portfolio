import { IProject } from "@/interfaces/project.interface";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<IProject[]> {
  const client = createClient({
    projectId: "lcla0vpa",
    dataset: "production",
    apiVersion: "2023-07-17",
    useCdn: true,
  });

  return client.fetch(
    groq`*[_type == "project"] {
      "id": _id,
      "createdAt": _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      projectUrl,
      githubUrl,
      content
    }`
  );
}
