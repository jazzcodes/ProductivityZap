const route=(e)=>{

    e=e||window.event;
    e.preventDefault();
    window.history.pushState({},"", e.target.href);
    handleLocation();
};

const routes=
{
    404:"/pages/404.html",
    // "/":"/index.html",
    "/dashboard.html":"/pages/dashboard.html",
    "/to-do":"/pages/to-do.html",
    "/pomodoro":"/pages/pomodoro.html",
    "/time-tracker":"/pages/time-tracker.html",
    "/sticky-notes":"/pages/sticky-notes.html"

};


const handleLocation = async()=>
{
    const path=window.location.pathname;
    const route=routes[path]||routes[404];
    const html=await fetch(route).then((data)=>data.text());
    document.getElementById("main-page").innerHTML=html;
    
};

window.onpopstate=handleLocation;
// window.onbeforeunload = handleLocation;
window.route=route;

handleLocation();


