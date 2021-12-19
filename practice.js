// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("modBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// Clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// Clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Flex box actions

//Invitation 1/
document.getElementById("inv1Btn").addEventListener("click", openInv1);

function openInv1() {
  document.getElementById("inv1Container").src = 
  "inviteImages/floral_2.png";
}



//Invitation 2

document.getElementById("inv2Btn").addEventListener("click", openInv2);

function openInv2(){
  document.getElementById("inv2Container").src = "inviteImages/Swirls_blur.png";
}

//Invitation 3
document.getElementById("inv3Btn").addEventListener("click", openInv3);

function openInv3(){
  document.getElementById("inv3Container").src = "inviteImages/Swirls_blur.png";
}

//Key up events on invite

document.getElementById("fname").addEventListener("keyup", fnameDetail);

function fnameDetail() {
  
  let x = document.getElementById("fname").value;
  document.getElementById("invPtrOne").innerHTML = x;
}
  
document.getElementById("sname").addEventListener("keyup", snameDetail);

function snameDetail() {
  
  let x = document.getElementById("sname").value;
  document.getElementById("invPtrTwo").innerHTML = x;
}

document.getElementById("date").addEventListener("keyup", dateDetail);

function dateDetail() {
  
  let x = document.getElementById("date").value;
  document.getElementById("wedDate").innerHTML = x;
}

document.getElementById("time").addEventListener("keyup", timeDetail);

function timeDetail() {
  
  let x = document.getElementById("time").value;
  document.getElementById("wedTime").innerHTML = x;
}

document.getElementById("address").addEventListener("keyup", addDetail);

function addDetail() {
  
  let x = document.getElementById("address").value;
  document.getElementById("wedAdd").innerHTML = x;
}