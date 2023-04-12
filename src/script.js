console.log("Made with " + "%c\u2764", "color:#fc4444; font-family: ; font-size: 25px;", "by nikeedev!")


var age = document.getElementById("age");

let my_birthday = new Date(2007, 11, 12);
let dt2 = new Date();

function diff_years(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24);
    return Math.abs(Math.round(diff / 365.25));

}


age.innerText = diff_years(my_birthday, dt2);

