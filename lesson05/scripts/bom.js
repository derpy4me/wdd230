const list = document.querySelector(".list");
const userInput = document.querySelector("#favchap");
const addButton = document.querySelector(".addButton");

addButton.addEventListener("click", addChapter);

function addChapter() {
  if (userInput.value !== "") {
    let listItem = document.createElement("li");
    let aSpan = document.createElement("span");
    aSpan.innerHTML = userInput.value;
    let aButton = document.createElement("button");
    aButton.innerHTML = "❌";

    aButton.addEventListener("click", deleteChild);

    function deleteChild() {
      list.removeChild(listItem);
      userInput.focus()
    }

    listItem.appendChild(aSpan);
    listItem.appendChild(aButton);
    list.appendChild(listItem);
    userInput.value = "";
  }
  userInput.focus();
}
