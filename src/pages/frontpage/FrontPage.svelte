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
<div class="main contact-section">
    <a href="mailto:contact@phoenixofforce.dev" class="contact-button">
        Contact Me
    </a>
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
        margin-bottom: 32px;
    }

    .content-holder .main {
        padding-top: 20px;
        padding-bottom: 32px;
        display: flex;
        justify-content: space-evenly;
        gap: 16px;
    }

    .contact-section {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding-bottom: 20px;
    }

    .contact-button {
        background-color: var(--color-primary);
        color: var(--bg-color);
        padding: 12px 32px;
        border-radius: 8px;
        font-weight: 600;
        font-size: 1.1rem;
        transition:
            transform 0.2s,
            box-shadow 0.2s;
        letter-spacing: 0.05em;
    }

    .contact-button:hover {
        opacity: 1;
        transform: scale(1.15);
        box-shadow: 0 4px 12px rgba(68, 211, 255, 0.3);
    }

    @media screen and (max-width: 750px) {
        h1 {
            text-align: center;
        }

        .main {
            flex-direction: column;
            align-items: center;
        }

        .content-holder {
            background: linear-gradient(
                180deg,
                transparent 85px,
                var(--color-secondary) 85px
            );
        }
    }
</style>
