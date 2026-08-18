<script lang="ts">
  import { Github, Globe, Youtube, Play } from "@lucide/svelte";
  import type { Project } from "$lib/projects";

  interface Props {
    project: Project;
  }

  let { project }: Props = $props();

  const iconMap: Record<string, typeof Github> = {
    github: Github,
    globe: Globe,
    youtube: Youtube,
    play: Play,
  };
</script>

<div
  class="card bg-base-100 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200 h-full"
>
  <figure class="h-60 bg-base-200 rounded-lg overflow-hidden">
    {#if project.image}
      <img
        src={`/images/${project.image}.png`}
        alt={`${project.title} screenshot`}
        class="w-full h-full object-cover"
      />
    {:else}
      <div class="w-full h-full bg-base-300"></div>
    {/if}
  </figure>

  <div class="card-body p-4">
    <div class="flex items-baseline gap-2">
      <h2 class="card-title text-lg">{project.title}</h2>
      {#if project.year}
        <span class="text-sm text-base-content/50">{project.year}</span>
      {/if}
    </div>

    <p class="text-sm text-base-content/70">{project.description}</p>

    <div class="flex gap-2 my-1">
      {#each project.links as link (link.url)}
        {@const Icon = iconMap[link.icon] ?? Globe}
        <a
          href={link.url}
          target="_blank"
          rel="external noopener noreferrer"
          class="btn btn-ghost btn-sm btn-circle hover:scale-115 transition-transform"
          title={link.label}
        >
          <Icon size={18} />
        </a>
      {/each}
    </div>

    <div class="card-actions mt-auto pt-2 border-t border-base-300">
      <div class="flex flex-wrap gap-1.5">
        {#each [...project.tags].sort() as tag (tag)}
          <span class="badge badge-sm bg-base-200">{tag}</span>
        {/each}
      </div>
    </div>
  </div>
</div>
