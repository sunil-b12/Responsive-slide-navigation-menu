/* Adding an event listener to the primaryNav variable. When the primaryNav is clicked, it will toggle
the class of open. */
const primaryNav = document.querySelector(".primary-navigation")
const hamburger = document.querySelector(".hamburger")

hamburger.addEventListener('click', ()=>{
    primaryNav.classList.toggle("open")
    hamburger.classList.toggle("toggle")
})