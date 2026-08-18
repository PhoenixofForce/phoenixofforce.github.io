<script lang="ts">
  import ProjectFilter from "$lib/components/ProjectFilter.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import { projects } from "$lib/projects";
</script>

<Seo
  title="Projects | Ole"
  description="Games, tools and web apps — from GameJam entries and rendering experiments to full web applications."
/>

<ProjectFilter {projects} />