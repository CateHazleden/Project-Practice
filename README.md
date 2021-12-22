# Project-Practice



--font types--

Elsie - google fonts

--colours--
#8b767c dark mauve
#4a525a dark dark green

--onclick js functions for buttons--
---attempts---
    function inv1Prev() {
        let x = document.getElementById("inv1").src;
        document.getElementById("prevBorder").innerHTML = x;
    }
    
-----
    function inv1Prev() {

        document.getElementById("inv1").innerHTML="<invite images/floral_2.png' />";
    }
-----

    function inv3Prev() {
    
    document.getElementById('inv3')
            .style.display = "block";

    document.getElementById('inv3Btn')
            .style.display = "none";
    }

-----
<div id="inv1Inner">

              <!-- Display Text from keyup events-->  
              <p class="invitePara"><span id="invPtrOne"></span></p>

              <p id="ptnrAnd">and</p>

              <p class="invitePara"><span id="invPtrTwo"></span></p>       

              <p id="cele">invite you to celebrate with them on</p>
            
              <p class="invitePara"><span id="wedDate"></span></p>

              <p id="preTime">at</p>

              <p class="invitePara"><span id="wedTime"></span></p>

              <p class="invitePara"><span id="wedAdd"></span></p>
            </div>