var age = document.getElementById("age");

var date = new Date();

if (date.getDate() == 12 && date.getMonth() == 11) {
    age.innerHTML = date.getFullYear() - 2007 
}
