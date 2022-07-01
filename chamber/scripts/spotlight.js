const spotlights = document.querySelector(".spotlights");

const dataLocation = "scripts/mockData.json";

const getSpotlights = async () => {
  try {
    const response = await fetch(dataLocation);
    if (response.ok) {
      const data = await response.json();
      // console.info(JSON.stringify(data, null, 2));
      displaySpotlights(data.businesses)
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
};

const getGoldAndSilver = (data) => {
  return data.filter((business) => business.membershipLevel >= 3)
}

const shuffleBusinesses = (businesses) => {
  return [...businesses].sort(() => 0.5 - Math.random());
}

const displaySpotlights = (businesses) => {
  const silverAndGold = getGoldAndSilver(businesses);
  const shuffled = shuffleBusinesses(silverAndGold)
  
  let length = 2;
  if (Math.random() < 0.5) {
    length = 3
  }

  for (let iter = 0; iter < length; iter++) {
    const business = shuffled[iter];
    const aSpotlight = document.createElement("div")

    const title = document.createElement("h2")
    title.innerText = business.name
    aSpotlight.append(title)

    const img = document.createElement("img")
    img.src = business.icon
    img.height = "100"
    img.width = "100"
    aSpotlight.append(img)

    const slogan = document.createElement("h3")
    slogan.innerText = business.slogan
    aSpotlight.append(slogan)

    aSpotlight.append(document.createElement("hr"))

    const phoneNumber = document.createElement("p")
    phoneNumber.innerText = business.phoneNumber
    aSpotlight.append(phoneNumber)

    const email = document.createElement("p")
    email.innerText = business.email
    aSpotlight.append(email)

    spotlights.append(aSpotlight)
  }
}

getSpotlights()