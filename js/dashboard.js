
/* Global Menu */



const globalMenu = document.querySelector(".nav__right__global-menu--open");
const globalMenuCloseBtn = document.querySelector(".global__menu__close-btn");
const globalMenuOpenBtn = document.querySelector(".nav__right__global-menu-btn");


function closeGlobalMenu() {
    globalMenu.style.display = "none";
    console.log("global menu closed");
}

function openGlobalMenu() {
    globalMenu.style.display = "flex";
    console.log("global menu opened");
}




globalMenuCloseBtn.addEventListener("click", closeGlobalMenu);
globalMenuOpenBtn.addEventListener("click", openGlobalMenu);


