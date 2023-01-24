<script>
  import Project from './SingleProject.svelte';
  import { projects } from './projectList';

  export let projectCountToDisplay = 0;
  export let selectedTags = []

  if(projectCountToDisplay == 0) projectCountToDisplay = projects.length;
</script>

<div>
  <!-- Listing Projects -->
  <div class="flex">
    {#each projects as project, i}
      {#if i < projectCountToDisplay && (selectedTags == 0 || project.tags.some(e => selectedTags.includes(e)))}
        <div class="project-holder"> <Project { ...project } /> </div>
      {/if}
    {/each}
  </div>
</div>

<style>
  .flex {
    display: flex;
		align-items: start;
		flex-wrap: wrap;
		justify-content: space-evenly;
  }

  .project-holder {
    margin-left: 32px;
    margin-bottom: 32px;
  }
</style>
