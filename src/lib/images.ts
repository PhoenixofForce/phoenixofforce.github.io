import type { Picture } from "@sveltejs/enhanced-img";

const modules = import.meta.glob<Picture>("/src/lib/assets/images/*.png", {
  eager: true,
  import: "default",
  query: "?enhanced&w=640;320",
});

const byName = new Map(
  Object.entries(modules).map(([path, picture]) => [
    path.slice(path.lastIndexOf("/") + 1, -".png".length),
    picture,
  ]),
);

export function projectImage(name: string): Picture | undefined {
  return byName.get(name);
}
