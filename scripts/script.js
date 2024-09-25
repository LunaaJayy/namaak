// JavaScript Document
console.log("hi");

let openButton = document.querySelector(".h-onderste button");
let sluitButton = document.querySelector("nav button")
let deNav = document.querySelector("nav")

openButton.addEventListener("click", openMenu)
sluitButton.addEventListener("click", sluitMenu)

function openMenu() {
    deNav.classList.add("toonMenu");
}

function sluitMenu() {
    deNav.classList.remove("toonMenu");
}