let element = document.body
let btn = document.getElementById("themeBtn")

function changeTheme(){
    element.classList.toggle("darkMode")
    element.classList.toggle("lightMode")
    btn.innerText = element.classList.contains("darkMode") ? "Dark theme" : "Light theme"
}
