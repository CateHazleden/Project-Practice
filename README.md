# Project-Practice



--font types--

Elsie Swish - google fonts - inv1 names uc
Molle - google fonts - inv2 names lc
Aladin - google fonts - inv3 names

--colours--
    inv1
#8b767c dark mauve
#4a525a dark dark green

    inv2


--reset button--
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button


--upper case fname sname inv1--
https://www.w3schools.com/jsref/jsref_touppercase.asp

--alt font styles--

function stripesFonts() {  

 let changeFont = document.getElementsByClassName("invInner");  *change table from id to class
  
    for (let i = 0; i < changeFont.length; i++) {
      changeFont[i].style.fontFamily= "Molle";
      changeFont[i].style.fontSize= "50px";
      changeFont[i].style.color= "#4a525a";
    }
  }
html
button onclick stripesFonts()

--------------------------------------
OPTION 2

function flowersFont() {
        
  document.getElementById("invInner").classList.remove("springStyle");
  document.getElementById("invInner").classList.remove("artStyle");
  document.getElementById("invInner").classList.add("invInner-default");
}

function stripesFont() {
    
    document.getElementById("invInner").classList.remove("invInner-default");
    document.getElementById("invInner").classList.remove("artStyle");
    document.getElementById("invInner").classList.add("springStyle");
     
}

function swirlsFont() {
    document.getElementById("invInner").classList.remove("invInner-default");
    document.getElementById("invInner").classList.remove("springStyle");
    document.getElementById("invInner").classList.add("artStyle");
}

-------------------------------------
OPTION 3
html
<button class="stylebutton" onclick="changeStyle(0,'Elsie Swash','#' )">Bouquet</button>
<button class="stylebutton" onclick="changeStyle(1,'Trirong, serif','black' )">Racing to the Alter</button>
<button class="stylebutton" onclick="changeStyle(2,'Playfair Display', 'white')">Dizzy in Love</button>

js

let backgrounds = ['url("inviteImages/floral_2.png")','url("inviteImages/stripes_edit.png")','url("inviteImages/Swirls_blur.png")' ] ;

function changeStyle(image, font, color){
    document.getElementById("card").style.backgroundImage =backgrounds[image];

    document.getElementById("initial").style.fontFamily =font ;
    document.getElementById("invitation").style.fontFamily =font;
    document.getElementById("firstname").style.fontFamily =font;
    document.getElementById("lastname").style.fontFamily =font;
    document.getElementById("weddingdate").style.fontFamily =font;
    document.getElementById("weddinglocation").style.fontFamily =font;

    document.getElementById("card").style.color =color;
    document.getElementById("initial").style.color =color;
    document.getElementById("invitation").style.color =color;
    document.getElementById("firstname").style.color =color;
    document.getElementById("lastname").style.color =color;
    document.getElementById("weddingdate").style.color =color;
    document.getElementById("weddinglocation").style.color =color;
}