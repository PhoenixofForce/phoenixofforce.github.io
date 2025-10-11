<script>
  import ImageIcon from "../../components/ImageLink.svelte";

  let width = 315;
  let height = 250;

  export let title = "Working Title";
  export let text = "";
  export let year = "";
  export let image;
  export let tags = [];
  export let link = "";
  export let links = [];

  if (link.length == 0 && links.length > 0) {
    link = links[0].link;
  }
</script>

<div id={title} class="project" style="width:{width}px">
  <a href={link}>
    <div class="image-display" class:no-image={!image}>
      {#if image}
        <img src={"./images/" + image + ".png"} alt="Screenshot" />
      {/if}
    </div>

    <div class="content">
      <div class="title">
        <b> {title} </b>
        {#if year}
          <span class="year"> {year} </span>
        {/if}
      </div>

      <div class="textholder">
        {text}
      </div>

      <div>
        {#each links as link}
          <ImageIcon
            link={link.link}
            imgLink={"https://icongr.am/" + link.icon + ".svg?size=24"}
            title={link.alt}
          />
        {/each}
      </div>

      <div class="bottom">
        <hr />

        <div class="tags">
          {#each tags.sort() as tag}
            <span class="tag is-small"> {tag} </span>
          {/each}
        </div>
      </div>
    </div>
  </a>
</div>

<style>
  .project {
    background: linear-gradient(
      329deg,
      var(--bg-color) 20%,
      var(--color-secondary) 200%
    );
    box-shadow: 5px 5px 22px -8px #070707;
    border-radius: 20px;
    height: 100%;
  }

  .project:hover {
    box-shadow: 5px 5px 22px -2px #070707;
    border-radius: 20px;
    transform: scale(1.05);
  }

  .content {
    padding-left: 18px;
    padding-right: 18px;
    padding-bottom: 18px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .bottom {
    margin-top: auto;
  }

  .tags {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
  }

  .tags .tag {
    margin-left: 0;
  }

  .textholder {
    color: var(--color-grey);
    font-size: calc(var(--font-size) * 0.9);
    margin-bottom: 12px;
  }

  .year {
    color: var(--color-lightGrey);
    font-size: calc(var(--font-size) * 0.8);
    margin-left: 4px;
  }

  b {
    font-size: calc(var(--font-size) * 1.5);
  }

  a {
    margin-bottom: 0px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .image-display {
    width: 100%;
    height: 240px;
    border-radius: 18px;
    margin-bottom: 12px;
    overflow: hidden;
  }

  .image-display img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .no-image {
    background: var(--bg-secondary-color);
  }
</style>
