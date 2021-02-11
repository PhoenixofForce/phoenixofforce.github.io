<script>
  import {clickOutside} from '../clickOutside.js';
  import { fly } from 'svelte/transition';

  export let show = false;

  let fontColor = getComputedStyle(document.documentElement).getPropertyValue('--font-color') + "";
  fontColor = fontColor.substring(2);

  function close() {
    show = false;
    window.history.pushState({}, "Home", "/");
  }
</script>

{#if show}
<div use:clickOutside on:click_outside={ close }>
  <nav >
    <div class="flex">
      <a href="javascript:void(0);" on:click={ () => { show = false; } } >
        <img src="https://icongr.am/feather/x.svg?size=16&color={fontColor}" alt="Close">
      </a>
    </div>

    <slot> </slot>
  </nav>
</div>
{/if}

<style>
  nav {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    padding: 2rem 1rem 0.6rem;
    min-width: 300px;
    width: 20%;
    border-left: 1px solid var(--color-primary);
    background: var(--bg-secondary-color);
    overflow-y: auto;
    z-index: 7;
  }

  .flex {
    display: flex;
    justify-content: flex-end;
    padding-right: 16px;
  }
</style>
