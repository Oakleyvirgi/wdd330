import { showHikeList } from "./show-hike-list.js";
import { showCommentList } from "./show-comment-list.js";
import { renderOneHikeFull } from "./render-one-hike.js";

//create an array of hikes

//on load grab the array and insert it into the page
window.addEventListener("load", () => {
  showHikeList();
  showCommentList();
});