<div class="tech-stack">
    <h3>Tech Stack</h3>
    <div class="tech-category">
        <h4>Backend</h4>
        <div class="tech-tags">
            <span class="tag is-small">Java</span>
            <span class="tag is-small">Spring</span>
            <span class="tag is-small">Node.js</span>
            <span class="tag is-small">Maven</span>
        </div>
    </div>
    <div class="tech-category">
        <h4>Frontend</h4>
        <div class="tech-tags">
            <span class="tag is-small">HTML/CSS</span>
            <span class="tag is-small">Svelte</span>
            <span class="tag is-small">Angular</span>
            <span class="tag is-small">TypeScript</span>
            <span class="tag is-small">JavaScript</span>
            <span class="tag is-small">SQL</span>
        </div>
    </div>
    <div class="tech-category">
        <h4>Game Dev</h4>
        <div class="tech-tags">
            <span class="tag is-small">C++</span>
            <span class="tag is-small">OpenGL</span>
            <span class="tag is-small">LWJGL</span>
            <span class="tag is-small">RayLib</span>
            <span class="tag is-small">SDL2</span>
        </div>
    </div>
    <div class="tech-category">
        <h4>Tools</h4>
        <div class="tech-tags">
            <span class="tag is-small">Git</span>
            <span class="tag is-small">Docker</span>
            <span class="tag is-small">Postman</span>
        </div>
    </div>
</div>

<style>
    .tech-stack {
        min-width: 220px;
        margin-left: 32px;
    }

    .tech-stack h3 {
        color: var(--color-primary);
        margin-top: 0;
        margin-bottom: 16px;
        font-size: 1.4rem;
    }

    .tech-category {
        margin-bottom: 16px;
    }

    .tech-category:last-child {
        margin-bottom: 0;
    }

    .tech-category h4 {
        color: var(--font-color);
        font-size: 1rem;
        margin: 0 0 6px 0;
        font-weight: 600;
    }

    .tech-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
    }

    .tech-tags .tag {
        background-color: var(--bg-secondary-color);
        margin: 0;
    }

    @media screen and (max-width: 750px) {
        .tech-stack {
            margin-left: 0;
            margin-top: 24px;
            width: 100%;
        }

        .tech-stack h3,
        h4 {
            text-align: center;
        }

        .tech-tags {
            justify-content: center;
        }
    }
</style>
