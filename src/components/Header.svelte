<script>
    export let activeLink = 0;
    let mouseX = 250;
</script>

<!-- Tracking mouse position for gradient position -->
<div
    class="header"
    style="--x: {mouseX + 'px'}"
    on:mousemove={(m) => (mouseX = m.x)}
>
    <nav class="nav">
        <div class="nav-left">
            <a class="brand noselect" href="/"> PhoenixofForce </a>
        </div>

        <div class="nav-right">
            <a href="/" class:active={activeLink == 0}> About </a>
            <a href="projects" class:active={activeLink == 1}> Projects </a>
        </div>
    </nav>
</div>

<style>
    .brand {
        background: linear-gradient(135deg, var(--color-primary), white);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .header {
        width: 100%;
        margin-bottom: 32px;
        border-width: 0px;
        border-bottom: 1px;
        border-style: solid;
        border-image: linear-gradient(
                to right,
                var(--bg-color),
                var(--color-secondary),
                var(--color-primary),
                var(--x),
                var(--color-secondary),
                var(--bg-color)
            )
            1;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    }
    .nav {
        background: var(--bg-secondary-color);
    }

    @media screen and (min-width: 481px) {
        nav {
            height: 60px;
        }
    }

    @media screen and (max-width: 480px) {
        nav {
            height: 120px;
        }
    }

    .nav-right {
        margin-right: 24px;
    }
</style>
