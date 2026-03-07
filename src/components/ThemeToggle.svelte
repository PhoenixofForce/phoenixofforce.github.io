<script lang="ts">
  import { Sun, Moon } from "@lucide/svelte";

  const browser = typeof window !== "undefined";
  let isDark = $state(
    browser ? localStorage.getItem("theme") !== "phoenix-light" : true,
  );

  if (browser) {
    const saved = localStorage.getItem("theme");
    if (saved) {
      document.documentElement.setAttribute("data-theme", saved);
    }
  }

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

{#if browser}
  <div
    class="sticky bottom-4 mb-4 w-fit ml-auto mr-4 z-50 opacity-50 transition-all duration-300 will-change-transform hover:scale-110 hover:opacity-100"
  >
    <label class="swap swap-rotate">
      <input type="checkbox" checked={isDark} onchange={toggle} />
      <Sun class="swap-off" size="24" />
      <Moon class="swap-on" size="24" />
    </label>
  </div>
{/if}
