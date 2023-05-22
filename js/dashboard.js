
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

// Quotes

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const button = document.querySelector('.change-quote');

const quotes = [
    {
        quote: "“The greatest glory in living lies not in never falling, but in rising every time we fall.”",
        author: "Nelson Mandela"
    },
    {
        quote: "“Truth can only be found in one place: the code.”",
        author: "Robert C. Martin"
    },
    {
        quote: "“Life is what happens when you're busy making other plans.”",
        author: "John Lennon"
    },
    {
        quote: "“If life were predictable it would cease to be life, and be without flavor.”",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "“Whoever is happy will make others happy too.”",
        author: "Anne Frank"
    },
    {
        quote: "“Always remember that you are absolutely unique. Just like everyone else.”",
        author: "Margaret Mead"
    }
]


button.addEventListener("click",
    () => {
        const random = Math.floor(Math.random() * quotes.length);
        quote.innerText = quotes[random].quote;
        author.innerText = quotes[random].author;
    }


)
