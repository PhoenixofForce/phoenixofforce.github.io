<script lang="ts">
  import { Sun, Moon } from "@lucide/svelte";

  let mounted = $state(false);
  let isDark = $state(true);

  $effect(() => {
    isDark = localStorage.getItem("theme") !== "phoenix-light";
    mounted = true;
  });

  function toggle() {
    isDark = !isDark;
    const theme = isDark ? "phoenix" : "phoenix-light";
    localStorage.setItem("theme", theme);
    document.documentElement.classList.add("no-transitions");
    document.documentElement.setAttribute("data-theme", theme);
    requestAnimationFrame(() => {
      document.documentElement.classList.remove("no-transitions");
    });
  }
</script>

<div
  class="sticky bottom-4 mt-auto mb-4 w-fit ml-auto pin-right z-50 opacity-50 transition-all duration-300 will-change-transform hover:scale-110 hover:opacity-100"
>
  {#if mounted}
    <label class="swap swap-rotate">
      <input type="checkbox" checked={isDark} onchange={toggle} />
      <Sun class="swap-off" size="24" />
      <Moon class="swap-on" size="24" />
    </label>
  {/if}
</div>