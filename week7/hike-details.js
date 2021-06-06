import { renderOneHikeFull } from "./render-one-hike.js";
import { commentGet } from "./show-comment-list.js";

window.addEventListener("load", () => {
  const hikeName = window.location.search.substr(6).replace(/%20/g, " ");
  const requestURL = "./hikes.json";
  //console.log(hikeName);
  const hikeDetails = document.getElementById("hikeDetails");

  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })

    .then(function (jsonObject) {
      const hikeList = jsonObject["hikes"];
      const selectedHike = hikeList.filter((hike) => hike.name == hikeName)[0];
      //const selectedHike = hikeList.filter;
      console.log(selectedHike);
      hikeDetails.appendChild(renderOneHikeFull(selectedHike));
      //renderHikeList(hikeList, hikeListElement);
    });
  //renderOneHikeFull();
});

class Hike {
  showCommentsList() {
    console.log("Hey, we did it!");
  }
}

class Comment {
  constructor(content, hikeName) {
    this.hikeName = hikeName;
    this.date = new Date();
    this.content = content;
  }
}

const newComment = document.getElementById("commentForm");

newComment.addEventListener("submit", (event) => {
  event.preventDefault();

  const currentComments = commentGet();

  console.log(currentComments);

  const hikeName = window.location.search.substr(6).replace(/%20/g, " ");
  let newOne = new Comment(
    document.getElementById("newComment").value,
    hikeName
  );

  console.log(document.getElementById("newComment").value);

  const updatedComments = [...currentComments, newOne];

  localStorage.setItem("comments", JSON.stringify(updatedComments));

  //renderComments();

  newComment.reset();
});