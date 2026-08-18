<script lang="ts">
  import "../app.css";
  import { page } from "$app/state";
  import Header from "$lib/components/Header.svelte";
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let { children } = $props();

  let activeLink = $derived(page.url.pathname.startsWith("/projects") ? 1 : 0);
</script>

<Header {activeLink} />
{@render children()}
<ThemeToggle />
<Footer />