console.log("Made with " + "%c\u2764", "color:#fc4444; font-family: ; font-size: 25px;", "by nikeedev!")


var age = document.getElementById("age");
var longprogrammingyears = document.getElementById("longprogrammingyears");
var longprogrammingmonths = document.getElementById("longprogrammingmonths");
var date = new Date();

if (date.getDate() == 12 && date.getMonth() == 11) {
    age.innerHTML = date.getFullYear() - 2007 
} else {
    age.innerHTML = date.getFullYear() - 2007 - 1;
}

var d1 = new Date(2020, 08);
let months;
months = (date.getFullYear() - d1.getFullYear()) * 12;
months -= d1.getMonth();
months += date.getMonth();

let years = date.getFullYear() - d1.getFullYear()

longprogrammingyears.innerHTML = years 
longprogrammingmonths.innerHTML = months <= 0 ? 0 : months;


