const currentDate = new Date().toISOString().slice(0, 10);
console.log(document.getElementById('date-input'))
document.getElementById('date-input').max=currentDate


const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')


// Get the modal
const modal = document.getElementById("myModal");

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











const date = document.querySelector('#date').value

fetch(`ttps://api.nasa.gov/planetary/apod?api_key=Wa9waKY10nfMfQhqVqZP3x5yBKN6o1WbtOReOtjO}&date=${date}`)
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

const pictures = []

function saveImage() {
    const image = imageContainer.innerHTMLpictures.push(image)
    localStorage.setItem('pictures', JSON.stringify(pictures))
    displayPictures()
}




myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

// Get the modal
const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.getElementById("imageone");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const images = document.getElementById("photosofthedayfavouritespage")
images.addEventListener('click', function (e) {
   console.log(e.target)
  modal.style.display = "block";
    modalImg.src = "photosofthedayfavouritespage" + e.target.id + ".png" ; 
    captionText.innerHTML = e.target.alt;
  })




// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}