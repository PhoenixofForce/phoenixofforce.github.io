<script lang="ts">
	import { resolve } from "$app/paths";

	let mouseX = $state(250);

	interface Props {
		activeLink?: number;
	}

	let { activeLink = 0 }: Props = $props();
</script>

<div
	class="header w-full mb-8 border-b border-solid shadow-md"
	style="--x: {mouseX}px"
	onmousemove={(m: MouseEvent) => (mouseX = m.x)}
	role="banner"
>
	<nav class="navbar bg-base-200 px-4 md:px-6">
		<div class="navbar-start">
			<a class="text-primary text-xl font-bold select-none" href={resolve("/")}>PhoenixofForce</a>
		</div>
		<div class="navbar-end gap-2">
			<a href={resolve("/")} class="btn btn-sm" class:btn-secondary={activeLink === 0} class:btn-ghost={activeLink !== 0}>About</a>
			<a href={resolve("/projects")} class="btn btn-sm" class:btn-secondary={activeLink === 1} class:btn-ghost={activeLink !== 1}>Projects</a>
		</div>
	</nav>
</div>

<style>
	.header {
		border-image: linear-gradient(
				to right,
				var(--color-base-100),
				var(--color-secondary),
				var(--color-primary),
				var(--x),
				var(--color-secondary),
				var(--color-base-100)
			)
			1;
	}

	:global([data-theme="phoenix-light"]) .header {
		border-image: linear-gradient(
				to right,
				var(--color-base-300),
				var(--color-primary),
				var(--color-secondary),
				var(--x),
				var(--color-primary),
				var(--color-base-300)
			)
			1;
	}
</style>
