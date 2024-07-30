"use strict";

const navMenu = document.querySelector("#navMenu");
const menu = document.querySelector('.menu');

navMenu.addEventListener('click', ()=> {
    menu.classList.toggle("active");
})
