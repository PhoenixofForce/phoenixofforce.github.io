<script>
  import ProjectSidebar from './ProjectSidebar.svelte';

  let title = "LightsOut";
  let links = [
    { name: "itch.io", link: "https://phoenixofforce.itch.io/lights-out"},
    { name: "Ludum Dare", link: "https://ldjam.com/events/ludum-dare/39/lightsout"}
  ];
</script>

<ProjectSidebar { title } { links } > </ProjectSidebar>

<style>
</style>
