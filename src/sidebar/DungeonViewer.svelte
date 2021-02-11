<script>
  import ProjectSidebar from './ProjectSidebar.svelte';

  let title = "Dungeon Viewer";
  let links = [
    { name: "Github", link: "https://github.com/PhoenixofForce/Dungeon_Viewer"},
    { name: "Github Pages", link: "https://phoenixofforce.github.io/Dungeon_Viewer/"}
  ];
</script>

<ProjectSidebar { title } { links } > </ProjectSidebar>

<style>
</style>
