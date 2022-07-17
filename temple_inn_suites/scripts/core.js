/**
 * Hamburger Button responsive menu
 */

const mainNav = document.querySelector(".headerNav");
const hamburger = document.querySelector(".hamburger");
const navSlider = document.querySelector(".navSlider");
const closeNav = document.querySelector(".closeNav");

hamburger.addEventListener(
  "click",
  () => {
    navSlider.classList.add("open");
  },
  false
);

closeNav.addEventListener(
  "click",
  () => {
    navSlider.classList.remove("open");
  },
  false
);

window.onresize = () => {
  if (window.innerWidth > 870) mainNav.classList.remove("responsive");
};

/**
 * Lazy loading of images
 */

const imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  if (imagesToLoad) {
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  }
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

/**
 * Required times for every page
 */

// Showing the last modified date of web page
const lastModifiedDate = new Date(document.lastModified);
const lastModifiedElement = document.querySelector("#lastUpdated");
lastModifiedElement.innerHTML = `Last Updated: ${lastModifiedDate.toLocaleDateString("en-US")}`;

// Showing the current year for copyright
const today = new Date();
const currentYear = today.getFullYear();
const copyright = (document.querySelector("#copyright").innerHTML = `&#169; ${currentYear}`);
