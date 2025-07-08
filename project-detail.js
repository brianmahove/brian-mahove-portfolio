document.addEventListener('DOMContentLoaded', () => {
    const projectContent = document.getElementById('project-content');

    // Function to get URL parameters
    const getProjectKey = () => {
        const params = new URLSearchParams(window.location.search);
        return params.get('project');
    };

    // Function to render project details
    const renderProject = (key) => {
        const project = projectsData[key];

        if (!project) {
            projectContent.innerHTML = `<div class="project-not-found"><h2>404</h2><p>Project not found.</p><a href="index.html" class="btn btn-primary">Back to Portfolio</a></div>`;
            return;
        }

        // Set the page title
        document.title = `${project.title} | Brian Mahove`;

        // Create HTML content
        let techStackHTML = project.techStack.map(tech => `<span>${tech}</span>`).join('');
        let featuresHTML = project.keyFeatures.map(feature => `<li>${feature}</li>`).join('');
        let galleryHTML = project.gallery.map(img => `<img src="${img}" alt="${project.title} screenshot">`).join('');

        const projectHTML = `
            <a href="index.html#projects" class="back-to-projects"><i class="fas fa-arrow-left"></i> Back to Projects</a>
            <h1 class="project-detail-title">${project.title}</h1>
            <p class="project-detail-tagline">${project.tagline}</p>

            <div class="project-detail-hero-image">
                <img src="${project.heroImage}" alt="${project.title} hero image">
            </div>

            <div class="project-detail-body">
                <div class="project-detail-left">
                    <h2>About the Project</h2>
                    <p>${project.description}</p>
                    
                    <h2>Key Features</h2>
                    <ul class="feature-list">
                        ${featuresHTML}
                    </ul>
                </div>
                <div class="project-detail-right">
                    <div class="sidebar-card">
                        <h3>Tech Stack</h3>
                        <div class="tech-stack detail-stack">${techStackHTML}</div>
                    </div>
                    <div class="sidebar-card">
                        <h3>Project Links</h3>
                        <div class="project-detail-links">
                            <a href="${project.liveLink}" target="_blank" class="btn btn-primary magnetic">Live Demo <i class="fas fa-external-link-alt"></i></a>
                            <a href="${project.githubLink}" target="_blank" class="btn btn-secondary magnetic">GitHub <i class="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="project-gallery">
                <h2>Gallery</h2>
                <div class="gallery-grid">
                    ${galleryHTML}
                </div>
            </div>
        `;

        projectContent.innerHTML = projectHTML;
    };

    // --- DARK/LIGHT MODE LOGIC (copied for consistency) ---
    const themeToggle = document.getElementById('theme-toggle-checkbox');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            themeToggle.checked = false;
        } else {
             themeToggle.checked = true;
        }
    } else {
        document.body.classList.add('dark-mode');
        themeToggle.checked = false;
    }

    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
    });


    // Initial render
    const projectKey = getProjectKey();
    renderProject(projectKey);
});