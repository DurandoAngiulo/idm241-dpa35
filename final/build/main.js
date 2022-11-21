"use strict";
let gameImages = document.querySelectorAll(".game");
let gameContents = document.querySelectorAll(".textbox");
let infos = document.querySelectorAll(".info");
let categories = document.querySelectorAll(".category");
let modals = document.querySelectorAll(".modalControl");
let HzdModal = document.getElementById("horizonModal");
let gowModal = document.getElementById("godofwarModal");
let unchartModal = document.getElementById("unchartedModal");
let hzdGif = document.querySelector(".horizonGif");
let gowGif = document.querySelector(".godofwarGif");
let unchartGif = document.querySelector(".unchartedGif");

// modal hookups

// HzdModal.addEventListener("shown.bs.modal", function () {
//   myInput.focus();
// });
// gowModal.addEventListener("shown.bs.modal", function () {
//   myInput.focus();
// });

// unchartModal.addEventListener("shown.bs.modal", function () {
//   myInput.focus();
// });

hzdGif.addEventListener("mouseover", function () {
  hzdGif.src = "./images/hzd.gif";
});
hzdGif.addEventListener("mouseout", function () {
  hzdGif.src =
    "https://res.cloudinary.com/dsysuymw2/image/upload/v1668458996/react-project/hzd-landscape_lnmzhr.jpg";
});

gowGif.addEventListener("mouseover", function () {
  gowGif.src = "./images/gow.gif";
});
gowGif.addEventListener("mouseout", function () {
  gowGif.src =
    "https://res.cloudinary.com/dsysuymw2/image/upload/v1668459541/react-project/GameofWar_copy_negfrl.jpg";
});

unchartGif.addEventListener("mouseover", function () {
  unchartGif.src = "./images/uncharted.gif";
});
unchartGif.addEventListener("mouseout", function () {
  unchartGif.src =
    "https://res.cloudinary.com/dsysuymw2/image/upload/v1668459261/react-project/uncharted-4-jeep_zw1ocr.jpg";
});

//game images ANIMATION

gameImages.forEach((gameImage) => {
  gameImage.addEventListener("mouseover", function () {
    // gameImage.style.cursor = "pointer";
    gameImage.children[1].style.display = "block";
    gameImage.style.zIndex = 51;
    anime({
      targets: gameImage.children[0],
      scale: 1.3,
    });
    anime({
      targets: gameImage.children[1],
      scale: 1.3,
      opacity: 0.9,
    });
    infos.forEach((info) => {
      info.addEventListener("mouseover", function () {
        anime({
          targets: info,
          scale: 1.2,
        });
        info.src = "./images/info-white.png";
      });
    });

    infos.forEach((info) => {
      info.addEventListener("mouseout", function () {
        anime({
          targets: info,
          scale: 1,
        });
        info.src = "./images/info.png";
      });
    });
    categories.forEach((category) => {
      category.addEventListener("mouseover", function () {
        anime({
          targets: category,
          scale: 1.2,
        });
        category.style.color = "#ffffff";
      });
    });

    categories.forEach((category) => {
      category.addEventListener("mouseout", function () {
        anime({
          targets: category,
          scale: 1,
        });
        category.style.color = "#797979";
      });
    });
  });
});

gameImages.forEach((gameImage) => {
  gameImage.addEventListener("mouseout", function () {
    gameImage.style.cursor = "default";
    gameImage.children[1].style.display = "none";
    gameImage.style.zIndex = 50;
    anime({
      targets: gameImage.children[0],
      scale: 1,
    });

    anime({
      targets: gameImage.children[1],
      scale: 1,
      opacity: 0,
    });
  });
});
