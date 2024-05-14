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
