import { projects, projectSlug, type Project } from "../src/lib/projects.ts";
import { writeFileSync, mkdirSync, existsSync } from "node:fs";

for (const project of projects) {
  await fetchGithubReadme(project);
}

async function fetchGithubReadme(project: Project) {
  console.log(`Fetching ${project.title}`);
  const githubLink = project.links.find((link) => link.url.includes("github.com"));
  if (!githubLink) {
    console.error("Failed to fetch: No github link");
    return;
  }

  const filePath = "src/lib/md/" + projectSlug(project.title) + ".md";

  if (existsSync(filePath)) {
    console.error("Failed to fetch: Cached");
    return;
  }

  const md = await fetchReadme(githubLink.url);
  if (!md) {
    console.error("Failed to fetch: Empty");
    return;
  }
  if (md.length < 200) {
    console.error("Failed to fetch: Too short");
    return;
  }
  if (md.includes("# svelte app")) {
    console.error("Failed to fetch: Default template");
    return;
  }

  try {
    mkdirSync("src/lib/md", { recursive: true });
    writeFileSync(filePath, md);
  } catch (err) {
    console.error(err);
  }
}

async function fetchReadme(repoUrl: string): Promise<string | null> {
  for (const branch of ["main", "master"]) {
    const url = repoUrl.replace("github.com", "raw.githubusercontent.com") + `/${branch}/README.md`;
    const response = await fetch(url);
    if (response.ok) return await response.text();
  }

  const url = repoUrl.replace("github.com", "api.github.com/repos") + "/readme";
  const response = await fetch(url, {
    headers: { Accept: "application/vnd.github.raw" },
  });
  if (response.ok) return await response.text();

  return null;
}
