const cardArea = document.querySelector(".card-area");
const searchInput = document.querySelector(".search-input");
const changeMode = document.querySelector(".mode_area")
const main = document.querySelector("body");
const header = document.querySelector("header")
// const headerDetail =document.querySelector(".header_area")
const searchIcon = document.querySelector(".search-icon")
const filterDropdown = document.querySelector(".filter-dropdown")

const API_URL = "https://restcountries.com/v3.1/all"

let boolean = false


let get = false
fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
        data.forEach(element => {
            cardArea.innerHTML +=
                `
        <div class="col-lg-3 col-md-6 my-5 d-flex justify-content-center my_card">
            <a href="./details.html">
            <div class="${boolean ? "modeDark":"card my-css-card"}" style="width: 24rem;">
                <img src="${element.flags.png}"class="card-img-top images" alt="...">
                <div class="card-body">
                    <h5 class="card-title country-name px-3 mt-3">${element.name.common}</h5>
                    <ul class="d-flex flex-column country_abouts px-3 my-4 gap-2">
                        <li class="country_about"><strong>Population: </strong>${element.population}</li>
                        <li class="country_about"><strong>Region: </strong>${element.region}</li>
                        <li class="country_about"><strong>Capital: </strong>${element.capital}</li>
                    </ul>
                </div>
            </div>
            </a>
        </div>
        `
    });
    get = true
    console.log(get);
    })

searchInput.addEventListener("keyup", () => {
    fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
            cardArea.innerHTML = ""
            data.forEach(element => {
                if (element.name.common.toLowerCase().includes(searchInput.value.toLowerCase())) {
                    cardArea.innerHTML +=
                        `
        <div class="col-lg-3 my-5">
            <div class="${boolean ? "modeDark card my-css-card":"card my-css-card"}" style="width: 23rem;">
                <img src="${element.flags.png}"class="card-img-top images" alt="...">
                <div class="card-body">
                    <h5 class="card-title country-name px-3 mt-3">${element.name.common}</h5>
                    <ul class="d-flex flex-column country_abouts px-3 my-4 gap-2">
                        <li class="country_about"><strong>Population: </strong>${element.population}</li>
                        <li class="country_about"><strong>Region: </strong>${element.region}</li>
                        <li class="country_about"><strong>Capital: </strong>${element.capital}</li>
                    </ul>
                </div>
            </div>
        </div>
        `
                }

            });
        })
})

changeMode.addEventListener("click", () => {
    if (get) {
        const all = document.querySelectorAll(".my-css-card");
        boolean = true
        all.forEach(elem => {
            elem.classList.toggle("modeDark")
        })
        main.classList.toggle("mainDark")
        header.classList.toggle("modeDark")
        searchInput.classList.toggle("modeDark")
        searchIcon.classList.toggle("modeDark")
        filterDropdown.classList.toggle("modeDark")
    }
})
const all = document.querySelectorAll(".my-css-card");

all.forEach(elem => {
    elem.addEventListener("click", () => {

    })
})
