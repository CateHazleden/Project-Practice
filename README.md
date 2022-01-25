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
OPTION 1
html
button onclick stripesFonts()

js

function stripesFonts() {  

 let changeFont = document.getElementsByClassName("invInner");  *change table from id to class
  
    for (let i = 0; i < changeFont.length; i++) {
      changeFont[i].style.fontFamily= "Molle";
      changeFont[i].style.fontSize= "50px";
      changeFont[i].style.color= "#4a525a";
    }
  }


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
***OPTION 3***
html
button onclick stripesFonts()


js

[ 'invPtrOne', 'invPtrTwo' ].forEach(stripesFonts) {

    document.getElementById( "stripesFonts" ).style.color = "red";

});

--------------------------------------
tested js for fontchange

***test 1***
const cf1 = document.getElementById("inv2Btn");
cf1.addEventListener("click", arrayOne);

let arrayOne = ['invPtrOne', 'invPtrTwo'];
arrayOne.forEach(a => {
  a.style.fontFamily = 'Molle', cursive;
});