
/* Mobile Menu */

const mobileMenu = document.querySelector(".open-nav-mobile");
const globalMenuCloseBtn = document.querySelector(".global__menu__close-btn");
const mobileMenuOpenBtn = document.querySelector(".mobile-menu");


function closeGlobalMenu() {
    mobileMenu.style.display = "none";
    mobileMenuOpenBtn.style.display = "initial";
    console.log("mobile menu closed");
}

function openGlobalMenu() {
    mobileMenu.style.display = "flex";
    mobileMenuOpenBtn.style.display = "none";
    console.log("mobile menu opened");
}




globalMenuCloseBtn.addEventListener("click", closeGlobalMenu);
mobileMenuOpenBtn.addEventListener("click", openGlobalMenu);


const toggle = document.querySelector("#toggle");
toggle.addEventListener("click", modeSwitch);

let isLight = true;

function modeSwitch() {
    isLight = !isLight;
    isLight ? toggle.innerHTML = `<img src="images/sun.svg" alt=""  class="sun">` : toggle.innerHTML = `<img src="images/moon.svg" alt=""  class="moon">`;
    var rootElement = document.body;
    rootElement.classList.toggle("light-mode");
    console.log("theme switched");
}