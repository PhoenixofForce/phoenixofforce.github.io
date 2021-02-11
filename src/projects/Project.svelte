<script>
  import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

  let width = 315;
  let height = 250;

  export let title = "Working Title";
  export let text = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam n";
  export let year = "";
  export let image;
  export let tags = [];
  export let link = "";
  export let mod;

  function clickLink(e) {
    console.log(e.button);
    if(!link && mod) {
      dispatch('sidebar', {
  			title: title
  		});
    }
  }
</script>

<div id={title} style="width:{width}px">
  <div class="image-display" style="width:{width}px; height:{height}px; overflow: hidden;">
    {#if image}
        <img src={"./images/" + image + ".png"} style="display: block; max-width: {width}px; max-height: {height}px; width: auto; height: auto;" alt="Screenshot" >
      {/if}
  </div>

  <div class="title">
    <a href={ link? link: "javascript:void(0);" } on:click={ clickLink }> <b> { title } </b> </a>
    {#if year}
      <span class="year"> { year } </span>
    {/if}
  </div>

  <div class="textholder">
    {text}
  </div>
  <div>
    {#each tags.sort() as tag}
      <span class="tag is-small"> { tag } </span>
    {/each}
  </div>
</div>

<style>
  .textholder {
    color: var(--color-grey);
    margin-bottom: 8px;
  }

  .year {
    color: var(--color-lightGrey);
    font-size: calc(var(--font-size) * 0.75);
  }

  b {
    font-size: calc(var(--font-size) * 1.25);
  }

  a {
    margin-bottom: 0px;
  }

  .image-display {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-display img {
    border-radius: 20px;
    border: 4px solid var(--bg-secondary-color);
  }
</style>
