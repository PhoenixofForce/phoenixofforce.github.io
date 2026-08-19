<script lang="ts">
  import { Github, Globe, Youtube, Play, X } from "@lucide/svelte";
  import type { Project } from "$lib/projects";
  import { getReadme } from "$lib/readme";
  import Markdown from "./Markdown.svelte";

  interface Props {
    project: Project | null;
    onclose: () => void;
  }

  const { project, onclose }: Props = $props();

  const iconMap: Record<string, typeof Github> = {
    github: Github,
    globe: Globe,
    youtube: Youtube,
    play: Play,
  };

  let dialog: HTMLDialogElement;
  const readme = $derived(project && getReadme(project));

  $effect(() => {
    if (project) dialog.showModal();
    else dialog.close();
  });
</script>

<dialog bind:this={dialog} class="modal modal-bottom sm:modal-middle" {onclose}>
  <div class="modal-box max-w-3xl max-h-[85vh] p-0 flex flex-col">
    {#if project}
      <form method="dialog">
        <button class="btn btn-sm btn-circle absolute right-3 top-3" aria-label="Close">
          <X size={16} />
        </button>
      </form>

      <div class="overflow-y-auto p-6">
        <div class="flex items-baseline gap-2">
          <h3 class="text-2xl font-bold">{project.title}</h3>
          {#if project.year}
            <span class="text-sm text-base-content/50">{project.year}</span>
          {/if}
        </div>

        <p class="mt-2 text-base-content/70">{project.description}</p>

        <div class="flex flex-wrap gap-1.5 mt-3">
          {#each [...project.tags].sort() as tag (tag)}
            <span class="badge badge-sm bg-base-200">{tag}</span>
          {/each}
        </div>

        {#if project.links.length > 0}
          <div class="flex flex-wrap gap-2 mt-4">
            {#each project.links as link (link.url)}
              {@const Icon = iconMap[link.icon] ?? Globe}
              <a
                href={link.url}
                target="_blank"
                rel="external noopener noreferrer"
                class="btn btn-sm"
              >
                <Icon size={16} />
                {link.label}
              </a>
            {/each}
          </div>
        {/if}

        {#if readme}
          <div class="divider"></div>
          <Markdown
            md={readme.markdown}
            imageBase={readme.imageBase}
            linkBase={readme.linkBase}
            class="max-w-none prose-img:inline-block"
          />
        {/if}
      </div>
    {/if}
  </div>

  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
