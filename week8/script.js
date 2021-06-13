const requestURL = "https://swapi.dev/api/people"

function fetch_info(url) {
    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.table(json)

            const starwars = json['results'];
            console.table(starwars);

            let num_pages = Math.ceil(json.count / 10);
            console.log(num_pages);

            //reset trading cards to blank before adding any informaiton
            document.querySelector('div.tradingCard').innerHTML = "";
            document.querySelector('div.wrapper').innerHTML = "";

            //create "previous button"
            let previous = document.createElement('button');
            previous.setAttribute('id', 'back');
            previous.innerText = 'Back';

            //event listener for previous button
            previous.addEventListener("click", () => fetch_info(json.previous));
            document.querySelector('div.wrapper').appendChild(previous);
            

            //create individually numbered page buttons using a for loop
            for (let i = 1; i <= num_pages; i++) {
                let button = document.createElement('button');
                button.innerText = i;

                //event listeners for page buttons (in loop)
                document.querySelector('div.wrapper').appendChild(button);
                button.addEventListener("click", () => fetch_info('https://swapi.dev/api/people/?page=' + i));
            }

            //create next button
            let next = document.createElement('button');
            next.setAttribute('id', 'next');
            next.innerText = 'Next';

            //event listeners for next button
            next.addEventListener("click", () => fetch_info(json.next));           
            document.querySelector('div.wrapper').appendChild(next);

            //declare elements for trading cards
            for (let i = 0; i < starwars.length; i++) {
                let card = document.createElement('section');
                let info_div = document.createElement('div');
                let h2 = document.createElement('h2');
                let height = document.createElement('p');
                let mass = document.createElement('p');
                let hair_color = document.createElement('p');
                let skin_color = document.createElement('p');
                let eye_color = document.createElement('p');
                let birth_year = document.createElement('p');
                let gender = document.createElement('p');
                let homeworld = document.createElement('a');

            //write text content for cards and set attributes as necessary for styling etc.
                h2.textContent = starwars[i].name;
                info_div.setAttribute('class', 'hide');
                height.textContent = 'Height:' + ' ' + starwars[i].height;
                mass.textContent = 'Mass:' + ' ' + starwars[i].mass;
                hair_color.textContent = 'Hair Color:' + ' ' + starwars[i].hair_color;
                skin_color.textContent = 'Skin Color:' + ' ' + starwars[i].skin_color;
                eye_color.textContent = 'Eye Color:' + ' ' + starwars[i].eye_color;
                birth_year.textContent = 'Birth Year:' + ' ' + starwars[i].birth_year;
                gender.textContent = 'Gender:' + ' ' + starwars[i].gender;
                homeworld.textcontent = 'Home World' + ' ' + starwars[i].homeworld;
                homeworld.setAttribute('src', starwars[i].homeworld);

            //Information going to the page
                card.appendChild(h2);
                card.appendChild(info_div);
                info_div.appendChild(height);
                info_div.appendChild(mass);
                info_div.appendChild(hair_color);
                info_div.appendChild(skin_color);
                info_div.appendChild(eye_color);
                info_div.appendChild(birth_year);
                info_div.appendChild(gender);
                info_div.appendChild(homeworld);

            //event listener for card. Note the arrow function--it fixes problem of event listener being triggered immediately
                card.addEventListener("click", () => toggleHide(info_div));

            //append card    
                document.querySelector('div.tradingCard').appendChild(card);
            }

        });
}

// calling function to get URL for pages
fetch_info(requestURL);


// function to toggle details about each individual
function toggleHide(info_div) {
    info_div.classList.toggle('hide');
}