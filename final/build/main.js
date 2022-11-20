"use strict";
let gameImages = document.querySelectorAll(".game");
let gameContents = document.querySelectorAll(".textbox");
let infos = document.querySelectorAll(".info");
let categories = document.querySelectorAll(".category");

var myModal = document.getElementById("exampleModal");
var myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});

//ANIMATION

gameImages.forEach((gameImage) => {
  gameImage.addEventListener("mouseover", function () {
    gameImage.style.cursor = "pointer";
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
