"use strict";

const ToggleBtn = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const btn = document.querySelector(".btn");

ToggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  btn.classList.toggle("active");
});
