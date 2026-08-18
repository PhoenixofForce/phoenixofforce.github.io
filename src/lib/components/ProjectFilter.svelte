<script lang="ts">
  import ProjectGrid from "./ProjectGrid.svelte";
  import type { Project } from "$lib/projects";

  interface Props {
    projects: Project[];
  }

  const props: Props = $props();

  let allTags = $derived(
    [...new Set(props.projects.flatMap((p) => p.tags))].sort(),
  );
  let selectedTags: string[] = $state([]);

  let filtered = $derived(
    selectedTags.length === 0
      ? props.projects
      : props.projects.filter((p) =>
          p.tags.some((t) => selectedTags.includes(t)),
        ),
  );

  function toggleTag(tag: string) {
    if (selectedTags.includes(tag)) {
      selectedTags = selectedTags.filter((t) => t !== tag);
    } else {
      selectedTags = [...selectedTags, tag];
    }
  }
</script>

<div class="w-[90vw] mx-auto pb-16">
  <form class="flex gap-2 flex-wrap mb-8 justify-center">
    {#each allTags as tag (tag)}
      <input
        type="checkbox"
        class="btn"
        name="frameworks"
        checked={selectedTags.includes(tag)}
        onchange={() => toggleTag(tag)}
        aria-label={tag}
      />
    {/each}
    <input
      class="btn btn-square"
      type="reset"
      value="×"
      onclick={() => (selectedTags = [])}
    />
  </form>

  <ProjectGrid projects={filtered} />
</div>
