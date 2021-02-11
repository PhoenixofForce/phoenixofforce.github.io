<script>

  export let links;

</script>

<ul>
{#each links as link}
  <li>
    <a href={link.link}> { link.name } </a>
  </li>
{/each}
</ul>
