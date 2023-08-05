import { dataset, projectId } from "../env";

import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

const builder = imageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export const urlForImage = (source: Image) => {
  return builder.image(source);
};
