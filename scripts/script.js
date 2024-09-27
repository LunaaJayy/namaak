// JavaScript Document
console.log("hi");

let openButton = document.querySelector(".h-onderste button");
let sluitButton = document.querySelector("nav button")
let deNav = document.querySelector("nav")

const prijsSlider = document.querySelector(".prijsslider")
const procentSlider = document.querySelector(".procentslider")
let verkoopVerander = document.querySelector(".verkoop")
let vergelijkingVerander = document.querySelector(".vergelijking")
let prijsVerandering = document.querySelector(".deprijs")

let valuePrijs = prijsSlider.value
let valueProcent = procentSlider.value

berekenBesparing()

openButton.addEventListener("click", openMenu)
sluitButton.addEventListener("click", sluitMenu)

function openMenu() {
    deNav.classList.add("toonMenu");
}

function sluitMenu() {
    deNav.classList.remove("toonMenu");
}

verkoopVerander.textContent = '€ ' + valuePrijs;
vergelijkingVerander.textContent = valueProcent + '%';

prijsSlider.addEventListener('input', updatePrijs)
procentSlider.addEventListener('input', updateProcent)

function updatePrijs() {
    verkoopVerander.textContent = '€ ' + this.value 
    valuePrijs = this.value
    berekenBesparing()
}

function updateProcent() {
    vergelijkingVerander.textContent = this.value + '%'
    valueProcent = this.value
    berekenBesparing()
}


function berekenBesparing() {
    let berekeningBesp = valuePrijs * valueProcent / 100 - 1525;
    console.log(berekeningBesp)
    prijsVerandering.textContent = berekeningBesp
}

