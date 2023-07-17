import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

const sanityConfig = defineConfig({
  title: "makiwebdeveloper portfolio",
  projectId: "lcla0vpa",
  dataset: "production",
  plugins: [deskTool(), visionTool()],
  apiVersion: "2023-07-17",
  basePath: "/admin",
});

export default sanityConfig;
