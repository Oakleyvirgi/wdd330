import { renderOneHike } from "./render-one-hike.js";

export function renderHikeList(hikes, parent) {
  hikes.forEach((hike) => {
    parent.appendChild(renderOneHike(hike));
  });
}