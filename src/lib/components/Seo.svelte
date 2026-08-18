<script lang="ts">
  import { page } from "$app/state";

  const SITE = "https://phoenixofforce.dev";
  const SITE_NAME = "phoenixofforce.dev";
  const IMAGE = `${SITE}/images/seo_logo.png`;

  let { title, description }: {
                                  title: string;
                                  description: string;
                                } = $props();

  const canonical = $derived(SITE + page.url.pathname);
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={SITE_NAME} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={IMAGE} />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:creator" content="@PhoenixofForce" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={IMAGE} />
</svelte:head>