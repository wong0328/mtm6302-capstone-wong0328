function displayFavoriteImages() {
    const favoritesContainer = document.getElementById("favorites-container");
    const savedImages = JSON.parse(localStorage.getItem("savedImages")) || [];
  
    favoritesContainer.innerHTML = "";
  
    savedImages.forEach((image) => {
      const card = document.createElement("div");
      card.className = "card";
  
      const imgElement = document.createElement("img");
      imgElement.src = image.url;
      imgElement.alt = image.title;
      imgElement.className = "card-img-top";
  
      const cardBody = document.createElement("div");
      cardBody.className = "card-body";
  
      const titleElement = document.createElement("h5");
      titleElement.textContent = image.title;
      titleElement.className = "card-title";
  
      cardBody.appendChild(titleElement);
      card.appendChild(imgElement);
      card.appendChild(cardBody);
  
      favoritesContainer.appendChild(card);
    });
  }
  
  displayFavoriteImages();
  