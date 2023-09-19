const configurations = {
  api_key: 'qCnxm3oi9NS9mzAkGmh7_4B6V3p6DJnyFs_wKfNQFF4',
  api_base_url: 'https://api.unsplash.com/photos/random',
  number_of_images_to_fetch: 15,
};

// Parameters to use: client_id, count
const image_url = `${configurations.api_base_url}?client_id=${configurations.api_key}&count=${configurations.number_of_images_to_fetch}`;
// url?paramName1=paramValue1&paramName2=paramValue2

const container = document.getElementById('image-container');
const button = document.getElementById('fetch-button');
// Function to fetch images from Unsplash

function fetchImages() {
  // TODO: Clear screen before loading new images
  while (container.firstChild){
    container.removeChild(container.firstChild);
  }
  fetch(image_url) //15 buraya geldi.
  .then(response => response.json())
  .then(data => {
    // all code goes here!
    // I just add something for myself while reviewing the lesson.
    data.map(image => { // 15'in içindeki her biri için çalıştı.
      const imageContainer = document.createElement("div");
      imageContainer.classList.add("image"); // image class ı css içinde tanımladık.

      const imageElement = document.createElement("img");
      imageElement.src = image.urls.regular; // bu uzantıyı nereden bulmuştuk yeniden bakalım.
      
      imageContainer.appendChild(imageElement);
      container.appendChild(imageContainer);
    
      // image class to be used for the div element
    })
  })
  .catch(err => console.log(err));
  // Clear previous images
}

// Fetch images once button is clicked. 
// Fetch images once page is loaded

window.addEventListener("load", fetchImages);
button.addEventListener('click', fetchImages);

// Executing function: fetchImages()
// Passing a function: fetchImages OR (param) => fetchImages(param)


// ANNA to share information about calling a function or passing it 