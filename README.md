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
inv3Container
    position: absolute;
    /* float: right; */
    border-radius: 25px;
    height: 334px;
    width: 464px;
    top: 20px;
    margin: 12px;
    transform: translateX(169px);
    /* display: none;