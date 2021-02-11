<script>
  import ProjectSidebar from './ProjectSidebar.svelte';

  let title = "Dungeon Creator";
  let links = [
    { name: "Github", link: "https://github.com/PhoenixofForce/DungeonCreator"},
    { name: "Github Pages", link: "https://phoenixofforce.github.io/DungeonCreator/"}
  ];
</script>

<ProjectSidebar { title } { links } > </ProjectSidebar>

<style>
</style>
