<script>
	import Header from './components/Header.svelte';

	import FrontPage from './pages/frontpage/FrontPage.svelte';
	import ProjectDisplay from './pages/projects/ProjectDisplay.svelte';

	let pageToDisplay = FrontPage;
</script>

<Header />
<div class="main">
	<svelte:component this={ pageToDisplay } />
</div>

<style>
	.main {
		width: 90vw;
		margin-left: auto;
	  	margin-right: auto;
	}
</style>
