<script>
  import ProjectSidebar from './ProjectSidebar.svelte';

  let title = "My Lamp";
  let links = [
    { name: "Github", link: "https://github.com/PhoenixofForce/GMTK_Jam"},
    { name: "itch.io", link: "https://phoenixofforce.itch.io/my-lamp"},
    { name: "itch.io Submission", link: "https://itch.io/jam/gmtk-jam/rate/159061"}
  ];
</script>

<ProjectSidebar { title } { links } > </ProjectSidebar>

<style>
</style>
