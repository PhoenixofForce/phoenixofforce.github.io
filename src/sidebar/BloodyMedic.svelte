<script>
  import ProjectSidebar from './ProjectSidebar.svelte';

  let title = "Bloody Medic";
  let links = [
    { name: "Github", link: "https://github.com/Nottrex/LudumDare44"},
    { name: "Ludum Dare", link: "https://ldjam.com/events/ludum-dare/44/bloody-medic"}
  ];
</script>

<ProjectSidebar { title } { links } > </ProjectSidebar>

<style>
</style>
