<script lang="ts">
  import { resolve } from "$app/paths";

  let mouseX = $state(250);

  interface Props {
    activeLink?: number;
  }

  let { activeLink = 0 }: Props = $props();

  const navBase =
    "relative py-1 text-sm font-medium tracking-wide transition-colors duration-200 " +
    "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[2px] " +
    "after:bg-primary after:origin-left after:transition-transform after:duration-300";
  const navActive = "text-primary after:scale-x-100";
  const navIdle =
    "text-base-content/55 hover:text-base-content after:scale-x-0 hover:after:scale-x-100";
</script>

<div
  class="header w-full mb-8 border-b border-solid shadow-md"
  style="--x: {mouseX}px"
  onmousemove={(m: MouseEvent) => (mouseX = m.x)}
  role="banner"
>
  <nav class="navbar bg-base-200 min-h-0 px-0 py-4">
    <div class="w-[90vw] max-w-6xl mx-auto flex items-center justify-between">
      <a
        href={resolve("/")}
        class="text-lg sm:text-xl font-semibold tracking-wider select-none transition-opacity hover:opacity-80"
      >
        <span class="text-base-content">phoenixofforce</span><span class="text-primary">.dev</span>
      </a>

      <div class="flex items-center gap-6 sm:gap-8">
        <a
          href={resolve("/")}
          aria-current={activeLink === 0 ? "page" : undefined}
          class={[navBase, activeLink === 0 ? navActive : navIdle]}
        >
          About
        </a>
        <a
          href={resolve("/projects")}
          aria-current={activeLink === 1 ? "page" : undefined}
          class={[navBase, activeLink === 1 ? navActive : navIdle]}
        >
          Projects
        </a>
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