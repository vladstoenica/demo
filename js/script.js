'use strict'

// navbar variables

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

if (!navOpenBtn || !navCloseBtn || !navbar || !overlay) {
    console.error("One or more elements were not found");
  }

for(let i=0; i<navElemArr.length; i++){
    navElemArr[i].addEventListener("click", function() {     //function e un fel de -> (argument pt eventListener)
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
        document.body.classList.toggle("active");
    });
}  //le da proprietatea 'active' atunci cand sunt clicked


// header sticky

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function(){
    this.window.scrollY >= 10? header.classList.add("active") : header.classList.remove("active");
});