import { PortableTextBlock } from "sanity";

export interface IProject {
  id: string;
  createdAt: Date;
  name: string;
  slug: string;
  image: string;
  projectUrl: string;
  githubUrl: string;
  content: PortableTextBlock[];
}
