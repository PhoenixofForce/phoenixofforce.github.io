<script>
  export let allItems = [];
  export let selectedItems = []

  allItems = allItems.filter(onlyUnique).sort();


  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
</script>
    
<!-- The Filter -->
{#each allItems as item}
  <span class="filter-label">
    <label>
      <input type=checkbox bind:group={ selectedItems } name="items" value={ item }>
      { item }
    </label>
  </span>
{/each}

<style>
  .filter-label {
    margin-right: 12px;
  }
</style>
  