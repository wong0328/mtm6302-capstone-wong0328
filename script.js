const dateInput = document.getElementById("date-input");

const currentDate = new Date().toISOString().slice(0, 10);

console.log("dateInput", dateInput);
console.log(currentDate, currentDate);

dateInput.max = currentDate;

dateInput.addEventListener("change", function (e) {
  const query_date = dateInput.value;
  console.log("query_date", query_date);
  if (query_date.length) getNASAData(query_date);
});

let result;

function getNASAData(query_date) {
  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=Wa9waKY10nfMfQhqVqZP3x5yBKN6o1WbtOReOtjO&date=${query_date}`
  )
    .then((response) => response.json())
    .then((data) => {
      selectedImg = data;
      console.log(data);
      document.querySelector("#img-result").innerHTML = `
        <div class="wrapper">
            <div class="result-container">
                <div class="img-container">
                    <img src="${data.url}" alt="${data.title}" />
                </div>
                <div class="text-container">
                    <h2>${data.title}</h2>
                    <h3>${data.date}</h3>
                    <p>${data.explanation}</p>
                </div>
            </div>
            <div class="result-actions">
                <button id="add-favourite-button" class="btn btn-outline-secondary mt-3">
                    Add to Favourite
                </button>
                <button id="fullScreen-button" class="btn btn-outline-secondary mt-3">
                    Full Screen
                </button>
            </div>
        </div>
        `;
      initiateFunctions();
    });
}

// -------------------------seperating

let saveBtn, fullscreenBtn;

function initiateFunctions() {
  saveBtn = document.getElementById("add-favourite-button");
  fullscreenBtn = document.getElementById("fullScreen-button");

  saveBtn.addEventListener("click", toggleSaveImg);
  fullscreenBtn.addEventListener("click", fullscreeenImg);
}

function toggleSaveImg() {
  const selectedImgDate = selectedImg.date;
  const savedImages = JSON.parse(localStorage.getItem("savedImages")) || [];

  const index = savedImages.findIndex((img) => img.date === selectedImgDate);

  if (index === -1) {
    savedImages.push(selectedImg);
  } else {
    savedImages.splice(index, 1);
  }

  // Update savedImages in localStorage
  localStorage.setItem("savedImages", JSON.stringify(savedImages));
  saveBtn.innerHTML = "Remove from Favourite";
}

function removeImgFromStorage() {}
function fullscreeenImg() {
  let fullscreenDiv = document.getElementById("img-fullscreen");

  fullscreenDiv.classList.remove("visibility-hidden");
  fullscreenDiv.innerHTML = `
    <div class="img-full-container">
        <div class="close-btn" id="close-btn">Close</div>
        <img src="${selectedImg.hdurl}" alt="" />
    </div>
    
    `;
  document.getElementById("close-btn").addEventListener("click", () => {
    fullscreenDiv.classList.add("visibility-hidden");
  });
}
