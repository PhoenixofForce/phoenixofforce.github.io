<script lang="ts">
  import ProjectFilter from "$lib/components/ProjectFilter.svelte";
  import { projects } from "$lib/projects";
</script>

<svelte:head>
  <title>Projects | Ole</title>
</svelte:head>

<ProjectFilter {projects} />