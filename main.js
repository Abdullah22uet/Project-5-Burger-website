// hamburger icon 
const hamburger = document.getElementById("hamBurger")
const navMenu = document.getElementById("nav-menu")
const navClose = document.getElementById("nav-close")
const navLink = document.querySelectorAll(".nav__link")

navLink.forEach(link => {
    link.addEventListener("click", ()=>{
        navMenu.classList.add("hidden")
    })
})

navClose.addEventListener("click" , ()=> {
    navMenu.classList.add("hidden")
})

hamburger.addEventListener("click", ()=> {
    navMenu.classList.remove("hidden")
})

// tabs
const tabs = document.querySelectorAll(".tabs_wrap ul li")

const all = document.querySelectorAll(".item_wrap")
const food = document.querySelectorAll(".food")
const snack = document.querySelectorAll(".snack")
const beverage = document.querySelectorAll(".beverage")

tabs.forEach(tab => {
    tab.addEventListener("click" , ()=> {
        tabs.forEach(tab=> {
            tab.classList.remove("active")
        })
        tab.classList.add("active")

        const tabval = tab.getAttribute("data-tabs")

        all.forEach(item => {
            item.style.display = "none";
        })

        if (tabval=='food'){
            food.forEach(item => {
                item.style.display = "block";
                item.style.animation = "UD 1s linear";
            })
        }
        else if (tabval=='snack'){
            snack.forEach(item => {
                item.style.display = "block";
                item.style.animation = "UD 1s linear";
            })
        }
        else if (tabval=='beverage'){
            beverage.forEach(item => {
                item.style.display = "block";
                item.style.animation = "UD 1s linear";
            })
        }
        else{
            all.forEach(item => {
                item.style.display = "block";
                item.style.animation = "UD 1s linear";
            })
        }
})
})

// scroll arow up

window.addEventListener("scroll" , function(){
    const scrollUpBtn = document.getElementById("scroll-up");

    if(this.scrollY >=250){
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    } else {
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
})

// header 

const header = () => {  
    const Header = document.getElementById("header");

    if(this.scrollY >= 50){
        Header.classList.add("border-b" , "border-secondarycolor");
    } else {
        Header.classList.remove("border-b" , "border-secondarycolor");
    }
}
window.addEventListener("scroll",header)

// dark and light mode are here

const html = document.querySelector("html")
const themeBtn = document.getElementById("mode-toggle")

if(localStorage.getItem("mode") == "dark"){
    darkMode();
}
else{
    lightMode();
}

themeBtn.addEventListener("click" , function(){
    if(localStorage.getItem("mode") == "light"){
        darkMode();
    }else{
        lightMode();
    }
})
function darkMode(){
    html.classList.add("dark");
    themeBtn.classList.replace("fa-moon" , "fa-sun");
    localStorage.setItem("mode","dark");
}
function lightMode(){
    html.classList.remove("dark");
    themeBtn.classList.replace("fa-sun" , "fa-moon");
    localStorage.setItem("mode","light");
}

// active links

const activeLinks = document.getElementsByClassName("active__links");
function activeIt(){
    for(link of activeLinks){
        link.classList.remove("activee")
    }
    let i = Array.from(activeLinks).indexOf(event.currentTarget)
    activeLinks[i].classList.add("activee")
}

// scroll reveal

const sr = ScrollReveal({
    origin: "top",
    distance: "40px",
    duration: 2500,
    delay: 400
});
sr.reveal(".home__image")
sr.reveal(".home__content" , {origin: "bottom"})

sr.reveal(".category__card" , {interval: 300})

sr.reveal(".promo__card-1" , {origin: "left"})
sr.reveal(".promo__card-2" , {origin: "right"})

sr.reveal(".about__image" , {origin: "bottom"})
sr.reveal(".about__content" , {origin: "top"})

sr.reveal(".menu__items" , {origin: "left"})

sr.reveal(".customer__review" , {origin: "right"})

sr.reveal(".footer")