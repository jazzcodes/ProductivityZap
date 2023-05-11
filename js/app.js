const globalMenu=document.querySelector(".nav__right__global-menu--open");
const globalMenuCloseBtn=document.querySelector(".global__menu__close-btn");
const globalMenuOpenBtn=document.querySelector(".nav__right__global-menu-btn");


function closeGlobalMenu()
{
    globalMenu.style.display="none";
}

function openGlobalMenu()
{
    globalMenu.style.display="flex";
}




globalMenuCloseBtn.addEventListener("click", closeGlobalMenu);
globalMenuOpenBtn.addEventListener("click", openGlobalMenu);