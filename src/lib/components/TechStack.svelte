<script lang="ts">
  const categories = [
    { name: "Backend", tags: ["Java", "Spring", "Node.js", "Maven", "SQL"] },
    {
      name: "Frontend",
      tags: ["HTML/CSS", "Svelte", "Angular", "TypeScript", "JavaScript"],
    },
    { name: "Game Dev", tags: ["OpenGL", "LWJGL", "RayLib", "SDL2", "C++"] },
    { name: "Tools", tags: ["Git", "Docker", "Postman"] },
  ];
</script>

<div class="min-w-56 md:ml-8 max-md:mt-6 max-md:w-full">
  <h3 class="text-primary text-xl font-semibold mb-4 max-md:text-center">Tech Stack</h3>

  {#each categories as category (category.name)}
    <div class="mb-4 last:mb-0">
      <h4 class="font-semibold text-secondary-content mb-1.5 max-md:text-center">
        {category.name}
      </h4>
      <div class="flex flex-wrap gap-1.5 max-md:justify-center">
        {#each category.tags as tag (tag)}
          <span class="badge badge-sm bg-base-100 border-base-300 text-base-content">{tag}</span>
        {/each}
      </div>
    </div>
  {/each}
</div>
