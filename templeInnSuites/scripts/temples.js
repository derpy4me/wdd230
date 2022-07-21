const display = document.querySelector('.cardDisplay');

const createListElement = (data) => {
  const listElement = document.createElement('ul');
  data.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `<p>${item}</p>`;
    listElement.appendChild(li);
  });
  return listElement.outerHTML;
};

const objectLiteralList = (data) => {
  const listElement = document.createElement('ul');
  for (let key in data) {
    const li = document.createElement('li');
    if (typeof data[key] === 'object') {
      li.innerHTML = `<p><strong>${key}: </strong>${createListElement(
        data[key]
      )}</p>`;
    } else {
      li.innerHTML = `<p><strong>${key}: </strong>${data[key]}</p>`;
    }
    listElement.appendChild(li);
  }
  return listElement.outerHTML;
};

const templeCard = (templeData) => {
  const services = createListElement(templeData.services);
  const history = objectLiteralList(templeData.history);
  const closed = objectLiteralList(templeData.closed);
  const div = document.createElement('div');
  div.classList.add('templeCard');
  div.classList.add('textSmall');
  div.innerHTML = `
    <h3>${templeData.name}</h3>
    <div class="templeImage">
      <img src="${templeData.image}" alt="${templeData.name}"  width="250"/>
      <img src="images/heart.svg" alt="${templeData.name}" width="30" class="likeButton"/>
    </div>
    <p><strong>${templeData.address}</strong></p>
    <p class="paddingTop"><strong>Phone: </strong>${templeData.phone}</p>
    <p><strong>Email: </strong>${templeData.email}</p>
    <p><strong>Ordinance Schedule: </strong>${templeData.ord_schedule}</p>
    <p><strong>Session Schedule: </strong>${templeData.sess_schedule}</p>
    <p class="textNormal paddingTop"><strong>Services: </strong</p>
    ${services}
    <p class="textNormal paddingTop"><strong>History: </strong</p>
    ${history}
    <p class="textNormal paddingTop"><strong>Closed: </strong</p>
    ${closed}
  `;
  return div;
};

const displayCards = (data) => {
  data.forEach((temple) => {
    const element = templeCard(temple);
    display.appendChild(element);
  });
};

const tagHearts = () => {
  const hearts = document.querySelectorAll('.likeButton');
  const toggleList = (heart) => {
    heart.classList.toggle('liked');
    heart.classList.toggle('likeButton');
  };

  for (const heart of hearts) {
    const lsHeart = localStorage.getItem(heart.alt);
    if (lsHeart) {
      toggleList(heart);
    }
    heart.addEventListener('click', () => {
      if (lsHeart) {
        localStorage.removeItem(heart.alt);
      } else {
        localStorage.setItem(heart.alt, true);
      }
      toggleList(heart);
    });
  }
};

const fetchTemples = () => {
  fetch('scripts/temples.json')
    .then((response) => response.text())
    .then((responseText) => JSON.parse(responseText))
    .then((data) => displayCards(data.temples))
    .then(() => tagHearts());
};

fetchTemples();
