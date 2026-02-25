<script lang="ts">
	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import ProjectCard from './ProjectCard.svelte';
	import type { Project } from '../data/projects';

	interface Props {
		projects: Project[];
	}

	const props: Props = $props();

	let allTags = $derived([...new Set(props.projects.flatMap((p) => p.tags))].sort());
	let selectedTags: string[] = $state([]);

	let projectsWithId = $derived(props.projects.map((p, i) => ({ ...p, id: i })));

	let filtered = $derived(
		selectedTags.length === 0
			? projectsWithId
			: projectsWithId.filter((p) => p.tags.some((t) => selectedTags.includes(t)))
	);

	function toggleTag(tag: string) {
		if (selectedTags.includes(tag)) {
			selectedTags = selectedTags.filter((t) => t !== tag);
		} else {
			selectedTags = [...selectedTags, tag];
		}
	}
</script>

<div class="w-[90vw] mx-auto">
	<details class="mb-8">
		<summary class="select-none cursor-pointer text-lg font-semibold">Filter</summary>
		<div class="flex flex-wrap gap-3 mt-3">
			{#each allTags as tag}
				<label class="flex items-center gap-1.5 cursor-pointer">
					<input
						type="checkbox"
						class="checkbox checkbox-sm checkbox-primary"
						checked={selectedTags.includes(tag)}
						onchange={() => toggleTag(tag)}
					/>
					<span class="text-sm">{tag}</span>
				</label>
			{/each}
		</div>
	</details>

	<div class="flex flex-wrap justify-evenly gap-y-16">
		{#each filtered as project (project.id)}
			<div
				class="flex w-80"
				transition:fade={{ duration: 250 }}
				animate:flip={{ duration: 300 }}
			>
				<ProjectCard {project} />
			</div>
		{/each}
	</div>
</div>
