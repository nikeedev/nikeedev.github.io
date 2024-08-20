const registerServiceWorker = async () => {
    if ("serviceWorker" in navigator) {
        try {
            const registration = await navigator.serviceWorker.register("/sw.js");
            if (registration.installing) {
                console.log("Service worker installing");
            } else if (registration.waiting) {
                console.log("Service worker installed");
            } else if (registration.active) {
                console.log("Service worker active");
            }
        } catch (error) {
            console.error(`Registration failed with ${error}`);
        }
    }
};

// yep here is the hello command
console.log("%cHi! I see you are looking at the code (or maybe you accidentally opened the console...) so you are up to something here...anyway...publish any issues you if you find any on github (login required (free)): https://github.com/nikeedev/nikeedev.github.io!", "font-size: 20px; font-weight: 900;")

// registerServiceWorker();

let theme = localStorage.getItem("theme");
if (theme == null) {
    theme = "Original";
    localStorage.setItem("theme", theme);
}

let mainColor = "";
let backColor = "";
let textColor = "";

document.documentElement.style.setProperty("--text-color", "var(--main-color)");
document.documentElement.style.setProperty("--link-menubar", "var(--back-color)");
document.documentElement.style.setProperty("--link-color", "var(--main-color)");
document.documentElement.style.setProperty("--name", "var(--back-color)");
document.documentElement.style.setProperty("--top-color", "var(--main-color)");

if (theme == "Original") {
    mainColor = "#6271f7";
    backColor = "#282828";
} else if (theme == "blueorange") {
    mainColor = "#ffbb46";
    backColor = "#1d2ec4";
} else if (theme == "pistachio") {  
    mainColor = "#8affab";  
    backColor = "#282828";
} else if (theme == "darksunset") {
    mainColor = "#ff5c1f80";
    backColor = "#ff5c1f";
    textColor = "#ffffff";


    document.documentElement.style.setProperty("--text-color", textColor);
    document.documentElement.style.setProperty("--link-menubar", textColor);
    document.documentElement.style.setProperty("--link-color", textColor);
    document.documentElement.style.setProperty("--name", textColor);
    
    document.querySelectorAll(".menubar a").forEach(el => el.style.backgroundColor = backColor);
}

document.documentElement.style.setProperty("--main-color", mainColor);
document.documentElement.style.setProperty("--back-color", backColor);
