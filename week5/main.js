import {Hikes} from './hikes.js';
const myHikes = new Hikes('hikeListId');
window.addEventListener("load", () => {
    myHikes.showHikeList();
});