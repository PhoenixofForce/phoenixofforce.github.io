<script>
    import ProjectGroup from "../projects/ProjectGroup.svelte";
    import Summary from "./Summary.svelte";
    import Biography from "./Biography.svelte";
    import TechStack from "./TechStack.svelte";
</script>

<div class="main">
    <h1>HELLO THERE 👋</h1>
</div>

<div class="content-holder">
    <div class="main">
        <Summary />
        <Biography />
        <TechStack />
    </div>
</div>

<div class="newest-projects">
    <h1 class="is-center">MY LATEST PROJECTS</h1>
    <ProjectGroup projectCountToDisplay="4" />
</div>

<style>
    h1 {
        margin-top: 48px;
        margin-bottom: 8px;
        white-space: nowrap;
        letter-spacing: 0.1em;
    }

    .content-holder {
        background-color: var(--color-secondary);
        margin-bottom: 48px;
    }

    .content-holder .main {
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        justify-content: space-evenly;
        gap: 16px;
    }

    h2 {
        margin-top: 12px;
        margin-bottom: 32px;
    }

    @media screen and (max-width: 750px) {
        h1 {
            text-align: center;
        }

        .main {
            flex-direction: column;
            align-items: center;
        }
    }
</style>
