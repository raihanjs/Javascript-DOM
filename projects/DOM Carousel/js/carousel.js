let carouselItems = data;
let carouselItemIndex = 0;

function showCarouselImage() {
  setInterval(changeImage, 3000);

  function changeImage() {
    showImageInCarousel(carouselItemIndex);
    if (carouselItemIndex < carouselItems.length) {
      carouselItemIndex++;
    }

    if (carouselItemIndex > carouselItems.length - 1) {
      carouselItemIndex = 0;
    }
  }

  showDots();
}

function showDots() {
  const dotsContainer = document.querySelector(".dots");
  carouselItems.forEach((element, index) => {
    let newDot = document.createElement("div");
    newDot.setAttribute("class", "dot");
    newDot.setAttribute("onclick", `makeActive(${index})`);
    dotsContainer.appendChild(newDot);
  });
}

function showActiveDot(currentIndex) {
  let allDots = document.querySelectorAll(".dot");
  let currentItem = allDots[currentIndex];

  let isDotActive = currentItem.getAttribute("class").includes("dot-active");
  if (!isDotActive) {
    let prevDotActive = currentItem.parentNode.querySelector(".dot-active");
    prevDotActive === null ? "" : prevDotActive.classList.remove("dot-active");
    currentItem.classList.add("dot-active");
  }
}

document.querySelector(".next").addEventListener("click", function () {
  if (carouselItemIndex < carouselItems.length - 1) carouselItemIndex++;
  else carouselItemIndex = 0;
  showImageInCarousel(carouselItemIndex);
});
document.querySelector(".prev").addEventListener("click", function () {
  if (carouselItemIndex > 0) carouselItemIndex--;
  else carouselItemIndex = carouselItems.length - 1;
  showImageInCarousel(carouselItemIndex);
});

function showImageInCarousel(currentIndexNumber) {
  const carouselImage = document.querySelector(".carousel-img");
  carouselImage.style = `background-image: url(${carouselItems[currentIndexNumber]})`;
  showActiveDot(currentIndexNumber);
}

showCarouselImage();
function makeActive(indexNumber) {
  showActiveDot(indexNumber);
  carouselItemIndex = indexNumber;
  showImageInCarousel(carouselItemIndex);
}

document.querySelector(".dot").classList.add("dot-active");
document.querySelector(
  ".carousel-img"
).style = `background-image: url(${carouselItems[0]})`;
