import {
    makeRequest
} from "./authHelpers.js";
import Auth from "./auth.js";
// makeRequest("login", "POST", {
//   password: "user1",
//   email: "user1@email.com",
// });

const myAuth = new Auth();
const loginForm = document.querySelector("#login");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("hello");
    myAuth.login(getPost);
});

async function getPost() {
    let result = await makeRequest("posts", "get", null, myAuth.token);
    showPosts(result);
}

function showPosts(posts) {
    let postContainer = document.getElementById("posts");
    posts.map((post) => {
        let listItem = document.createElement("li");
        let listHeader = document.createElement("h3");
        let listContent = document.createElement("p");

        //listItem.innerText = post.title;
        listHeader.innerText = post.title;
        listContent.innerText = post.content;

        listItem.appendChild(listHeader);
        listItem.appendChild(listContent);
        postContainer.appendChild(listItem);
    });
}
document.getElementById("postForm").addEventListener("submit", (event) => {
    event.preventDefault();
    createPost();
});

async function createPost() {
    const form = document.forms.postForm;
    console.dir(form);
    if (form.title.validity.valid && form.content.validity.valid) {
        //myErrors.clearError();
        const data = {
            title: form.title.value,
            content: form.content.value,
        };
        try {
            await makeRequest("posts", "POST", data, myAuth.token);
            console.log("Post create:", data);
            form.title.value = "";
            form.content.value = "";
            getPost();
        } catch (error) {
            console.log(error);
        }
    } else {
        //myErrors.displayError({ message: "Title and Content are required" });
    }
}