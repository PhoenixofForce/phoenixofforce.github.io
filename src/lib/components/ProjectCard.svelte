<script lang="ts">
  import { Github, Globe, Youtube, Play } from "@lucide/svelte";
  import { projectImage } from "$lib/images";
  import { demoSrc, type Project } from "$lib/projects";
  import { hasReadme } from "$lib/readme";
  import DemoVideo from "./DemoVideo.svelte";

  interface Props {
    project: Project;
    onopen: () => void;
  }

  let { project, onopen }: Props = $props();

  const iconMap: Record<string, typeof Github> = {
    github: Github,
    globe: Globe,
    youtube: Youtube,
    play: Play,
  };

  const demo = $derived(demoSrc(project));
  const image = $derived(projectImage(project.image));

  let hovered = $state(false);
</script>

<article
  class="card bg-base-100 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200 h-full"
  onmouseenter={() => (hovered = true)}
  onmouseleave={() => (hovered = false)}
  onfocusin={() => (hovered = true)}
  onfocusout={(e) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) hovered = false;
  }}
>
  <figure
    class="relative h-60 bg-base-200 rounded-lg overflow-hidden [&>picture]:block [&>picture]:size-full"
  >
    {#if image}
      <enhanced:img
        src={image}
        sizes="320px"
        loading="lazy"
        alt={`${project.title} screenshot`}
        class="block w-full h-full object-cover"
      />
    {:else}
      <div class="w-full h-full bg-base-300"></div>
    {/if}

    {#if hovered && demo}
      <DemoVideo src={demo} />
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
    {#if hasReadme(project)}
      <button class="w-fit italic underline cursor-pointer" onclick={onopen}>Read more</button>
    {/if}

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
</article>
