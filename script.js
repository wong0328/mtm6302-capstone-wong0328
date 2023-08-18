const dateInput = document.getElementById('date-input')

const currentDate = new Date().toISOString().slice(0, 10);

console.log('dateInput', dateInput);
console.log(currentDate, currentDate);

dateInput.max = currentDate;

/*
// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.getElementById("imageone");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const images = document.getElementById("images")
images.addEventListener('click', function (e) {
   console.log(e.target)
  modal.style.display = "block";
    modalImg.src = "images/" + e.target.id + ".png" ; 
    captionText.innerHTML = e.target.alt;
  })



// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}



*/




dateInput.addEventListener('change', function (e) {
    
    const query_date = dateInput.value;
    console.log('query_date', query_date);
    if(query_date.length) getNASAData(query_date);
    
    
});

function getNASAData(query_date) {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=Wa9waKY10nfMfQhqVqZP3x5yBKN6o1WbtOReOtjO&date=${query_date
    }`)
    .then(response => response.json())
    .then(data => {
        document.querySelector('#image-container').innerHTML = `
        <img src = "${data.url}" alt="${data.title}">
        <div class="card-body">
        <h3>${data.title}</h3>
        <p>${data.explanation}</p>
        </div>
        `
    })    
}


document.addEventListener("DOMContentLoaded", () => {
    const favouriteButtons = document.querySelectorAll(".favourite-button");
  
    favouriteButtons.forEach(button => {
      button.addEventListener("click", () => {
        const imageContainer = button.parentElement;
        const imageSrc = imageContainer.querySelector("img").src;
  
        saveToFavourites(imageSrc);
      });
    });
  
    function saveToFavourites(imageSrc) {
      let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
      favourites.push(imageSrc);
      localStorage.setItem("favourites", JSON.stringify(favourites));
  
      alert("Image added to favourites!");
    }
  });
  