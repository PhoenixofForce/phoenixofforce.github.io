<script lang="ts">
  import { flip } from "svelte/animate";
  import { scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import ProjectCard from "./ProjectCard.svelte";
  import ProjectDetailModal from "./ProjectDetailModal.svelte";
  import type { Project } from "$lib/projects";
  import { onMount } from "svelte";
  import { prefersReducedMotion } from "svelte/motion";

  interface Props {
    projects: Project[];
  }

  const { projects }: Props = $props();

  let selected = $state<Project | null>(null);
  let isFirstLoad = $state(true);

  onMount(() => {
    setTimeout(() => (isFirstLoad = false), 100 * 12 + 300);
  });
</script>

<div class="flex flex-wrap justify-center gap-8">
  {#each projects as project, i (project.title + project.year)}
    <div
      class="w-80"
      animate:flip={{ duration: prefersReducedMotion.current ? 0 : 400, easing: quintOut }}
      in:scale={{
        duration: prefersReducedMotion.current ? 0 : 250,
        start: 0.9,
        delay: 150,
        easing: quintOut,
      }}
      out:scale={{ duration: prefersReducedMotion.current ? 0 : 150, start: 0.9, easing: quintOut }}
    >
      <div
        class="w-full h-full"
        class:stagger={isFirstLoad}
        style="animation-delay: {Math.min(12, isFirstLoad ? i : 0) * 100}ms"
      >
        <ProjectCard {project} onopen={() => (selected = project)} />
      </div>
    </div>
  {/each}
</div>

<ProjectDetailModal project={selected} onclose={() => (selected = null)} />

<style>
  @media (prefers-reduced-motion: no-preference) {
    .stagger {
      animation: slideIn 300ms ease-out backwards;
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        translate: 0 20px;
      }
      to {
        opacity: 1;
        translate: 0 0;
      }
    }
  }
</style>
