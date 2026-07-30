// 1. Define the routes and their corresponding HTML content

const routes = [

    { path: "/", view: "<h1>Home</h1><p>Welcome to my portfolio!</p>" },

    { path: "/about", view: "<h1>About</h1><p>Learn more about me.</p>" },

    { path: "/projects", view: "<h1>Projects</h1><p>Check out my latest projects.</p>" },

    { path: "/skills", view: "<h1>Skills</h1><p>Here are my key skills.</p>" },

    { path: "/education", view: "<h1>Education</h1><p>Learn about my educational background.</p>" },

    { path: "/contact", view: "<h1>Contact</h1><p>Send me a message.</p>" }

];



// 2. The core router function

const router = () => {

    // Get the current path (e.g., "/about")

    const currentPath = location.pathname; 



    // Find the matching route, or default to the Home route if not found (404 fallback)

    let match = routes.find(route => route.path === currentPath);

    if (!match) {

        match = routes[0]; 

    }



    // Inject the view content into the DOM

    document.querySelector("#app").innerHTML = match.view;

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
