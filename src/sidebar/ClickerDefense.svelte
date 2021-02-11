<script>
  import ProjectSidebar from './ProjectSidebar.svelte';

  let title = "Clicker Defense";
  let links = [
    { name: "Github", link: "https://github.com/PhoenixofForce/LudumDare41"},
    { name: "Ludum Dare", link: "https://ldjam.com/events/ludum-dare/41/clickerdefense"}
  ];
</script>

<ProjectSidebar { title } { links } > </ProjectSidebar>

<style>
</style>
