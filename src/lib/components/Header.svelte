<script lang="ts">
  import { resolve } from "$app/paths";
  import GooeyNav from "./bits/GooeyNav.svelte";

  let mouseX = $state(250);

  interface Props {
    activeLink?: number;
  }

  let { activeLink = 0 }: Props = $props();
</script>

<div
  class="header w-full max-w-full mb-8 border-b border-solid shadow-md overflow-hidden"
  style="--x: {mouseX}px"
  onmousemove={(m: MouseEvent) => (mouseX = m.x)}
  role="banner"
>
  <nav class="navbar bg-base-200 min-h-0 px-0 py-4">
    <div class="page-width flex items-center justify-between">
      <a
        href={resolve("/")}
        class="text-lg sm:text-xl font-semibold tracking-wider select-none transition-opacity hover:opacity-80"
      >
        <span class="text-base-content">phoenixofforce</span><span class="text-primary">.dev</span>
      </a>

      <div class="flex items-center gap-6 sm:gap-8">
        <GooeyNav
          items={[
            { label: "About", href: "/" },
            { label: "Projects", href: "/projects" },
          ]}
          initialActiveIndex={activeLink}
        />
      </div>
    </div>
  </nav>
</div>

<style>
  .header {
    border-image: linear-gradient(
        to right,
        var(--color-base-100),
        var(--color-secondary),
        var(--color-primary),
        var(--x),
        var(--color-secondary),
        var(--color-base-100)
      )
      1;
  }

  :global([data-theme="phoenix-light"]) .header {
    border-image: linear-gradient(
        to right,
        var(--color-base-300),
        var(--color-primary),
        var(--color-secondary),
        var(--x),
        var(--color-primary),
        var(--color-base-300)
      )
      1;
  }
</style>
