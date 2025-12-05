const knapp = document.getElementById("toggleDarkMode")
const body = document.querySelector ("body")

function toggleDarkMode() {
    if (body.classList.contains("darkmode")) {
        body.classList.remove("darkmode")
        knapp.firstChild.classList.add("fa-moon")
        knapp.firstChild.classList.remove("fa-lightbulb")
        

    }
    else {
        body.classList.add("darkmode")
        knapp.firstChild.classList.remove("fa-moon")
        knapp.firstChild.classList.add("fa-lightbulb")

    }
}
knapp.addEventListener("click", toggleDarkMode)

