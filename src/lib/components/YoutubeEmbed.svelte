<script lang="ts">
  import { Play } from "@lucide/svelte";
  import type { Picture } from "@sveltejs/enhanced-img";

  interface Props {
    src: string;
    poster: Picture | undefined;
    title: string;
  }

  let { src, poster, title }: Props = $props();

  let started = $state(false);
</script>

{#if started}
  <iframe
    src={`${src}?autoplay=1`}
    {title}
    class="w-full h-full border-0"
    allow="autoplay; encrypted-media; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
{:else}
  <button
    class="group relative block w-full h-full cursor-pointer [&>picture]:block [&>picture]:size-full"
    onclick={() => (started = true)}
    aria-label={`Play ${title}`}
  >
    {#if poster}
      <enhanced:img src={poster} sizes="640px" alt="" class="block w-full h-full object-cover" />
    {/if}
    <span
      class="absolute inset-0 grid place-items-center bg-black/30 transition-colors group-hover:bg-black/50"
    >
      <span class="btn btn-circle btn-lg btn-primary pointer-events-none">
        <Play size={28} fill="currentColor" class="translate-x-0.5" />
      </span>
    </span>
  </button>
{/if}
