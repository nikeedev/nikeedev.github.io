var age = document.getElementById("age");
var longprogrammingyears = document.getElementById("longprogrammingyears");
var longprogrammingmonths = document.getElementById("longprogrammingmonths");

var date = new Date();

if (date.getDate() == 12 && date.getMonth() == 11) {
    age.innerHTML = date.getFullYear() - 2007 
} else {
    age.innerHTML = date.getFullYear() - 2007 - 1;
}

var left = date.getMonth() - 8;

if (date.getFullYear() == 2020 && date.getMonth() == 8) {
    longprogrammingyears.innerHTML = date.getFullYear() - 2020;
    longprogrammingmonths.innerHTML = 0; 
} else {
    longprogrammingyears.innerHTML = date.getFullYear() - 2020 - 1;
    longprogrammingmonths.innerHTML = 12 - date.getMonth();
}

