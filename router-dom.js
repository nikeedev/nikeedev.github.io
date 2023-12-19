let router = {
    current_route: window.location.pathname.split("/")[1],

    // route template: { route: "github", redirect: "https://github.com/nikeedev" }
    routes: [],
}

router["createRoute"] = (route, redirect) => {
    router.routes.push({ route: route, redirect: redirect });
}

// console.log(current_route);

let id;


document.addEventListener("DOMContentLoaded", function() {
    if (document.readyState === "complete") {
        for (const route of router.routes) {
            if (route.route == router.current_route) {
                window.location.replace(route.redirect);
            }
        }
    }
});

export default router;