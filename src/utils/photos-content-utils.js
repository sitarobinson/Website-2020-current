import { groupArrayBySize } from "./array-utils";

const imageModules = import.meta.glob("../images/*.{png,jpg,jpeg,svg,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

export const photoUrls = Object.fromEntries(
  Object.entries(imageModules).map(([path, url]) => [
    path.replace("../images/", ""),
    url,
  ])
);

//Sorted so the grid order stays stable between builds.
const images = Object.keys(photoUrls).sort();

export const photoGroup = groupArrayBySize(images, 3);
