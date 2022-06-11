const dateTime = document.querySelector('[name="submissionDate"]');

const now = new Date();

dateTime.setAttribute("value", now);

const jobPosition = document.querySelector("[name='positionTitle']");

const checkValid = () => {
  const re = /[^A-Za-z\- ]/;
  const leftOvers = jobPosition.value.match(re, "");
  if (leftOvers !== null) {
    jobPosition.style.background = "#ff000050";
  } else {
    jobPosition.style.background = "#00000023";
  }

  const jobLength = jobPosition.value.length;
  if (jobLength === 0) {
    jobPosition.style.background = "#00000023";
  } else if (jobLength < 7) {
    jobPosition.style.background = "#ff000050";
  } else {
    jobPosition.style.background = "#00000023";
  }

};

jobPosition.addEventListener("input", checkValid);
