document.querySelector(".menu-button").addEventListener("click", showMenu)


function showMenu(){
    let menu = document.querySelector("nav.menu")
    let body = document.querySelector("body")

    body.classList.toggle("disable-scroll")
    menu.classList.toggle("show")
}