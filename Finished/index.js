var chickenImages = [
  "images/chickens-1.jpg",
  "images/chickens-2.jpg",
  "images/chickens-sleeping.jpg",
  "images/chicken-man.jpg",
];

var currentImage = 0;

function setChickenImageToDisplay() {
  document.getElementById("chicken_image").src = chickenImages[currentImage];
}

function nextChicken() {
  if (currentImage >= chickenImages.length - 1) {
    currentImage = 0;
  } else {
    currentImage++;
  }
  setChickenImageToDisplay();
}

function previousChicken() {
  if (currentImage <= 0) {
    currentImage = chickenImages.length - 1;
  } else {
    currentImage--;
  }
  setChickenImageToDisplay();
}
