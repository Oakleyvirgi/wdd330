import { renderHikeList } from "./render-hike-list.js";

export function showHikeList() {
  const hikeListElement = document.getElementById("hikes");
  hikeListElement.innerHTML = "";
  const requestURL = "./hikes.json";

  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })

    .then(function (jsonObject) {
      const hikeList = jsonObject["hikes"];
      renderHikeList(hikeList, hikeListElement);
    });
}