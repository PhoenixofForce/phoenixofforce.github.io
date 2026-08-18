<script lang="ts">
  import { Github, Twitter } from "@lucide/svelte";
</script>

<div class="flex flex-col items-center max-w-sm text-center">
  <div class="w-24 h-24 rounded-full bg-base-100 shadow-lg">
    <img src="/images/white.png" alt="Avatar" class="avatar w-24 h-24 rounded-full" />
  </div>

  <div class="flex gap-4 mt-2 mb-3">
    <a
      href="https://twitter.com/PhoenixofForce"
      target="_blank"
      rel="noopener noreferrer"
      class="btn btn-ghost btn-sm btn-circle hover:scale-115 transition-transform"
      aria-label="Twitter"
    >
      <Twitter size={20} />
    </a>
    <a
      href="https://github.com/PhoenixofForce/"
      target="_blank"
      rel="noopener noreferrer"
      class="btn btn-ghost btn-sm btn-circle hover:scale-115 transition-transform"
      aria-label="GitHub"
    >
      <Github size={20} />
    </a>
  </div>

  <div class="mb-5">
    <h3 class="text-primary text-xl font-semibold mb-2">About me</h3>
    <p>
      Hey, I'm Ole from Germany. I'm a software developer with a passion for game development,
      competitive programming, and building cool stuff on the web.
    </p>
  </div>
</div>

<style>
  :global([data-theme="phoenix-light"]) .avatar {
    filter: invert(1);
  }
</style>