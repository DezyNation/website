const navBar = document.getElementById("nav");
const menu = document.getElementById("menu");
const servicesMenu = document.getElementById("servicesMenu");
var navVar = 0;
var servicesVAr = 0;

function toggleMenu(){
    if(navVar%2 == 0){
        navBar.style.height = "40vh";
        menu.style.display = "flex";
        navVar = 1;
    }
    else{
        navBar.style.height = "9.6vh";
        navVar = 0;
        menu.style.display = "none";
        servicesMenu.style.display = "none";
        servicesVAr = 0;
    }
}

function openServices(){
    servicesMenu.style.display = "flex";
    servicesVAr = 1;
}

function closeServices(){
    servicesMenu.style.display = "none";
    servicesVAr = 0;
}

document.getElementById("hero").addEventListener("click", () =>{
    if(screen.width < 768){
        navBar.style.height = "9.6vh";
        navVar = 0;
        menu.style.display = "none";
    }
    servicesMenu.style.display = "none";
    servicesVAr = 0;
})