<script lang="ts">
  interface Props {
    src: string;
  }

  let { src }: Props = $props();

  const show =
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let playing = $state(false);
</script>

{#if show}
  <video
    {src}
    autoplay
    loop
    muted
    playsinline
    aria-hidden="true"
    tabindex="-1"
    onplaying={() => (playing = true)}
    class={[
      "absolute inset-0 w-full h-full object-cover transition-opacity duration-300",
      playing ? "opacity-100" : "opacity-0",
    ]}
  ></video>
{/if}
