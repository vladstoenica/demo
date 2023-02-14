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


let hero = document.querySelector(".hero");
let heroVideo = document.querySelector(".hero-video");
let playBtn = document.getElementById("play");

play.addEventListener("mouseenter", function() {
    hero.style.background = "none";
    heroVideo.style.display = "block";
    heroVideo.play();
    // heroVideo.currentTime = 0;
});

play.addEventListener("mouseleave", function() {
    hero.style.background = "url(../images/thor-bg.png)";
    hero.style.background = "url(../images/thor-bg.png)";
    hero.style.backgroundSize = "cover";
    hero.style.backgroundPosition = "center";
    hero.style.minHeight = "750px";
    hero.style.height = "100vh";
    hero.style.maxWidth = "auto";
    hero.style.display = "flex";
    hero.style.justifyContent = "flex-start";
    hero.style.alignItems = "center";
    hero.style.paddingBlock = "var(--section-padding)";
    hero.style.boxShadow = "inset 600px 0 1000px 0px rgba(0, 0, 0, 0.4)";
    heroVideo.style.display = "none";
    heroVideo.pause();
});