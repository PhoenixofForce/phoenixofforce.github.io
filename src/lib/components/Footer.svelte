<script lang="ts">
  import { Github, Mail, Twitter } from "@lucide/svelte";

  const year = new Date().getFullYear();
</script>

<footer class="bg-neutral text-neutral-content">
  <div class="footer sm:footer-horizontal page-width items-center py-4">
    <aside class="grid-flow-col items-center">
      <p class="text-xs">Copyright © {year} - All right reserved</p>
    </aside>
    <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a
        href="https://twitter.com/PhoenixofForce"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-ghost btn-sm btn-circle text-neutral-content hover:scale-115 transition-transform"
        aria-label="Twitter"
      >
        <Twitter size={16} />
      </a>
      <a
        href="https://github.com/PhoenixofForce/"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-ghost btn-sm btn-circle text-neutral-content hover:scale-115 transition-transform"
        aria-label="GitHub"
      >
        <Github size={16} />
      </a>
      <a
        href="mailto:contact@phoenixofforce.dev"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-ghost btn-sm btn-circle text-neutral-content hover:scale-115 transition-transform"
        aria-label="Mail"
      >
        <Mail size={16} />
      </a>
    </nav>
  </div>
</footer>