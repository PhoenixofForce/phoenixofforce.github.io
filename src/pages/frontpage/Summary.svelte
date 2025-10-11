<script>
    import ImageLink from "../../components/ImageLink.svelte";
</script>

<div class="avatar">
    <img src="images/white.png" alt="" />

    <div class="links">
        <ImageLink
            link="https://twitter.com/PhoenixofForce"
            imgLink="https://icongr.am/simple/twitter.svg?size=20"
            title="Twitter"
        /><ImageLink
            link="https://github.com/PhoenixofForce/"
            imgLink="https://icongr.am/simple/github.svg?size=20"
            title="Github"
        />
    </div>

    <div class="bio-section">
        <h3>About me</h3>
        Hey, I'm Ole from Germany. I'm a software developer with a passion for game
        development, competitive programming, and building cool stuff on the web.
    </div>
</div>

<style>
    .avatar {
        min-width: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 450px;
        text-align: center;
    }

    img {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        background-color: var(--bg-color);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    }

    .bio-section {
        margin-bottom: 20px;
    }

    .bio-section h3 {
        color: var(--color-primary);
        margin-bottom: 8px;
        margin-top: 0;
        font-size: 1.4rem;
    }

    .links {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        min-width: 100px;
        margin-bottom: 12px;
        margin-top: 8px;
    }

    @media screen and (max-width: 750px) {
        .avatar {
            text-align: left;
            max-width: 100%;
        }

        .bio-section h3 {
            text-align: center;
        }
    }
</style>
