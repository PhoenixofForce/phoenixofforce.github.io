<script>
	import Header from './components/Header.svelte';

	import FrontPage from './pages/frontpage/FrontPage.svelte';
	import ProjectDisplay from './pages/projects/ProjectDisplay.svelte';

	let pages = [ FrontPage, ProjectDisplay ];
	let pageToDisplay = 0;
</script>

<Header activeLink={pageToDisplay} />
<div class="main">
	<svelte:component this={ pages[pageToDisplay] } />
</div>

<style>
	.main {
		width: 90vw;
		margin-left: auto;
	  	margin-right: auto;
	}
</style>
