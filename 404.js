import router from "./router-dom.js";

console.log("Current slash command: " + router.current_route);

router.createRoute("github", "https://github.com/nikeedev");
