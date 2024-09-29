# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Luna Jay de Boer

  #### Je startniveau:
  Rood

  #### Je focus:
  Surface plane
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://www.makelaarsland.nl // https://www.makelaarsland.nl/over-ons/

  #### Screenshot(s) van de eerste pagina (small screen): 
  hier de naam van de pagina  
  <img src="readme-images/makelaarsland-home.jpeg" width="375px" alt="de homepagina van makelaarsland">

  #### Screenshot(s) van de tweede pagina (small screen):
  hier de naam van de pagina  
  <img src="readme-images/makelaarsland-overons.JPG" width="375px" alt="de pagina over makelaarsland, met medewerkers">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Als ik met de voice control over de website probeer te gaan, blijft hij als ik op tab druk hangen bij de sliders die je wel omhoog en naar beneden kan controleren.

  

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van de hele pagina">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van een dynamisch deel">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Het enige wat ik heb is de HTML van de eerste pagina, het was een hoop kopieer en plak werk.
  Ik heb dus nog niet zoveel vragen omdat HTML/CSS mij goed ligt.


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Luna Jay        | Catharina          | Jilke        | Volkan           |
  | ---             | ---                | ---          | ---              |
  | Hoe kun je het  | Zelfde vraag als   | Eigen vragen | Eigen vragen     |
  | beste typografie| Luna Jay           |              |                  |
  | inladen?        |                    |              |                  |


  ### Verslag van meeting
  Dit zijn de punten/aantekeningen die ik heb opgeschreven:

  moet de eerste img en h1 van de over-ons pagina ook in section?
  heb ik nu wel gedaan, deze heb ik aan de header toegevoegd, net als bij de index pagina

  custom properties gebruiken :) eerste les!
    kan je dus ook heel makkelijk een light en dark mode toevoegen.

  box-sizing: border-box is heel handig, want als je zonder dat een margin 
  aan een element toevoegt telt dat bij de width van het element op, maar als je 
  border-box toevoegt gaat de margin/padding ipv aan de buitenkant van het object
  aan de binnenkant van het object worden toevoegt (waardoor hij in principe dus
  niet groter wordt)

  --> ipv bij de huizen dat in een li doet, kun 
    je het als article binnen een section doen

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
 De HTML/CSS van de eerste pagina is zo goed als af. Alleen de footer moet nog vormgegeven worden.
 Ik heb wel een aantal vragen wat betreft de CSS.


  ### Agenda voor meeting
  Iedereen had echt zijn eigen vragen dus gaven we elkaar de kans om deze te stellen, ik luisterde
  mee met de antwoorden die werden gegeven.


  ### Verslag van meeting
  Dit zijn wat vragen die zijn beantwoord:  

  --> ipv bij de huizen die 'te koop' staan dat je dat in een li doet, kun 
    je het als article binnen een section doen

    de a bij de reviewsection verplaats niet naar center en niet
  als er een padding of margin wordt toegevoegd.
  --dat is omdat hij display inline was en niet block

  bij 'ons woningaanbod' doet de 'object-fit: cover' het niet
  --je moest nog op de container overflow:hidden doen.

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Mijn website is eigenlijk (qua basis HTML, CSS en Javascript) af! Het enige wat ik nog moet doen is de javascript
  die gericht is op het verbeteren van service.


  ### Agenda voor meeting
  Deze agenda was niet van toepassing voor de laatste voortgangsgesprekken, we gingen vooral individueel vragen stellen.
  We waren ook later begonnen omdat niet iedereens vraag (van het vorige groepje) beantwoord was. Dit was dus echt het 
  moment voor iedereens laatste vragen.

  Ik heb erg korte vragen. Zo is er onderaan mijn index pagina een stukje dat wit is, echter zou ik dat graag weg willen halen
  omdat dat niet in de originele versie van makelaarsland zit.
    <img src="readme-images/witte-in-website.png" width="375px" alt="het witte vlake in pagina">
  
  Daarnaast heb ik een vraag over light/dark mode, op welke manier we deze in de website moeten verwerken.

  ### Verslag van meeting
  De aantekeningen die ik heb gemaakt naar aanleiding van de meeting:

  hoe haal ik het witte voor de footer weg?
  kan niet!

  Gebruik Intersection Observer voor een servicegerichte verbetering.
  Je kunt met :root de light/dark mode doen, zie hoe je het al in de code hebt gedaan.

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/easter-egg-bewijs.png" width="375px" alt="De easter egg werkt, als je op 'k' drukt komen Martijn en Bob ze tevoorschijn">
  <img src="readme-images/gridgebruik.png" width="375px" alt="Ik heb grid gebruikt in de over-ons pagina">
  <img src="readme-images/hamburgermenu.png" width="375px" alt="De hamburgermenu zit ook in mijn website verwerkt">
  <img src="readme-images/reviews-scroll.png" width="375px" alt="Je kunt bij een aantal sections ook horizontaal scrollen">
  <img src="readme-images/sliders-werken.png" width="375px" alt="De sliders werken en doen ook de juiste berekeningen">
  <img src="readme-images/darkmode.png" width="375px" alt="Er zit ook een darkmode in mijn pagina">

  ### Dit ging goed/Heb ik geleerd: 
  De sliders waren verbazingwekkend makkelijker dan ik dacht. Aan de hand van de originele pagina kon ik makkelijk het sommetje bedenken die zij hadden gebruikt om de besparing te berekenen, en na wat gepuzzel werkte dit snel bij mijn eigen pagina.

  Heel veel elementen die ik wilde toevoegen aan de hand van mijn servicegerichte website waren ook makkelijk te doen na wat opzoek werk. Gelukkig had ik ook nog veel aantekeningen gemaakt vorig jaar dus kon ik het daar ook opzoeken. Dit bijvoorbeeld met het gejuich van de icoontjes bij de reviews.


  ### Dit was lastig/Is niet gelukt:
  Helaas is de volledige vormgeving van de sliders niet gelukt wegens gebrek aan tijd, ik wilde ervoor zorgend dat het stukje dat al 'geslide' was ook groen werd. 


</details>





## Bronnenlijst

<details open>

1. De lessen

2. Image croppen:
    Cloudinary - https://cloudinary.com/guides/automatic-image-cropping/5-ways-to-crop-images-in-html-css#:~:text=with%20the%20message.-,Crop%20Using%20Width%2C%20Height%2C%20and%20Overflow%20CSS%20Properties,and%20set%20overflow%20to%20hidden.

3. Sliders stylen:
    Smash Magazine - https://www.smashingmagazine.com/2021/12/create-custom-range-input-consistent-browsers/

4. Javascript input sliders weergeven:
    OpenAI ChatGPT - https://chatgpt.com/share/66f67dc1-52d0-8012-963c-b7f4a4bb5d5e
    Shecodes - https://www.shecodes.io/athena/77658-how-to-get-the-value-of-an-input-in-javascript#:~:text=To%20get%20the%20value%20of%20an%20input%20in%20JavaScript%2C%20you,user%20in%20the%20input%20field.&text=%2F%2F%20HTML%20%3Cinput%20type%3D%22,%3B%20console.log(inputValue)%3B

5. Intersection observer:
   DEV Community - https://dev.to/jslim/fading-up-sections-using-intersection-observer-3fhj

6. Keydown event:
    Geeks for geeks - https://www.geeksforgeeks.org/how-to-create-keyboard-shortcuts-in-javascript/    

</details>