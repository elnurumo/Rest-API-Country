const cardArea = document.querySelector(".card-area");
const searchInput = document.querySelector(".search-input");
const changeMode = document.querySelector(".mode_area")
const main = document.querySelector("body");
const header = document.querySelector("header")
// const headerDetail =document.querySelector(".header_area")
const searchIcon = document.querySelector(".search-icon")
const filterDropdown = document.querySelector(".filter-dropdown")
const button = document.querySelector(".backToHomePage")
const border = document.querySelectorAll(".border")
const modeDarkOrLight = document.querySelector(".modeDarkOrLight")
const moon = document.querySelector(".fa-moon")
const sun = document.querySelector(".fa-sun")

let get = true
changeMode.addEventListener("click", () => {
    if (modeDarkOrLight.textContent == "Light Mode" && sun.style.display == "inline") {
        modeDarkOrLight.textContent = "Dark Mode"
        sun.style.display = "none"
        moon.style.display = "inline"
    }else {
        modeDarkOrLight.textContent = "Light Mode"
        sun.style.display = "inline"
        moon.style.display = "none"
    }
    if (get) {
        const all = document.querySelectorAll(".my-css-card");
        boolean = true
        all.forEach(elem => {
            elem.classList.toggle("modeDark")
        })
        main.classList.toggle("mainDark")
        header.classList.toggle("modeDark")
        button.classList.toggle("modeDark")
        border.forEach((brd)=> {
            brd.classList.toggle("modeDark")
        })
    }
})