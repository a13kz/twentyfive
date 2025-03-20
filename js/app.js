document.querySelector(".menu-button").addEventListener("click", showMenu)
document.querySelector(".buy-item").addEventListener("click", addToList)

itemContainer = []

function showMenu(){
    let menu = document.querySelector("nav.menu")
    let body = document.querySelector("body")

    body.classList.toggle("disable-scroll")
    menu.classList.toggle("show")
}

function addToList(){
    postMessage("item has been added to cart")
}