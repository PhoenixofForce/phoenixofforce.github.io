<script>
  import ImageIcon from '../../components/ImageLink.svelte';

  let width = 315;
  let height = 250;
  let mouseEntered = false;

  export let title = "Working Title";
  export let text = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam n";
  export let year = "";
  export let image;
  export let tags = [];
  export let link = "";
  export let links = [];

  if(link.length == 0 && links.length > 0) {
    link = links[0].link;
  }
</script>

<div id={title} style="width:{width}px">

  <!-- 
    The Image of the project as a link
    The Color of the border changes as the mouse enters/ leaves the image
  
  -->
  <a href={ link }>
    <div 
      class="image-display" class:no-image="{!image}"
      style="width:{width}px; height:{height}px; 
      overflow: hidden;
      --border-color: { mouseEntered? "var(--color-primary)": "var(--bg-secondary-color)" }
      "
      on:mouseenter={ e => mouseEntered = true }
      on:mouseleave={ e=> mouseEntered = false }
    >
      
      {#if image}
          <img src={"./images/" + image + ".png"} style="display: block; max-width: {width}px; max-height: {height}px; width: auto; height: auto;" alt="Screenshot" >
      {/if}
    </div>
  </a>

  <div class="title">
    <a href={ link? link: "javascript:void(0);" }> <b> { title } </b> </a>
    {#if year}
      <span class="year"> { year } </span>
    {/if}
  </div>

  <div class="textholder">
    { text }
  </div>
  
  <div>
    {#each tags.sort() as tag}
      <span class="tag is-small"> { tag } </span>
    {/each}
  </div>

  <div>
    {#each links as link} 
      <ImageIcon link={link.link} imgLink={"https://icongr.am/" + link.icon + ".svg?size=20"} title={link.alt} />
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

  .no-image {
    border-radius: 20px;
    border: 4px solid var(--border-color);
  }

  .image-display img {
    border-radius: 20px;
    border: 4px solid var(--border-color);
  }
</style>
