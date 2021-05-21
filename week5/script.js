export default class Hikes {
  constructor() {
    this.imgBasePath = "//byui-cit.github.io/cit261/examples/";
  }
  showHikeList(hikeList, hikeListElement) {
    hikeListElement.innerHTML = "";
    this.renderHikeList(hikeList, hikeListElement);
  }
  renderHikeList(hikes, parent) {
    hikes.forEach((hike) => {
      parent.appendChild(this.renderOneHike(hike));
    });
    this.setImageEventListener(hikes);
  }
  renderOneHike(hike) {
    const item = document.createElement("li");
    item.setAttribute('id', hike.id)
    item.innerHTML = ` <h2>${hike.name}</h2>
          <div class="image"><img src="${this.imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}" id=${hike.id}></div>
          <div>
                  <div>
                      <h3>Distance</h3>
                      <p>${hike.distance}</p>
                  </div>
                  <div>
                      <h3>Difficulty</h3>
                      <p>${hike.difficulty}</p>
                  </div>
          </div>`;

    return item;
  }


  setImageEventListener(hikes) {
    hikes.forEach((hike) => {
      //document.getElementById("mybtn").addEventListener("click", () {
      document.getElementById(hike.id).addEventListener("click", event => {
        event.preventDefault();
    

        const fullDetails = document.getElementById(hike.id);

        fullDetails.innerHTML = ` <h2>${hike.name}</h2>
                  <div>
                      <h3>Distance</h3>
                      <p>${hike.distance}</p>
                  </div>
                  <div>
                      <h3>Difficulty</h3>
                      <p>${hike.difficulty}</p>
                  </div>
                  <h3>Description</h3>
              <p>${hike.description}</p><br>
           <h3>Directions</h3>
               <p>${hike.directions}</p><br> 
               <button id="mybtn${hike.id}">Go Back</button>
              `;


        document.getElementById("mybtn" + hike.id).addEventListener("click", event => {
          event.stopPropagation();

            const backDetails = document.getElementById(hike.id);
            backDetails.innerHTML = ` <h2>${hike.name}</h2>
            <div class="image"><img src="${this.imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}" id=${hike.id}></div>
            <div>
                    <div>
                        <h3>Distance</h3>
                        <p>${hike.distance}</p>
                    </div>
                    <div>
                        <h3>Difficulty</h3>
                        <p>${hike.difficulty}</p>
                    </div>
            </div>`;
          });
        
      });

    });
  }


  renderFullDetails(hike) {
    const fullDetails = document.getElementById("click");

    fullDetails.innerHTML = ` <h2>${hike.name}</h2>
          <div class="image"><img src="${this.imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}" id=${hike.id}></div>
          <div>
                  <div>
                      <h3>Distance</h3>
                      <p>${hike.distance}</p>
                  </div>
                  <div>
                      <h3>Difficulty</h3>
                      <p>${hike.difficulty}</p>
                  </div>
          </div>`;

    fullDetails.classList.remove("nodisplay");
  }
};