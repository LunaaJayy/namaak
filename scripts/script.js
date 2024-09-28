// JavaScript Document

let openButton = document.querySelector(".h-onderste button");
let sluitButton = document.querySelector("nav button");
let deNav = document.querySelector("nav");

const prijsSlider = document.querySelector(".prijsslider");
const procentSlider = document.querySelector(".procentslider");
let verkoopVerander = document.querySelector(".verkoop");
let vergelijkingVerander = document.querySelector(".vergelijking");
let prijsVerandering = document.querySelector(".deprijs");

let martijnBob = document.querySelector(".indeks > img:first-of-type");

let juichendFoto = document.querySelector(".indeks section:nth-of-type(5) img");
let audio = new Audio('juichenaudio.mp3');

openButton.addEventListener("click", openMenu);
sluitButton.addEventListener("click", sluitMenu);

function openMenu() {
    deNav.classList.add("toonMenu");
}

function sluitMenu() {
    deNav.classList.remove("toonMenu");
}

// hier neergezet omdat ik anders foutmelding krijg omdat deze elementen alleen
// index.html te vinden zijn..

//BESPARING BEREKENEN
let valuePrijs = prijsSlider.value
let valueProcent = procentSlider.value

berekenBesparing()

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
    let geenKomma = berekeningBesp.toFixed(0)
    prijsVerandering.textContent = geenKomma
}

// INTERSECTION OBSERVER
const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry.target, entry.isIntersecting);
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

window.addEventListener('DOMContentLoaded', (event) => { 

    const sections = Array.from(document.getElementsByClassName('section'));
   for (let section of sections) {
     const children = section.getElementsByClassName('fade-delay');
     for (let count = 0; count < children.length; count++) {
        children[count].setAttribute('style', 'transition-delay: ' + count * 0.5 + 's');
    }
  observer.observe(section);
} 
    });

document.addEventListener('keydown', kpkKomen);

function kpkKomen(event) {
    if  (event.key === 'k') {
        event.preventDefault();
        console.log('geklikt')
        martijnBob.classList.toggle("egg")
    }
}

juichendFoto.addEventListener('click', zeJuichen);

function zeJuichen() {
    juichendFoto.classList.toggle("startanimatie")
    if (juichendFoto.classList.contains("startanimatie")) {
        audio.play();
    }
}