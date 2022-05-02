<script>
  import ProjectSidebar from './ProjectSidebar.svelte';

  let title = "Dont Sleep";
  let links = [
    { name: "Github", link: "https://github.com/PhoenixofForce/Ludum_Dare_50"},
    { name: "Ludum Dare", link: "https://ldjam.com/events/ludum-dare/50/dont-sleep"}
  ];
</script>

<ProjectSidebar { title } { links } > </ProjectSidebar>

<style>
</style>
