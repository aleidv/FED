// JavaScript Document


// AUDIO VARIABELEN
var jumpAudio = new Audio('./audio/jump.m4a');
var timesUpAudio = new Audio('./audio/times_up.m4a');
var luigiAudio = new Audio('./audio/luigi_yahoh.m4a');
var marioAudio = new Audio('./audio/mario_lets_go.m4a');

var myTimeout = setTimeout(timesUp, 50000);

// Roept timesUp audio aan en speelt geluid af
function timesUp() {
  timesUpAudio.play();
}


// ROTATES LOG IN / SIGN UP LINK
// Zoekt in de DOM naar element en geeft er een variabele aan
var navAEl = document.querySelector("nav ul li:nth-of-type(2) a");

// Zet een click event op de a in de navigatie en voegt een class toe
 navAEl.addEventListener("click", function() {
    navAEl.classList.toggle("mijnJava");
});


// UITSCHUIF MENU
// Zoekt in de DOM naar element en geeft er een variabele aan
var buttonEl = document.querySelector("nav:last-of-type button");
var navEl2 = document.querySelector("nav:last-of-type");
var bodyEl = document.querySelector("body");

// Zet een click event op de button en voegt een class toe aan de navigatie
buttonEl.addEventListener("click", function() {
   navEl2.classList.toggle("openMenu");

   // Kijkt of de navigatie de class "openMenu" bevat
   // Zo ja, veranderd de tekst in de html in een img
   // Zo nee, veranderd de tekst in de html naar "Menu"
   if(navEl2.classList.contains("openMenu")){
      buttonEl.innerHTML = '<img src="images/close.png" alt="sluit menu">'
   } else {
      buttonEl.innerHTML = 'Menu'
   }
   // Voegt een class toe aan de body
   bodyEl.classList.toggle("overflow");
});


// MARIO ANIMATIE + GELUID
// Zoekt in de DOM naar element en geeft er een variabele aan
var marioImgEl = document.querySelector("main.index section img:nth-of-type(2)");

// Kijkt of de afbeelding gevonden wordt op de pagina
// Zet een click event op de afbeelding, voegt een class toe en speelt een geluid af
if(marioImgEl){
   marioImgEl.addEventListener("click", function() {
      marioImgEl.classList.toggle("jump")
      jumpAudio.play();
   });
}


// DOM MANIPULATIE
// Kijkt of de afbeelding gevonden wordt op de pagina
// Zet een dubbel click event op de afbeelding en voegt een class toe
if(marioImgEl){
   marioImgEl.addEventListener("dblclick", function() {
      marioImgEl.classList.toggle("styling")
      
      // Kijkt of de afbeelding de class "styling" bevat
      // Zo ja, veranderd de afbeelding uit de DOM in een andere afbeelding
      // Zo nee, veranderd de afbeelding naar de originele afbeelding
      if(marioImgEl.classList.contains('styling')){
         marioImgEl.src = 'images/mario-bowser-furry.png'
      } else {
         marioImgEl.src = 'images/mario-party.png'
      }
   });
}


// MARIO & LUIGI ANIMATIE + GELUID
// Zoekt in de DOM naar element en geeft er een variabele aan
var luigiImgEl2 = document.querySelector("main.detailpagina section:first-of-type ul li img");

// Kijkt of de afbeelding gevonden wordt op de pagina
// Zet een click event op de afbeelding, voegt een class toe en speelt een geluid af
if(luigiImgEl2){
   luigiImgEl2.addEventListener("click", function() {
      luigiImgEl2.classList.toggle("jump");
      luigiAudio.play();
   });
}

var marioImgEl2 = document.querySelector("main.detailpagina section:first-of-type ul li:nth-of-type(2) img");

if(marioImgEl2){
   marioImgEl2.addEventListener("click", function() {
      marioImgEl2.classList.toggle("jump");
      marioAudio.play();
   });
}