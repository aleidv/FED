// JavaScript Document



// Losse Variabelen
var jumpAudio = new Audio('./audio/jump.m4a');
var timesUpAudio = new Audio('./audio/times_up.m4a');
var luigiAudio = new Audio('./audio/luigi_yahoh.m4a');
var marioAudio = new Audio('./audio/mario_lets_go.m4a');

var myTimeout = setTimeout(timesUp, 40000);



// TIMES RUNNING OUT SOUND
function timesUp() {
  timesUpAudio.play();
 console.log("times is almost up!!");
}



// LOG IN / SIGN UP 
var navAEl = document.querySelector("nav ul li:nth-of-type(2) a");
// console.log(navAEl);

 navAEl.addEventListener("click", function() {
    navAEl.classList.toggle("mijnJava");
 });




// MENU
var buttonEl = document.querySelector("nav:last-of-type button");
console.log(buttonEl);
var navEl2 = document.querySelector("nav:last-of-type");
console.log(navEl2);
var bodyEl = document.querySelector("body");
console.log(bodyEl);

buttonEl.addEventListener("click", function() {
   navEl2.classList.toggle("openMenu");
   if(navEl2.classList.contains("openMenu")){
      buttonEl.innerHTML = '<img src="images/close.png" alt="sluit menu">'
   } else {
      buttonEl.innerHTML = 'Menu'
   }
   console.log("test");
   bodyEl.classList.toggle("overflow");
});





// INDEX PAGINA MARIO JUMPS + SOUND
var marioImgEl = document.querySelector("main.index section img:nth-of-type(2)");
if(marioImgEl){
// console.log(marioImgEl);

 marioImgEl.addEventListener("click", function() {
   marioImgEl.classList.toggle("jump")
   jumpAudio.play();
 });
}



// DOM MANIPULATIE
if(marioImgEl){
   marioImgEl.addEventListener("dblclick", function() {
      marioImgEl.classList.toggle("styling")
      
      if(marioImgEl.classList.contains('styling')){
         marioImgEl.src = 'images/mario-bowser-furry.png'
      } else {
         marioImgEl.src = 'images/mario-party.png'
      }

});
}



// CHARACTER PAGINA MARIO & LUIGI JUMPS + SOUND
var luigiImgEl2 = document.querySelector("main.detailpagina section:first-of-type ul li img");
if(luigiImgEl2){
   // console.log(luigiImgEl2);

   luigiImgEl2.addEventListener("click", function() {
       luigiImgEl2.classList.toggle("jump");
       luigiAudio.play();
   });
}

var marioImgEl2 = document.querySelector("main.detailpagina section:first-of-type ul li:nth-of-type(2) img");
if(marioImgEl2){
   // console.log(marioImgEl2);

   marioImgEl2.addEventListener("click", function() {
       marioImgEl2.classList.toggle("jump");
       marioAudio.play();
   });
}

