import { renderHikeList } from "./render-hike-list.js";

export function showCommentList() {
  console.log("Hello, I'm stuck!");
  const commentListElement = document.getElementById("comments");
  commentListElement.innerHTML = "";
  const comments = commentGet();
  comments.forEach((comment) => {
    console.log("Hello, I'm Here!");
    commentListElement.appendChild(renderComment(comment));
  });
}

export function commentGet() {
  return localStorage.getItem("comments")
    ? JSON.parse(localStorage.getItem("comments"))
    : [];
}

function renderComment(comment) {
  const item = document.createElement("li");

  item.innerHTML = ` ${comment.content} `;

  console.log("Hello, I'm Here!");

  return item;
}