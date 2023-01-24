<script>
    import { onMount } from 'svelte';
    import textFit from '../../../public/textFit';
    import ImageLink from '../../components/ImageLink.svelte';
    import ProjectGroup from "../projects/ProjectGroup.svelte";

    let content;
    let header;

    onMount(() => {		
		window.addEventListener('resize', resize);
        resize();

		return () => {
			window.removeEventListener('resize', resize);
		}
	});

    function resize() {
        if(content) textFit(content, {maxFontSize: 18, alignVertWithFlexbox: true})
        if(header) textFit(header);
    }
</script>

<div class="image-banner">
    <div class="image-holder">
        <img src="images/white.png" alt="">
    </div>
    
    <div class="greetings">
        <h1 bind:this={ header } style="width: calc(100% - 450px); min-width: 250px;"> 
            HI THERE (^._.^)⁠ﾉ
        </h1>
    </div>
    
    <div class="content-holder" >
        <div class="links">
            <ImageLink link="https://twitter.com/PhoenixofForce" imgLink="https://icongr.am/simple/twitter.svg?size=20" title="Twitter" /><br>
            <ImageLink link="https://github.com/PhoenixofForce/" imgLink="https://icongr.am/simple/github.svg?size=20" title="Github" />
        </div>

        <div bind:this={ content } class="content" style="height: 100%;">
            I am making video games, programs, sometimes also websites and apps.
            Often I participate at GameJams like the Ludum Dare. 
            Since 2020 I also compete in the yearly Advent of Code and try to catch up with the past years in the other 11 months of the year.
            <br><br>

            In my free time I watch anime, drink some tea gongfu style and play card, board and video games now matter how old the game is.
            I even modded a gameboy with a new screen, rechargeable battery pack and tiny blue led. 
            Recently I got into 3D-printing/ miniature painting and picked up my Rubik's Cube again with a PB-AO5 of 19.40s.
            <br>
        </div>
    </div>
</div>

<div class="newest-projects">
    <h2 class="is-center"> MY LATEST PROJECTS </h2>
    <ProjectGroup projectCountToDisplay=4 />
</div>

<style>
.image-banner {
    margin-top: s;
    margin-bottom: 64px;
}

.image-holder {  
    width: 100%;  
    height:10px;
}

.image-holder img{
    height: 400px;
    object-fit: cover;
}

.greetings {
    width: 100%;  
    position: relative;
}

.greetings h1 {
    position: absolute;
    bottom: 0;
    margin-bottom: 0px;
    color: var(--color-primary);
    white-space: nowrap;
}

.content-holder {  
    padding-top: 12px;
    padding-bottom: 12px;
    height:250px;
    background-color: var(--color-secondary);
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.content {
    text-justify: center;
    display: flex;
    align-items: center;
}

.links {
    min-width: 40px;
    width: 40px;
    max-width: 40px;
}

h2 {
    margin-top: 12px;
    margin-bottom: 32px;
}

@media screen and (min-width: 751px) {
    .greetings {
        height: 140px;
    }

    .greetings h1 {
        bottom: 0;
        margin-left: 450px;
        font-size: 42px;
    }

    .content-holder {  
        width: calc(95vw - 200px);  
        margin-left: 200px;
        padding-left: 100px;
        padding-right: 10vw;
    }

    .content {
        margin-left: 110px;
    }
}

@media screen and (max-width: 750px) {
    .image-holder {
        display: none;
    }

    .greetings {
        height: 60px;
        display: flex;
        justify-content: center;
    }

    .greetings h1 {
        font-size: 32px;
    }

    .content-holder {  
        width: 100vw;  
        margin-left: -5vw;
        padding-left: 16px;
    }

    .content{
        width: calc(0.8 * (100% - 40px));
        margin-left: 16px;
    }
}
</style>
