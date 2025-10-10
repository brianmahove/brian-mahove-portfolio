// // project-detail.js
// document.addEventListener('DOMContentLoaded', () => {
//     const projectContent = document.getElementById('project-content');

//     // Function to get URL parameters
//     const getProjectKey = () => {
//         const params = new URLSearchParams(window.location.search);
//         return params.get('project');
//     };

//     // Function to render project details
//     const renderProject = (key) => {
//         const project = projectsData[key];

//         if (!project) {
//             projectContent.innerHTML = `<div class="project-not-found"><h2>404</h2><p>Project not found.</p><a href="index.html" class="btn btn-primary">Back to Portfolio</a></div>`;
//             return;
//         }

//         // Set the page title
//         document.title = `${project.title} | Brian Mahove`;

//         // Create HTML content
//         let techStackHTML = project.techStack.map(tech => `<span>${tech}</span>`).join('');
//         let featuresHTML = project.keyFeatures.map(feature => `<li>${feature}</li>`).join('');
//         let galleryHTML = project.gallery.map(img => `<img src="${img}" alt="${project.title} screenshot">`).join('');

//         const projectHTML = `
//             <a href="index.html#projects" class="back-to-projects"><i class="fas fa-arrow-left"></i> Back to Projects</a>
//             <h1 class="project-detail-title">${project.title}</h1>
//             <p class="project-detail-tagline">${project.tagline}</p>

//             <div class="project-detail-hero-image">
//                 <img src="${project.heroImage}" alt="${project.title} hero image">
//             </div>

//             <div class="project-detail-body">
//                 <div class="project-detail-left">
//                     <h2>About the Project</h2>
//                     <p>${project.description}</p>
                    
//                     <h2>Key Features</h2>
//                     <ul class="feature-list">
//                         ${featuresHTML}
//                     </ul>
//                 </div>
//                 <div class="project-detail-right">
//                     <div class="sidebar-card">
//                         <h3>Tech Stack</h3>
//                         <div class="tech-stack detail-stack">${techStackHTML}</div>
//                     </div>
//                     <div class="sidebar-card">
//                         <h3>Project Links</h3>
//                         <div class="project-detail-links">
//                             <a href="${project.liveLink}" target="_blank" class="btn btn-primary magnetic">Live Demo <i class="fas fa-external-link-alt"></i></a>
//                             <a href="${project.githubLink}" target="_blank" class="btn btn-secondary magnetic">GitHub <i class="fab fa-github"></i></a>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div class="project-gallery">
//                 <h2>Gallery</h2>
//                 <div class="gallery-grid">
//                     ${galleryHTML}
//                 </div>
//             </div>
//         `;

//         projectContent.innerHTML = projectHTML;
//     };

//     // --- DARK/LIGHT MODE LOGIC (copied for consistency) ---
//     const themeToggle = document.getElementById('theme-toggle-checkbox');
//     const currentTheme = localStorage.getItem('theme');

//     if (currentTheme) {
//         document.body.classList.add(currentTheme);
//         if (currentTheme === 'dark-mode') {
//             themeToggle.checked = false;
//         } else {
//              themeToggle.checked = true;
//         }
//     } else {
//         document.body.classList.add('dark-mode');
//         themeToggle.checked = false;
//     }

//     themeToggle.addEventListener('change', function() {
//         if (this.checked) {
//             document.body.classList.remove('dark-mode');
//             document.body.classList.add('light-mode');
//             localStorage.setItem('theme', 'light-mode');
//         } else {
//             document.body.classList.remove('light-mode');
//             document.body.classList.add('dark-mode');
//             localStorage.setItem('theme', 'dark-mode');
//         }
//     });


//     // Initial render
//     const projectKey = getProjectKey();
//     renderProject(projectKey);
// });


