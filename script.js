const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    function showError() {
      let errorDiv = document.getElementById("error");
      errorDiv.classList.add("show"); // Add the 'show' class

      // Remove the 'show' class after 5 seconds (5000ms)
      setTimeout(() => {
        errorDiv.classList.remove("show");
      }, 5000);
    }

    // Call the function when needed
    showError();
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);


function saveData () {
  localStorage.setItem('data', listContainer.innerHTML)
}

function showData () {
  listContainer.innerHTML= localStorage.getItem('data');
}

showData();