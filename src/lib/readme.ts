import { projectSlug, type Project } from "$lib/projects";

const files = import.meta.glob("./md/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const readmes = new Map(
  Object.entries(files).map(([path, markdown]) => [
    path.slice(path.lastIndexOf("/") + 1, -".md".length),
    markdown,
  ]),
);

export interface Readme {
  markdown: string;
  imageBase?: string;
  linkBase?: string;
}

export function hasReadme(project: Project) {
  return readmes.has(projectSlug(project.title));
}

export function getReadme(project: Project): Readme | null {
  const cached = readmes.get(projectSlug(project.title));
  if (cached === undefined) return null;

  const markdown = cached.replace(/^\s*#+\s+.*\r?\n/, "");
  const link = project.links.find(({ url }) => url.includes("github.com"));

  return {
    markdown,
    imageBase: link && link.url.replace("github", "raw.githubusercontent") + "/HEAD/",
    linkBase: link && link.url + "/blob/HEAD/",
  };
}