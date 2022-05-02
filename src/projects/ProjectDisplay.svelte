<script>
  import Project from './Project.svelte';
  import MultiSelect from '../components/MultiSelect.svelte';
  import Sidebar from '../components/Sidebar.svelte';

  import BloodyMedic from '../sidebar/BloodyMedic.svelte';
  import ClickerDefense from '../sidebar/ClickerDefense.svelte';
  import DnDUtils from '../sidebar/DnDUtils.svelte';
  import DungeonCreator from '../sidebar/DungeonCreator.svelte';
  import DungeonViewer from '../sidebar/DungeonViewer.svelte';
  import Engine from '../sidebar/Engine.svelte';
  import HexGame from '../sidebar/HexGame.svelte';
  import JNR from '../sidebar/JNR.svelte';
  import LaTxT from '../sidebar/LaTxT.svelte';
  import LD48 from '../sidebar/LD48.svelte';
  import LD50 from '../sidebar/LD50.svelte';
  import LevelEditor from '../sidebar/LevelEditor.svelte';
  import LightsOut from '../sidebar/LightsOut.svelte';
  import MyLamp from '../sidebar/MyLamp.svelte';
  import Parser from '../sidebar/Parser.svelte';
  import TankMyBug from '../sidebar/TankMyBug.svelte';
  import TexturePacker from '../sidebar/TexturePacker.svelte';
  import ZeroGame from '../sidebar/ZeroGame.svelte';

  let projects = [

    //02.04.2022
    { title: "Dont Sleep", text: "A point and click game made in 48h with the current state of my engine",
      tags: ["Java", "Game", "GameJam"], image: "DontSleep_Cover", year: "LD50", mod: LD50
    },

    //08.03.2022
    { title: "LWJGL Engine", text: "A work in progress game codebase.",
      tags: ["Java", "Game"], image: "engine", year: "2022", mod: Engine
    },


    //31.10.2021
    { title: "0 Hour Game", text: "Turns out 2021 wasnt the last. So i made a game in 0 hours again.",
      tags: ["Java", "GameJam", "Game"], image: "zero_game_2", year: "0h Jam 2021", mod: DnDUtils
    },

    //24.04.21
    { title: "Chrono Jump", text: "A very short game for the 48 LD, which plays with the time",
      tags: ["Java", "Game", "GameJam"], image: "ld48", year: "LD48", mod: LD48
    },

    //19.01.2021
    { title: "DnD Utils", text: "Want to roll some digital dice? Compare Spell damage? Then this site is for you.",
      tags: ["DND", "Svelte", "Web", "Tool"], image: "dnd_util", year: 2021, mod: DnDUtils
    },

    //29.12.20
    { title: "Dungeon Creator", text: "Create a custom Dungeon for your next session.",
      tags: ["DND", "Svelte", "Web", "Tool"], image: "dungeon_creator", year: 2020, mod: DungeonCreator
    },

    //20.12.20
    { title: "Dungeon Viewer", text: "Host a game, share the link and watch your player struggle as you throw some dragons at them!",
      tags: ["DND", "Svelte", "Web", "Tool"], image: "dungeon_viewer_1", year: 2020, mod: DungeonViewer
    },

    //25.10.20
    { title: "0 Hour Game", text: "A Game made in 0 Hours, -40 Minutes. This game jam was the last of its kind.",
      tags: ["Java", "GameJam", "Game"], image: "zero_game", year: "0h Jam 2020", mod: ZeroGame
    },

    //23.10.20
    { title: "LaTxT", text: "Write LaTxT-like code to create magnificent .txt files.",
      tags: ["Java", "Tool"], image: "", year: 2020, mod: LaTxT
    },

    //25.09.20
    { title: "Parser", text: "A parser for all sort of languages. Write your own language and compile the code in Java.",
      tags: ["Java"], image: "", year: 2020, mod: Parser
    },

    //26.04.2019
    { title: "Bloody Medic", text: "Dwelve into the Dungeon to rescue your villagers. But watch your health",
      tags: ["GameJam", "Game", "Java"], image: "bloody_medic", year: "LD44", mod: BloodyMedic
    },

    //22.04.2018
    { title: "Clicker Defense", text: "Protect your Base from very unfriendly Slimes. Get resources to build powerful Towers.",
      tags: ["GameJam", "Game", "Java"], image: "clicker_defense", year: "LD41", mod: ClickerDefense
    },

    //16.12.17
    { title: "Texture Packer", text: "A texture packer based on Steering algorithms.",
      tags: ["Java", "Tool"], image: "texture_packer", mod: TexturePacker
    },

    //05.12.17
    { title: "LevelEditor", text: "Import your spritesheet and start making levels for your game.",
      tags: ["Java", "Tool"], image: "level_editor", mod: LevelEditor
    },
    { title: "Jump and Run", text: "Jump your way through multiple levels to collect all shiny coins.",
      tags: ["Game", "Java"], image: "jump_and_run", mod: JNR
    },

    //24.08.17
    { title: "Tank My Bug", text: "In this buggy Shooter you can shoot your friends on the couch next to you",
      tags: ["GameJam", "Game", "Java"], image: "tank_my_bug", year: "Kenney 1", mod: TankMyBug
    },

    //29.07.17
    { title: "Lights Out", text: "An earthquake caused your lights to turn off. Find a way out of the building as long as you can!",
      tags: ["GameJam", "Game", "Java"], image: "Lights_Out", year: "LD39", mod: LightsOut
    },

    //15.07.17
    { title: "My Lamp", text: "Jump across one screen full of enemies while you juggle your lamps fuel;",
      tags: ["GameJam", "Game", "Java"], image: "my_lamp", year: "GMTK 1", mod: MyLamp
    },

    //22.03.17
    { title: "Hex Game", text: "Blast of your enemies in this turn bases stategy game.",
      tags: ["Game", "Java"], image: "hexgame_", mod: HexGame
    },
  ]

  let tags = projects.map(e => e.tags);
  tags = [].concat.apply([], tags);
  tags = tags.filter(onlyUnique).sort();

  let selectedTags = [];
  let selectedModule;

  let sidebarShown = false;

  let urlParams = new URLSearchParams(window.location.search);
  if(urlParams && urlParams.get("page")) {
    openSideBar(urlParams.get("page"));
  }


  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  window.onpopstate = function(event) {
    let state = event.state;
    if(state && state.page) {
      openSideBar(state.page, true);
    } else sidebarShown = false;
  };

  function clickTitle(event) {
    let title = event.detail.title;
    openSideBar(title);
  }

  function openSideBar(title, ignorePush) {
    let entry = projects.find(e => e.title == title);

    if(entry && entry.mod) {
      selectedModule = entry.mod;
      sidebarShown = true;

      if(!ignorePush) window.history.pushState({page: entry.title}, entry.title, "?page=" + entry.title);
    } else {
      selectedModule = [];
      sidebarShown = false;
      if(!ignorePush) window.history.pushState({}, "Home", "");
    }
  }
</script>

<Sidebar bind:show={ sidebarShown }>
    <svelte:component this={ selectedModule }/>
</Sidebar>

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
        <div class="project-holder"> <Project on:sidebar={ clickTitle } { ...project } /> </div>
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
