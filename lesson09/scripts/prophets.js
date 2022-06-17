const prophetURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";
const cardDiv = document.querySelector(".cards");

const buildProphetCards = (prophets) => {
  console.log(prophets)
  prophets.forEach((prophet) => {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let birthPlace = document.createElement("p");
    let birthDate = document.createElement("p");
    let img = document.createElement("img");
    
    const prophetName = `${prophet.name} ${prophet.lastname}`

    card.classList.add('prophetCard')

    h2.innerHTML = prophetName;
    birthPlace.innerHTML = `Location of Birth: ${prophet.birthplace}`
    birthDate.innerHTML = `Date of Birth: ${prophet.birthdate}`
    img.src = prophet.imageurl
    img.alt = `Picture of ${prophetName} - ${prophet.order} of ${prophets.length}`
    img.loading = 'lazy'
    img.height = '430'
    img.width = '320'

    card.append(h2)
    card.append(birthPlace)
    card.append(birthDate)
    card.append(img)

    
    cardDiv.append(card)
    // debugger
  });
};

async function getProphets() {
  const response = await fetch(prophetURL);
  const data = await response.json();
  buildProphetCards(data.prophets);
}

getProphets();
