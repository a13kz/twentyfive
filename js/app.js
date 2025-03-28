document.querySelector(".menu-button").addEventListener("click", showMenu)
document.querySelector(".shop-button").addEventListener("click", showShop)

itemContainer = []

function showMenu(){
    let menu = document.querySelector("nav.menu")
    let body = document.querySelector("body")
    
    body.classList.toggle("disable-scroll")
    menu.classList.toggle("show-menu")
}

function showShop(){
    let menu = document.querySelector(".shop-menu")
    let body = document.querySelector("body")
    body.classList.toggle("disable-scroll")
    menu.classList.toggle("show-shop")

}

function addToList(){
    postMessage("item has been added to cart")
}