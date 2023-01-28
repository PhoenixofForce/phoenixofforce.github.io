<script>
    export let source = "";
    export let hideTopAndBotMargin = false;
    export let hideOnPhone = true;
</script>


<div class="pico" class:hide-on-phone={ hideOnPhone }>
    <iframe 
        src={ source }
        title="pico-8 game" 
        scrolling="no"
        frameborder="0"
    ></iframe>
    
    <div class:is-hidden={ !hideTopAndBotMargin } class="hide-margin top"></div>
    <div class:is-hidden={ !hideTopAndBotMargin } class="hide-margin bot"></div>
</div>


<style>
    .pico {
        position: relative;
    }

    iframe {
        width: 750px;
        height: 680px;
    }

    .hide-margin {
        position: absolute;
        width: 100%;
        left: 0;
        background-color: red;
    }

    .bot {
        height: 44px;
        bottom: 0px;
    }

    .top {
        height: 3px;
        top: 0px;
    }

@media screen and (max-width: 750px) {
    .hide-on-phone {
        display: none;
    }
}
</style>