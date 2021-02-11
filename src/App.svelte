<script>
	import ProjectDisplay from './projects/ProjectDisplay.svelte';
	import ImageLink from './components/ImageLink.svelte'
</script>

<nav class="nav">
  <div class="nav-left">
    <a class="brand noselect" href="javascript:void(0);"> PhoenixofForce </a>
	</div>

	<div class="nav-right">
		<ImageLink link="https://twitter.com/PhoenixofForce" imgLink="https://icongr.am/simple/twitter.svg?size=20" />
		<ImageLink link="https://github.com/PhoenixofForce/" imgLink="https://icongr.am/simple/github.svg?size=20" />
	</div >
</nav>

<div class="main">
	<ProjectDisplay />
</div>

<style>
	.main {
		width: 90%;
		margin-left: auto;
	  margin-right: auto;
	}

	.nav {
		background: var(--bg-secondary-color);
		margin-bottom: 32px;
		border-bottom: 1px solid var(--color-primary);
	}

	.nav-right {
		margin-right: 12px;
	}
</style>
