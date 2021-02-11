<script>
  import ProjectSidebar from './ProjectSidebar.svelte';

  let title = "Tank My Bug";
  let links = [
    { name: "GitHub", link: "https://github.com/PhoenixofForce/Kenney_Jam_1"},
    { name: "itch.io", link: "https://phoenixofforce.itch.io/tankmybug"},
    { name: "itch.io Submission", link: "https://itch.io/jam/kenney-jam-2017/rate/171070"}
  ];
</script>

<ProjectSidebar { title } { links } > </ProjectSidebar>

<style>
</style>
