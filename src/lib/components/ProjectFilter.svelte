<script lang="ts">
  import ProjectGrid from "./ProjectGrid.svelte";
  import type { Project } from "$lib/projects";
  import { Funnel, X } from "@lucide/svelte";

  interface Props {
    projects: Project[];
  }

  const props: Props = $props();

  let allTags = $derived([...new Set(props.projects.flatMap((p) => p.tags))].sort());
  let selectedTags: string[] = $state([]);

  let filterAnd = $state(true);

  let filter = $state("");
  let filtered = $derived(
    props.projects
      .filter(
        (p) =>
          !selectedTags.length ||
          (filterAnd
            ? selectedTags.every((t) => p.tags.includes(t))
            : selectedTags.some((t) => p.tags.includes(t))),
      )
      .filter((p) => JSON.stringify(p).toLowerCase().includes(filter.toLowerCase())),
  );

  function toggleTag(tag: string) {
    if (selectedTags.includes(tag)) {
      selectedTags = selectedTags.filter((t) => t !== tag);
    } else {
      selectedTags = [...selectedTags, tag];
    }
  }
</script>

<div class="page-width pb-16">
  <div class="mb-8 flex w-full justify-end gap-2">
    <div class="join">
      <input class="input join-item" bind:value={filter} placeholder="Search..." />
      <div class="indicator">
        {#if selectedTags.length}
          <button
            class="indicator-item badge badge-sm badge-primary"
            onclick={() => (selectedTags = [])}
          >
            {selectedTags.length}
            <X size="1rem" />
          </button>
        {/if}
        <button class="btn join-item" popovertarget="popover-1" style="anchor-name:--anchor-1">
          <Funnel size="1.3em" />
        </button>
      </div>
    </div>

    <ul
      class="dropdown dropdown-end menu w-52 rounded-box bg-base-100 shadow-sm max-h-62 flex flex-col gap-1 flex-nowrap"
      popover
      id="popover-1"
      style="position-anchor:--anchor-1"
    >
      <button
        class="btn w-full {filterAnd ? 'btn-primary' : 'btn-secondary'}"
        onclick={() => (filterAnd = !filterAnd)}
      >
        {filterAnd ? "Uses AND" : "Uses OR"}
      </button>

      {#each allTags as tag (tag)}
        <li>
          <label class="label">
            <input
              type="checkbox"
              checked={selectedTags.includes(tag)}
              class="checkbox"
              onclick={() => toggleTag(tag)}
            />
            {tag}
          </label>
        </li>
      {/each}
    </ul>
  </div>

  <ProjectGrid projects={filtered} />
</div>
