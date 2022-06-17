const apiUrl = "scripts/mockData.json";
const directory = document.querySelector(".spotlights");

const buildBusinesses = (businesses) => {
  console.log(businesses);
  businesses.forEach((business) => {
    let card = document.createElement("div");
    let h2 = document.createElement("h2");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let webUrl = document.createElement("p");
    let icon = document.createElement("img");

    h2.innerHTML = business.name;
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
