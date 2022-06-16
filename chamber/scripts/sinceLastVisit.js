let visits = Number(localStorage.getItem("visits"));
let lastVisit = localStorage.getItem("lastVisit");

if (visits === NaN) {
    visits = 0;
}

const thisVisit = new Date();
localStorage.setItem("lastVisit", thisVisit);

visits = parseInt(visits);
localStorage.setItem("visits", visits + 1);

const time = document.querySelector(".time");
let days = Math.round((thisVisit.getTime() - Date.parse(lastVisit)) / (1000 * 3600 * 24));

if (isNaN(days)) {
    days = 0;
}

time.innerHTML = days;
