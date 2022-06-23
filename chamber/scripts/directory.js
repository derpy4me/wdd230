const apiUrl = "scripts/mockData.json";
const directory = document.querySelector(".spotlights");

const membershipLevel = (member) => {
  switch (member) {
    case 1:
      return "Non-Profit Member";
    case 2:
      return "Bronze Member";
    case 3:
      return "Silver Member";
    case 4:
      return "Gold Member";
  }
};

const buildBusinesses = (businesses) => {
  // console.log(businesses);S
  businesses.forEach((business) => {
    let card = document.createElement("div");
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let webUrl = document.createElement("a");
    let icon = document.createElement("img");

    h2.innerHTML = business.name;
    h3.innerHTML = membershipLevel(business.membershipLevel);
    address.innerHTML = business.address;
    phone.innerHTML = business.phoneNumber;
    webUrl.innerHTML = business.websiteUrl;
    icon.src = business.icon;
    icon.alt = `Icon for ${business.name}`;
    icon.loading = "lazy";
    icon.height = "100";
    icon.width = "100";

    card.append(icon);
    card.append(h2);
    card.append(h3);
    card.append(document.createElement("hr"));
    card.append(address);
    card.append(phone);
    card.append(webUrl);

    directory.append(card);
  });
};

async function getBusinesses() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  buildBusinesses(data.businesses);
}

getBusinesses();

const gridButton = document.querySelector(".gridButton");
const listButton = document.querySelector(".listButton");

const showGrid = () => {
  directory.classList.remove("autoList");
  directory.classList.add("autoGrid");
  listButton.classList.remove("buttonActive");
  gridButton.classList.add("buttonActive");
};

const showList = () => {
  directory.classList.remove("autoGrid");
  directory.classList.add("autoList");
  gridButton.classList.remove("buttonActive");
  listButton.classList.add("buttonActive");
};

gridButton.addEventListener("click", showGrid);
listButton.addEventListener("click", showList);
