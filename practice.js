// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("modBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
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

//Invitation 1

function inv1Prev() {
  let InviteOne = document.getElementById("inv1");
  if (InviteOne.src.match('invite images/floral_2.png')) {
    InviteOne.src = 'invite images/Swirls_blur.png';
  }
  else  {
    InviteOne.src = 'invite images/floral_2.png';
  }
}

//Invitation 2

//Invitation 3


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