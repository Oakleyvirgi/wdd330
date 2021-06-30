// import {getJSON, getLocation} from "./utilities.js";

import QuakesController from "./QuakesController.js";

const myController = new QuakesController();

myController.init();

const myForm = document.querySelector("#radiusSettings");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let newRadius = parseInt(document.getElementById("newRadius").value);
  myController.getQuakesByRadius(newRadius);
});

// console.log(myController);

// const baseUrl = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02`;

// const currentLocation = getLocation();

// getLocation().then((position) => {
//   const longitude = position.coords.longitude;

//   const latitude = position.coords.latitude;

//   console.log(latitude, longitude);

//   const adjustUrl =
//     baseUrl +
//     "&latitude=" +
//     latitude +
//     "&longitude=" +
//     longitude +
//     "&maxradiuskm=100";

//   const myResult = getJSON(adjustUrl);
//   console.log(myResult);
// });