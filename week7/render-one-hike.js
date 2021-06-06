const imgBasePath = "//byui-cit.github.io/cit261/examples/";

export function renderOneHike(hike) {
  const item = document.createElement("li");

  item.innerHTML = ` <a href="hike-details.html?name=${hike.name}"> <h2>${hike.name}</h2>
        <div class="hikeListItem">
          <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
          <div class="data">
                  <div>
                      <h3>Distance</h3>
                      <p>${hike.distance}</p>
                  </div>
                  <div>
                      <h3>Difficulty</h3>
                      <p>${hike.difficulty}</p>
                  </div>
            </div>
                  </div>
                  </a>`;

  return item;
}

export function renderOneHikeFull(hike) {
  const item = document.createElement("section");

  item.innerHTML = ` <h2>${hike.name}</h2>
          <div class="hikeListItem">
            <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
            <div class="data">
                    <div>
                        <h3>Distance</h3>
                        <p>${hike.distance}</p>
                    </div>
                    <div>
                        <h3>Difficulty</h3>
                        <p>${hike.difficulty}</p>
                    </div>
                    <h3>Description</h3>
                    <p>${hike.description}</p>
                
                    <h3>Directions</h3>
                    <p>${hike.directions}</p>
                </div>
                </div>
                    </div> 
                    `;

  return item;
}