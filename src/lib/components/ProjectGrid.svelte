<script lang="ts">
  import { flip } from "svelte/animate";
  import { scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import ProjectCard from "./ProjectCard.svelte";
  import ProjectDetailModal from "./ProjectDetailModal.svelte";
  import type { Project } from "$lib/projects";

  interface Props {
    projects: Project[];
  }

  const { projects }: Props = $props();

  let selected = $state<Project | null>(null);
</script>

<div class="flex flex-wrap justify-center gap-8">
  {#each projects as project (project.title + project.year)}
    <div
      class="w-80"
      animate:flip={{ duration: 400, easing: quintOut }}
      in:scale={{ duration: 250, start: 0.9, delay: 150, easing: quintOut }}
      out:scale={{ duration: 150, start: 0.9, easing: quintOut }}
    >
      <ProjectCard {project} onopen={() => (selected = project)} />
    </div>
  {/each}
</div>

<ProjectDetailModal project={selected} onclose={() => (selected = null)} />
