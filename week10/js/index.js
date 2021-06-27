import { getJSON, getLocation } from './utilities.js';
import QuakesController from './QuakesController.js';

const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson' +
`&starttime=2019-01-01` + `&endtime=2019-03-02` + `&latitude=43.814540699999995` + `&longitude=-111.78491029999999` + `maxradiuskm=100`

console.log(baseUrl);

getLocation().then((position) => {
    const longitude = position.coords.longitude;  
    const latitude = position.coords.latitude;  
  
    console.log(latitude, longitude);  
  
    const adjustUrl =  
      baseUrl +  
      "&latitude=" +  
      latitude +  
      "&longitude=" +  
      longitude +  
      "&maxradiuskm=100";  
  
    getJSON(adjustUrl);
  
  });

const shake = new QuakesController();