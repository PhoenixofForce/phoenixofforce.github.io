<script>
  import Links from '../components/Links.svelte';

  export let links;
  export let title;
</script>


<b> { title } </b><br>
<Links {links} />

<div class="content">
  <slot></slot>
</div>

<style>
  b {
    color: var(--font-color);
    font-size: calc(var(--font-size) * 1.25);
  }

  .content {
    margin-left: 22px;
  }
</style>