// project-detail.js
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
        let galleryHTML = project.gallery.map((img, index) => 
            `<img src="${img}" alt="${project.title} screenshot ${index + 1}" data-index="${index}" class="gallery-image">`
        ).join('');

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

            <!-- Lightbox Modal -->
            <div class="lightbox" id="lightbox">
                <div class="lightbox-content">
                    <button class="lightbox-close" id="lightbox-close" aria-label="Close lightbox">
                        <i class="fas fa-times"></i>
                    </button>
                    <button class="lightbox-nav lightbox-prev" id="lightbox-prev" aria-label="Previous image">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button class="lightbox-nav lightbox-next" id="lightbox-next" aria-label="Next image">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                    <div class="lightbox-image-container">
                        <img id="lightbox-image" src="" alt="">
                    </div>
                    <div class="lightbox-counter" id="lightbox-counter"></div>
                </div>
            </div>
        `;

        projectContent.innerHTML = projectHTML;

        // Initialize gallery functionality
        initGallery(project.gallery);
    };

    // Gallery functionality
    const initGallery = (galleryImages) => {
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightbox-image');
        const lightboxClose = document.getElementById('lightbox-close');
        const lightboxPrev = document.getElementById('lightbox-prev');
        const lightboxNext = document.getElementById('lightbox-next');
        const lightboxCounter = document.getElementById('lightbox-counter');
        const galleryImagesElements = document.querySelectorAll('.gallery-image');

        let currentImageIndex = 0;
        const totalImages = galleryImages.length;

        // Function to open lightbox
        const openLightbox = (index) => {
            currentImageIndex = index;
            lightboxImage.src = galleryImages[currentImageIndex];
            updateCounter();
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        };

        // Function to close lightbox
        const closeLightbox = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        };

        // Function to navigate to next image
        const nextImage = () => {
            currentImageIndex = (currentImageIndex + 1) % totalImages;
            lightboxImage.src = galleryImages[currentImageIndex];
            updateCounter();
        };

        // Function to navigate to previous image
        const prevImage = () => {
            currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
            lightboxImage.src = galleryImages[currentImageIndex];
            updateCounter();
        };

        // Function to update counter
        const updateCounter = () => {
            lightboxCounter.textContent = `${currentImageIndex + 1} / ${totalImages}`;
        };

        // Click event for gallery images
        galleryImagesElements.forEach((img, index) => {
            img.addEventListener('click', () => {
                openLightbox(index);
            });
        });

        // Lightbox controls
        lightboxClose.addEventListener('click', closeLightbox);
        lightboxNext.addEventListener('click', nextImage);
        lightboxPrev.addEventListener('click', prevImage);

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;

            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    prevImage();
                    break;
                case 'ArrowRight':
                    nextImage();
                    break;
            }
        });

        // Swipe navigation for touch devices
        let touchStartX = 0;
        let touchEndX = 0;

        lightbox.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });

        lightbox.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        // Mouse swipe for desktop
        let mouseStartX = 0;
        let mouseEndX = 0;
        let isMouseDown = false;

        lightbox.addEventListener('mousedown', e => {
            isMouseDown = true;
            mouseStartX = e.clientX;
        });

        lightbox.addEventListener('mouseup', e => {
            if (!isMouseDown) return;
            
            isMouseDown = false;
            mouseEndX = e.clientX;
            
            const swipeDistance = mouseEndX - mouseStartX;
            const swipeThreshold = 50;
            
            if (Math.abs(swipeDistance) > swipeThreshold) {
                if (swipeDistance > 0) {
                    prevImage();
                } else {
                    nextImage();
                }
            }
        });

        // Handle swipe
        const handleSwipe = () => {
            const swipeThreshold = 50;
            const swipeDistance = touchEndX - touchStartX;

            if (Math.abs(swipeDistance) > swipeThreshold) {
                if (swipeDistance > 0) {
                    prevImage();
                } else {
                    nextImage();
                }
            }
        };

        // Close lightbox when clicking on the background
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    };

    // --- DARK/LIGHT MODE LOGIC ---
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