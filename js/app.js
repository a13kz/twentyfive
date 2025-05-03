document.querySelector(".menu-button").addEventListener("click", showMenu)
document.querySelector(".shop-button").addEventListener("click", showShop)
document.querySelector(".fade-layer").addEventListener("click", showShop)

//const nav = document.querySelector('nav')
//const scrollObserver = document.createElement('div')
//
//scrollObserver.setAttribute('data-scroll-observer', '')
//nav.before(scrollObserver)
//
//const navObs = new IntersectionObserver(() => {
//    nav.classList.toggle('sticking', !entries[0].isIntersecting)
//});
//
//navObs.observe(scrollObserver)

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

function addToList(){
    postMessage("item has been added to cart")
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function filterButton() {
    document.getElementById("myDropdown").classList.toggle("show");
}      

function sortItems(name){
    document.getElementById("dropbtn").innerHTML = name
}


  // Close the dropdown menu if the user clicks outside of it

/*
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        }
    }
    }
}
*/