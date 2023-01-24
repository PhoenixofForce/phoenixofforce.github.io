<script>
    let mouseX = 250;
</script>

<!-- Tracking mouse position for gradient position -->
<div class="header" style="--x: { mouseX + "px" }" on:mousemove={ m => mouseX = m.x }> 

    <nav class="nav">
        <div class="nav-left">
          <a class="brand noselect" href="/"> PhoenixofForce </a>
          </div>
      
          <div class="nav-right">        
                <a href="/" class="active"> About </a>
                <a href="projects"> Projects </a>
          </div >
      </nav>
</div>

<style>
    .header {
        width: 100%;
        margin-bottom: 32px;
        border-width: 0px;
        border-bottom: 3px;
        border-style: solid;
        border-image: linear-gradient(
                to right, 
                var(--bg-color),
                var(--color-secondary), 
                var(--color-primary), var(--x),
                var(--color-secondary),
                var(--bg-color)
            ) 1;
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
            height: 120px;;
        }
    }

	.nav-right {
		margin-right: 24px;
	}
</style>
