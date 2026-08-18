<script lang="ts">
  import Summary from "$lib/components/Summary.svelte";
  import Biography from "$lib/components/Biography.svelte";
  import TechStack from "$lib/components/TechStack.svelte";
  import ProjectGrid from "$lib/components/ProjectGrid.svelte";
  import { projects } from "$lib/projects";

  const showcaseProjects = projects.filter((project) => project.showcase);
</script>

<svelte:head>
  <title>Ole | Software Developer</title>
</svelte:head>

<div class="w-[90vw] mx-auto">
  <h1 class="mt-12 mb-2 text-4xl font-bold tracking-widest max-md:text-center">HELLO THERE 👋</h1>
</div>

<div class="bg-secondary text-secondary-content mb-8">
  <div
    class="w-[90vw] mx-auto py-5 pb-8 flex justify-evenly gap-4 max-md:flex-col max-md:items-center"
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
    Contact Me
  </a>
</div>

<div class="w-[90vw] mx-auto pb-16">
  <h1 class="text-3xl font-bold tracking-widest text-center mb-6">SHOWCASE</h1>
  <div class="flex flex-col gap-8">
    <ProjectGrid projects={showcaseProjects} />
  </div>
</div>