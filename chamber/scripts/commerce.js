/**
 * When Document was last updated
 */
const today = new Date();
const currentYear = today.getFullYear();
const day = today.getDay();

const lastModifiedDate = new Date(document.lastModified);
const lastModifiedElement = document.getElementById("lastUpdated");

lastModifiedElement.innerHTML = `Last Updated: ${lastModifiedDate.toLocaleDateString("en-US")} 
${lastModifiedDate.toLocaleTimeString("en-US")}`;

const copyright = (document.getElementById("copyright").innerHTML = `&#169; ${currentYear}`);

// `Last Updated: ${document.lastModified}`;
// This returns a 24 hour format on my machine.

/**
 * Current date
 */

const currentDay = document.querySelector(".currentDay");

const fullDate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(today);

currentDay.innerHTML = `${fullDate}`;

/**
 * Responsive hamburger button
 */
const mainNav = document.querySelector(".headerNav");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener(
  "click",
  () => {
    mainNav.classList.toggle("responsive");
  },
  false
);
hamburger.addEventListener(
  "click",
  () => {
    hamburger.classList.toggle("open");
  },
  false
);

window.onresize = () => {
  if (window.innerWidth > 870) mainNav.classList.remove("responsive");
};

/**
 * Logic to show and hid banner
 */

const banner = document.querySelector(".banner");
const bannerButton = document.querySelector(".bannerButton");

if (day === 1 || day == 2) {
  banner.classList.remove("hidden");
}

bannerButton.addEventListener("click", () => {
  banner.classList.toggle("hidden");
});
