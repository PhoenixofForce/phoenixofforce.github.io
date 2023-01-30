<script>
  import { fade, slide } from 'svelte/transition';
  import { flip } from 'svelte/animate';

  import Project from './SingleProject.svelte';

  export let projectCountToDisplay = 0;
  export let selectedTags = []

  for(let i = 0; i < allMyProjects.length; i++) allMyProjects[i].id = i;

  if(projectCountToDisplay == 0) projectCountToDisplay = allMyProjects.length;
  let shownProjects = [];
  filter();

  $: { selectedTags; filter(); }
  function filter() {
    shownProjects = allMyProjects.slice(0, projectCountToDisplay);
    shownProjects = shownProjects.filter(project => selectedTags == 0 || project.tags.some(e => selectedTags.includes(e)));
  }
</script>

<div>
  <!-- Listing Projects -->
  <div class="flex">
    {#each shownProjects as project (project.id)}
        <div class="project-holder" transition:fade="{{duration: 250}}" animate:flip="{{duration: 300}}"> <Project { ...project } /> </div>
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
