// 1. Define the routes and their corresponding HTML content

const routes = [

    { path: "/", viewPath: "/views/home.html" },
    { path: "/about", viewPath: "/views/home.html" },
    { path: "/experience", viewPath: "/views/home.html" },
    { path: "/projects", viewPath: "/views/home.html" },
    { path: "/skills", viewPath: "/views/home.html" },
    { path: "/education", viewPath: "/views/home.html" },
    { path: "/contact", viewPath: "/views/home.html" }

];



// 2. The core router function (must be async now)
const router = async () => {
    // Get the current path (e.g., "/about")
    const currentPath = location.pathname; 

    // Find the matching route, or default to the Home route if not found
    let match = routes.find(route => route.path === currentPath);
    if (!match) {
        match = routes[0]; 
    }

    const appContainer = document.querySelector("#app");

    // If the route has a viewPath, fetch the HTML file
    if (match.viewPath) {
        try {
            const response = await fetch(match.viewPath);
            if (!response.ok) throw new Error(`Network response was not ok for ${match.viewPath}`);
            const html = await response.text();
            appContainer.innerHTML = html;
        } catch (error) {
            console.error("Failed to load view:", error);
            appContainer.innerHTML = "<h1>Error loading page</h1>";
        }
    } 
    // Otherwise, use the hardcoded 'view' string for your other routes
    else if (match.view) {
        appContainer.innerHTML = match.view;
    }
};



// 3. Function to update the URL and trigger the router

const navigateTo = (url) => {

    // history.pushState(state, title, url) updates the URL without reloading

    history.pushState(null, null, url);

    router();

};



// 4. Handle back/forward browser buttons

window.addEventListener("popstate", router);



// 5. Intercept link clicks on the page

document.addEventListener("DOMContentLoaded", () => {

    document.body.addEventListener("click", e => {

        // If the clicked element has the 'data-link' attribute...

        if (e.target.matches("[data-link]")) {

            e.preventDefault(); // Stop the browser from hard-reloading

            navigateTo(e.target.href); // Pass the href to our navigation function

        }

    });



    // Run the router on initial page load

    router();

});
