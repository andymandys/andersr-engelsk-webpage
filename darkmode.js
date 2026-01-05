const knapp = document.getElementById("toggleDarkMode")
const body = document.querySelector("body")

console.log(localStorage.getItem("darkmode-active"));

// Før siden loader, sjekk hvis siden skal ha dark mode
if (localStorage.getItem("darkmode-active") === "true") {
    // Set siden til darkmode
    setDarkMode();
}

function setLightMode() {
    body.classList.remove("darkmode")
    knapp.firstChild.classList.add("fa-moon")
    knapp.firstChild.classList.remove("fa-lightbulb")

    // Lagre i siden at darkmode ikke er aktiv
    localStorage.setItem("darkmode-active", "false");
}

function setDarkMode() {
    body.classList.add("darkmode")
    knapp.firstChild.classList.remove("fa-moon")
    knapp.firstChild.classList.add("fa-lightbulb")

    // Lagre i siden at darkmode er aktiv
    localStorage.setItem("darkmode-active", "true");
}

function toggleDarkMode() {
    if (body.classList.contains("darkmode")) {
        setLightMode();
    }
    else {
        setDarkMode();
    }
}

// Legg til toggleDarkMode funksjonen til toggleDarkmode knappen. 
knapp.addEventListener("click", toggleDarkMode)

