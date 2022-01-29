document.getElementById("about").style.display = "none";
document.getElementById("viewProjects").style.display = "none";

function changeView() {
    document.getElementById("projects").style.display = "none";
    document.getElementById("viewProjects").style.display = "block";
    document.getElementById("about").style.display = "block";
    document.getElementById("viewAbout").style.display = "none";
}

function changeView2() {
    document.getElementById("projects").style.display = "block";
    document.getElementById("viewProjects").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("viewAbout").style.display = "block";
}


