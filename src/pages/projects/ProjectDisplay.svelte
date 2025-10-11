<script>
  import ProjectGroup from "./ProjectGroup.svelte";
  import Filter from "../../components/CheckBoxFilter.svelte";

  let allTags = allMyProjects.map((e) => e.tags);
  allTags = [].concat.apply([], allTags);

  let selectedTags = [];
</script>

<div>
  <div class="filter hide-pr main">
    <details>
      <summary class="noselect"> Filter </summary>
      <Filter allItems={allTags} bind:selectedItems={selectedTags} />
    </details>
  </div>

  <ProjectGroup bind:selectedTags />
</div>

<style>
  .filter {
    margin-bottom: 32px;
  }
</style>
