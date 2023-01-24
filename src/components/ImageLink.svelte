<script>
  export let link;
  export let imgLink;

  export let title = "";
  export let showTitle = false;

  let curColor = "FAFAFA";
  function hover() {
    curColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim().substring(1);
  }

  function deHover() {
    curColor = getComputedStyle(document.documentElement).getPropertyValue('--font-color').trim().substring(1);
  }
</script>

<a href={ link }
  class="button icon-only clear hide-pr image-link"
  title={ title } 
  on:mouseover={ hover } 
  on:mouseout={ deHover }
>
  
 <img src={ imgLink + "&color=" + curColor } alt={"link to " + link}>
  {#if showTitle}
    <span style="color: #{ curColor };"> { title } </span>
  {/if}
</a>

<style>
  span {
    margin-left: 8px;
  }

	.image-link {
			padding-right: 8px;
			margin: 0px;
	}
</style>
