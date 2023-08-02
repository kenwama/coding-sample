const hamMenuButton = document.querySelector(".ham-menu");
const hamMenuBackground = document.querySelector(".site-ham-nav-container");
const closeMenuButton = document.querySelector(".close-button-container");

hamMenuButton.addEventListener("click", (e) => {
  hamMenuBackground.classList.add("active");
});

closeMenuButton.addEventListener("click", (e) => {
  hamMenuBackground.classList.remove("active");
});

const mainImageHeader = document.getElementById("main-image");

mainImageHeader.addEventListener("click", (e) => {
  if (mainImageHeader.classList.contains("img1")) {
    mainImageHeader.classList.remove("img1");
    mainImageHeader.classList.add("img2");
    return;
  }

  if (mainImageHeader.classList.contains("img2")) {
    mainImageHeader.classList.remove("img2");
    mainImageHeader.classList.add("img3");
    return;
  }

  if (mainImageHeader.classList.contains("img3")) {
    mainImageHeader.classList.remove("img3");
    mainImageHeader.classList.add("img1");
  }
});

setInterval(() => {
  mainImageHeader.click();
}, 5000);

const headerNav = document.querySelector(".nav-bar");
window.addEventListener("scroll", (e) => {
  const scrollY = window.scrollY;

  const mainImgaeRect = mainImageHeader.getBoundingClientRect();

  if (scrollY > mainImgaeRect.height) {
    headerNav.classList.add("active");
  } else {
    headerNav.classList.remove("active");
  }
});
