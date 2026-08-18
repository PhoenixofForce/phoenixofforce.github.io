<script lang="ts">
  import Summary from "$lib/components/Summary.svelte";
  import Biography from "$lib/components/Biography.svelte";
  import TechStack from "$lib/components/TechStack.svelte";
  import ProjectGrid from "$lib/components/ProjectGrid.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import { projects } from "$lib/projects";
  import { LayoutGrid, Mail } from "@lucide/svelte";
  import { resolve } from "$app/paths";

  const showcaseProjects = projects.filter((project) => project.showcase);
</script>

 <Seo
  title="Ole | Software Developer"
  description="Software developer from Germany. Game development, competitive programming, and building things for the web."
/>

<div class="page-width">
  <h1 class="mt-12 mb-2 text-4xl font-bold tracking-widest max-md:text-center">HELLO THERE 👋</h1>
</div>

<div class="bg-secondary text-secondary-content mb-8 py-8">
  <div
    class="page-width py-5 pb-8 flex justify-between gap-10 max-md:flex-col max-md:items-center max-md:gap-4"
  >
    <Summary />
    <Biography />
    <TechStack />
  </div>
</div>

<div class="flex justify-center pb-32">
  <a
    href="mailto:contact@phoenixofforce.dev"
    class="btn btn-primary btn-lg tracking-wide hover:scale-115 transition-all"
  >
    <Mail size="1.3rem" />
    Contact Me
  </a>
</div>

<div class="page-width pb-16">
  <div class="flex flex-col sm:flex-row mb-4">
    <div class="flex-1"></div>
    <div class="grow">
      <h1 class="text-3xl font-bold tracking-widest text-center mb-6">SHOWCASE</h1>
    </div>
    <div class="flex-1">
      <a href={resolve("/projects")} class="btn btn-ghost w-full">
        Show All <LayoutGrid size="1.3rem" />
      </a>
    </div>
  </div>
  <div class="flex flex-col gap-8">
    <ProjectGrid projects={showcaseProjects} />
  </div>
</div>
