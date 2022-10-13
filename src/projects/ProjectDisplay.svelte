<script>
  import Project from './Project.svelte';
  import MultiSelect from '../components/MultiSelect.svelte';

  let projects = [

    //01.10.2022
    { title: "Speed Barber", text: "You play as the SpeedBarber who chose the busy travellers of the subway as his customers. Because they are so busy, you have to finish their requests in 10 seconds or less.",
      tags: ["C++", "Game", "GameJam"], image: "speedbarber", year: "LD51",
      links: [
        {
          link: "https://ldjam.com/events/ludum-dare/51/speed-barber",
          icon: "material/web",
          alt: "LD Entry"
        },
        {
          link: "https://github.com/PhoenixofForce/Ludum_Dare_51",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //02.04.2022
    { title: "Dont Sleep", text: "A point and click game made in 48h with the current state of my engine. Tomorrow is the next DudumDare and you have to delay the inevitable sleep to see the theme as early as possible.",
      tags: ["Java", "Game", "GameJam"], image: "DontSleep_Cover", year: "LD50",
      links: [
        {
          link: "https://ldjam.com/events/ludum-dare/50/dont-sleep",
          icon: "material/web",
          alt: "LD Entry"
        },
        {
          link: "https://github.com/PhoenixofForce/Ludum_Dare_50",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //08.03.2022
    { title: "LWJGL Framework", text: "A work in progress game codebase written in Java and OpenGL.",
      tags: ["Java", "Game"], image: "engine", year: "2022",
      links: [
        {
          link: "https://github.com/PhoenixofForce/LWJGL_Framework",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //31.10.2021
    { title: "0 Hour Game", text: "Turns out 2021 wasnt the last. So i made a game in 0 hours again. This time an easy endless runner where you have to jump over obstacles.",
      tags: ["Java", "GameJam", "Game"], image: "zero_game_2", year: "0h Jam 2021",
      links: [
        {
          link: "http://0hgame.eu/games.php?year=2021",
          icon: "material/web",
          alt: "Event Page"
        },
        {
          link: "https://github.com/PhoenixofForce/0HGameJam_21",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //24.04.21
    { title: "Chrono Jump", text: "A very short game for the 48 LD, which plays with the time. Travel back in time to open doors or change the position of moving platforms.",
      tags: ["Java", "Game", "GameJam"], image: "ld48", year: "LD48",
      links: [
        {
          link: "https://ldjam.com/events/ludum-dare/48/chronojump",
          icon: "material/web",
          alt: "LD Entry"
        },
        {
          link: "https://github.com/PhoenixofForce/Ludum_Dare_48",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //19.01.2021
    { title: "DnD Utils", text: "Want to roll some digital dice? Compare Spell damage? Then this site is for you.",
      tags: ["DND", "Svelte", "Web", "Tool"], image: "dnd_util", year: 2021,
      links: [
        {
          link: "https://phoenixofforce.github.io/DND_Utils/",
          icon: "material/web",
          alt: "Website"
        },
        {
          link: "https://github.com/PhoenixofForce/DND_Utils",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //29.12.20
    { title: "Dungeon Creator", text: "Create a custom Dungeon for your next session.",
      tags: ["DND", "Svelte", "Web", "Tool"], image: "dungeon_creator", year: 2020,
      links: [
        {
          link: "https://phoenixofforce.github.io/DungeonCreator/",
          icon: "material/web",
          alt: "Website"
        },
        {
          link: "https://github.com/PhoenixofForce/DungeonCreator",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //20.12.20
    { title: "Dungeon Viewer", text: "Host a game, share the link and watch your player struggle as you throw some dragons at them!",
      tags: ["DND", "Svelte", "Web", "Tool"], image: "dungeon_viewer_1", year: 2020,
      links: [
        {
          link: "https://phoenixofforce.github.io/Dungeon_Viewer/",
          icon: "material/web",
          alt: "Website"
        },
        {
          link: "https://github.com/PhoenixofForce/Dungeon_Viewer",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //25.10.20
    { title: "0 Hour Game", text: "A Game made in 0 Hours, -40 Minutes. This game jam was (supposed to be) the last of its kind. Play my version of Space Invaders",
      tags: ["Java", "GameJam", "Game"], image: "zero_game", year: "0h Jam 2020",
      links: [
        {
          link: "http://0hgame.eu/games.php?year=2020",
          icon: "material/web",
          alt: "Event Page"
        },
        {
          link: "https://github.com/PhoenixofForce/0HGameJam",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //23.10.20
    { title: "LaTxT", text: "Write LaTxT-like code to create magnificent .txt files.",
      tags: ["Java", "Tool"], image: "", year: 2020,
      links: [
        {
          link: "https://github.com/PhoenixofForce/LaTxT",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //25.09.20
    { title: "Parser", text: "A parser for all sort of languages. Write your own language and compile the code in Java.",
      tags: ["Java"], image: "", year: 2020,
      links: [
        {
          link: "https://github.com/PhoenixofForce/Parser",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //26.04.2019
    { title: "Bloody Medic", text: "Dwelve into the Dungeon to rescue your villagers. But watch your health as your life is currency.",
      tags: ["GameJam", "Game", "Java"], image: "bloody_medic", year: "LD44",
      links: [
        {
          link: "https://ldjam.com/events/ludum-dare/44/bloody-medic",
          icon: "material/web",
          alt: "LD Entry"
        },
        {
          link: "https://github.com/Nottrex/LudumDare44",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //22.04.2018
    { title: "Clicker Defense", text: "Protect your Base from very unfriendly Slimes. Get resources to build powerful Towers.",
      tags: ["GameJam", "Game", "Java"], image: "clicker_defense", year: "LD41",
      links: [
        {
          link: "https://ldjam.com/events/ludum-dare/41/clickerdefense",
          icon: "material/web",
          alt: "LD Entry"
        },
        {
          link: "https://github.com/PhoenixofForce/LudumDare41",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //16.12.17
    { title: "Texture Packer", text: "A texture packer based on steering algorithms.",
      tags: ["Java", "Tool"], image: "texture_packer",
      links: [
        {
          link: "https://github.com/PhoenixofForce/TexturePacker",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //05.12.17
    { title: "LevelEditor", text: "Import your spritesheet and start making levels for your game.",
      tags: ["Java", "Tool"], image: "level_editor",
      links: [
        {
          link: "https://github.com/PhoenixofForce/Level_Editor",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },
    { title: "Jump and Run", text: "Jump your way through multiple levels to collect all shiny coins.",
      tags: ["Game", "Java"], image: "jump_and_run",
      links: [
        {
          link: "https://github.com/Nottrex/JumpAndRun",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //24.08.17
    { title: "Tank My Bug", text: "In this buggy Shooter you can shoot your friends on the couch next to you.",
      tags: ["GameJam", "Game", "Java"], image: "tank_my_bug", year: "Kenney 1",
      links: [
        {
          link: "https://phoenixofforce.itch.io/tankmybug",
          icon: "material/web",
          alt: "Event Page"
        },
        {
          link: "https://github.com/PhoenixofForce/Kenney_Jam_1",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //29.07.17
    { title: "Lights Out", text: "An earthquake caused your lights to turn off. Find a way out of the building as long as you can!",
      tags: ["GameJam", "Game", "Java"], image: "Lights_Out", year: "LD39",
      links: [
        {
          link: "https://ldjam.com/events/ludum-dare/39/lightsout",
          icon: "material/web",
          alt: "LD Entry"
        },
        {
          link: "https://github.com/PhoenixofForce/Ludum_Dare_39",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //15.07.17
    { title: "My Lamp", text: "Jump across one screen full of enemies while you juggle your lamps fuel.",
      tags: ["GameJam", "Game", "Java"], image: "my_lamp", year: "GMTK 1",
      links: [
        {
          link: "https://phoenixofforce.itch.io/my-lamp",
          icon: "material/web",
          alt: "Event Page"
        },
        {
          link: "https://github.com/PhoenixofForce/GMTK_Jam",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },

    //22.03.17
    { title: "Hex Game", text: "Blast of your enemies in this turn based stategy game.",
      tags: ["Game", "Java"], image: "hexgame_",
      links: [
        {
          link: "https://github.com/Nottrex/HexGame_",
          icon: "material/github",
          alt: "Source Code"
        }
      ],
    },
  ]

  let tags = projects.map(e => e.tags);
  tags = [].concat.apply([], tags);
  tags = tags.filter(onlyUnique).sort();

  let selectedTags = []

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
</script>

<div>
  <div class="filter hide-pr">
    <MultiSelect placeholder="Filter" bind:value={ selectedTags }>
      {#each tags as tag}
        <option value={tag}> { tag } </option>
      {/each}
    </MultiSelect>
  </div>

  <div class="flex">
    {#each projects as project}
      {#if selectedTags == 0 || project.tags.some(e => selectedTags.includes(e))}
        <div class="project-holder"> <Project { ...project } /> </div>
      {/if}
    {/each}
  </div>
</div>

<style>
  .flex {
    display: flex;
		align-items: start;
		flex-wrap: wrap;
		justify-content: space-evenly;
  }

  .project-holder {
    margin-left: 32px;
    margin-bottom: 32px;
  }

  .filter {
    margin-bottom: 32px;
  }
</style>
