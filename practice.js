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

function inv1Prev() {
  let x = document.getElementById("inv1").src;
  document.getElementById("prevBorder").innerHTML = x;
}



//Invitation 2

//Invitation 3
function inv3Prev() {
 
  /* Access image by id and change
  the display property to block*/
  document.getElementById('inv3')
          .style.display = "block";

  document.getElementById('inv3Btn')
          .style.display = "none";
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