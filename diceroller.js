// Javascript file for Dice Roller application

//Dice rolling function
function RollDice() {
    document.getElementById("d1").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("d2").value = Math.floor(Math.random()*6) + 1;
    CheckDoubles(document.getElementById("d1").value, document.getElementById("d2").value);
    var d1 = Number(document.getElementById("d1").value);
    var d2 = Number(document.getElementById("d2").value);
    document.getElementById("result").value = d1 + d2
}

//Only displays doubles message if d1 and d2 are equal
function CheckDoubles(x, y) {
    if (x == y)
        document.getElementById("doubles").innerHTML = "Doubles, you get another roll!";
    else
    document.getElementById("doubles").innerHTML = "";
}