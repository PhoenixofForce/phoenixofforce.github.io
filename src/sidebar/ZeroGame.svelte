<script>
  import ProjectSidebar from './ProjectSidebar.svelte';

  let title = "0 Hour Game";
  let links = [
    { name: "Github", link: "https://github.com/PhoenixofForce/0HGameJam"},
    { name: "0h Game Jam Page", link: "http://0hgame.eu/games.php?year=2020"}
  ];
</script>

<ProjectSidebar { title } { links } > </ProjectSidebar>

<style>
</style>
