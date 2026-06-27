// Define the content for each "page"
const views = {
    home: `
        <div class="page-view">
            <h1>Serafim Sharkov</h1>
            <h2>Computer Science @ San Francisco State University</h2>
            <p>Welcome to my portfolio. I'm a software engineer focused on backend architecture, system-level programming, and building scalable applications.</p>
        </div>
    `,
    about: `
        <div class="page-view">
            <h1>About Me</h1>
            <h2>AI & Automation Intern | Diamond Foods, LLC</h2>
            <p>I specialize in building stateless REST APIs, automated local development environments using Docker, and working with relational databases like PostgreSQL. When I'm not writing code or tackling low-level computer architecture concepts, you can usually find me rock climbing.</p>
        </div>
    `,
    projects: `
        <div class="page-view">
            <h1>Projects</h1>
            <p>Recent hackathon wins and technical builds.</p>
            <div class="project-grid">
                <div class="project-card">
                    <h3>Sortify</h3>
                    <p>Award-winning project from SF Hacks. Built with robust backend integrations.</p>
                </div>
                <div class="project-card">
                    <h3>TheraCall</h3>
                    <p>Developed at Hack Merced XI. Focuses on seamless communication and data flow.</p>
                </div>
                <div class="project-card">
                    <h3>Tractly</h3>
                    <p>Winning submission at Hornet Hacks 4.0. Features automated workflows and containerized deployment.</p>
                </div>
            </div>
        </div>
    `,
    contact: `
        <div class="page-view">
            <h1>Contact</h1>
            <p>Interested in collaborating on AI agent workflows or backend infrastructure? Let's connect.</p>
            <p style="margin-top: 1rem;"><strong>Email:</strong> your.email@example.com</p>
            <p><strong>GitHub:</strong> github.com/yourusername</p>
        </div>
    `
};

// Routing function
function router() {
    // Get the hash from the URL, remove the '#', default to 'home'
    let hash = window.location.hash.substring(1) || 'home';
    
    // Grab the main container
    const appContent = document.getElementById('app-content');
    
    // Inject the view content, or a 404 message if the route doesn't exist
    if (views[hash]) {
        appContent.innerHTML = views[hash];
    } else {
        appContent.innerHTML = `<div class="page-view"><h1>404 - Page Not Found</h1></div>`;
    }
}

// Listen for hash changes (when user clicks nav links)
window.addEventListener('hashchange', router);

// Run the router on initial load
window.addEventListener('DOMContentLoaded', router);