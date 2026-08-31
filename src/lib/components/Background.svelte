<script lang="ts">
  import { onMount } from "svelte";
  import Grainient from "./bits/Grainient.svelte";

  type Rgb = [number, number, number];
  type Palette = [string, string, string];

  // Dialled in by hand — see Grainient.svelte for the full prop list.
  const SPEED = 0.25;
  const OPACITY = 0.5;
  const HIGHLIGHT = 0.45;
  const GRAIN_AMOUNT = 0.1;
  const GRAIN_SCALE = 2;
  const WARP_STRENGTH = 1;
  const BLEND_SOFTNESS = 0.05;
  const CONTRAST = 1.5;
  const SATURATION = 1;
  const ZOOM = 0.7;

  let reduceMotion = $state(false);
  let colors = $state<Palette>(["#ffffff", "#ffffff", "#ffffff"]);

  function readThemeRgb(variable: string): Rgb {
    const value = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
    if (!value) return [128, 128, 128];

    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return [128, 128, 128];

    ctx.fillStyle = "#808080";
    ctx.fillStyle = value; // stays at the fallback if the browser can't parse it
    ctx.fillRect(0, 0, 1, 1);

    return [...ctx.getImageData(0, 0, 1, 1).data.slice(0, 3)] as Rgb;
  }

  function mixRgb(a: Rgb, b: Rgb, amount: number): Rgb {
    return a.map((channel, i) => Math.round(channel + (b[i] - channel) * amount)) as Rgb;
  }

  function toHex([r, g, b]: Rgb): string {
    return "#" + [r, g, b].map((c) => c.toString(16).padStart(2, "0")).join("");
  }

  function syncThemeColors() {
    const background = readThemeRgb("--color-base-100");

    colors = [
      toHex(mixRgb(readThemeRgb("--color-primary"), background, HIGHLIGHT)),
      toHex(readThemeRgb("--color-secondary")),
      toHex(readThemeRgb("--color-base-300")),
    ];
  }

  onMount(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotion = motion.matches;
    const onMotionChange = (event: MediaQueryListEvent) => (reduceMotion = event.matches);
    motion.addEventListener("change", onMotionChange);

    syncThemeColors();

    const observer = new MutationObserver(syncThemeColors);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      motion.removeEventListener("change", onMotionChange);
      observer.disconnect();
    };
  });
</script>

<div class="backdrop" aria-hidden="true" style="--backdrop-opacity: {OPACITY}">
  <Grainient
    color1={colors[0]}
    color2={colors[1]}
    color3={colors[2]}
    timeSpeed={reduceMotion ? 0 : SPEED}
    grainAnimated={!reduceMotion}
    grainAmount={GRAIN_AMOUNT}
    grainScale={GRAIN_SCALE}
    warpStrength={WARP_STRENGTH}
    blendSoftness={BLEND_SOFTNESS}
    contrast={CONTRAST}
    saturation={SATURATION}
    zoom={ZOOM}
  />
</div>

<style>
  .backdrop {
    position: fixed;
    inset: 0;
    z-index: -10;
    overflow: hidden;
    pointer-events: none;
    opacity: var(--backdrop-opacity, 1);
  }
</style>
