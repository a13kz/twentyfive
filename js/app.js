document.querySelector(".menu-button").addEventListener("click", showMenu)
document.querySelector(".shop-button").addEventListener("click", showShop)
document.querySelector(".fade-layer").addEventListener("click", showShop)

function showMenu(){
    let menu = document.querySelector("nav.menu")
    let body = document.querySelector("body")
    
    body.classList.toggle("disable-scroll")
    menu.classList.toggle("show-menu")
}

function showShop(){
    let menu = document.querySelector(".shop-menu")
    let body = document.querySelector("body")
    let layer = document.querySelector(".fade-layer")
    
    layer.classList.toggle("show-shop")
    body.classList.toggle("disable-scroll")
    menu.classList.toggle("show-shop")

}

function filterButton() {
    document.getElementById("myDropdown").classList.toggle("show")
}      

function sortItems(name){
    document.getElementById("dropbtn").innerHTML = name
}