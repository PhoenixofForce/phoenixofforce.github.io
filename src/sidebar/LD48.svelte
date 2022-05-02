<script>
  import ProjectSidebar from './ProjectSidebar.svelte';

  let title = "Chrono Jump";
  let links = [
    { name: "Github", link: "https://github.com/PhoenixofForce/Ludum_Dare_48"},
    { name: "Ludum Dare", link: "https://ldjam.com/events/ludum-dare/48/chronojump"}
  ];
</script>

<ProjectSidebar { title } { links } > </ProjectSidebar>

<style>
</style>
