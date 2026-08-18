<script lang="ts">
  import ProjectCard from "./ProjectCard.svelte";
  import type { Project } from "$lib/projects";

  interface Props {
    projects: Project[];
  }

  const { projects }: Props = $props();
</script>

<div class="flex flex-wrap justify-center gap-8">
  {#each projects as project (project.title + project.year)}
    <div class="w-80">
      <ProjectCard {project} />
    </div>
  {/each}
</div>
