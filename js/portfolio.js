// Portfolio Data Fetching and Filtering
document.addEventListener("DOMContentLoaded", () => {
    const portfolioGrid = document.getElementById("portfolio-grid");
    const filterButtons = document.querySelectorAll(".filter-btn");
    let projects = [];

    // 1. Fetch data from your JSON database
    fetch("data/portfolio.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            projects = data;
            displayProjects(projects); // Display all items initially
            setupFilters();
        })
        .catch(error => {
            console.error("Error loading portfolio data:", error);
            portfolioGrid.innerHTML = `<p class="error-msg">Failed to load projects. Check your JSON format.</p>`;
        });

    // 2. Function to render project cards into HTML
    function displayProjects(projectList) {
        portfolioGrid.innerHTML = ""; // Clear existing items

        if (projectList.length === 0) {
            portfolioGrid.innerHTML = `<p class="no-items">No projects found in this category.</p>`;
            return;
        }

        projectList.forEach(project => {
            const projectCard = document.createElement("div");
            projectCard.classList.add("portfolio-item", "fade-in");
            projectCard.setAttribute("data-category", project.category);

            projectCard.innerHTML = `
                <div class="portfolio-card-inner">
                    <div class="portfolio-image-wrapper">
                        <img src="${project.image}" alt="${project.title}" loading="lazy">
                        <div class="portfolio-hover-overlay">
                            <span class="view-project-text">View Project</span>
                        </div>
                    </div>
                    <div class="portfolio-info">
                        <h3>${project.title}</h3>
                        <p class="project-tag">${project.category.toUpperCase()}</p>
                    </div>
                </div>
            `;

            portfolioGrid.appendChild(projectCard);
        });

        // Trigger GSAP reveal animation for the newly rendered cards
        if (window.gsap) {
            gsap.from(".portfolio-item.fade-in", {
                opacity: 0,
                y: 30,
                stagger: 0.1,
                duration: 0.6,
                ease: "power2.out"
            });
        }
    }

    // 3. Setup event listeners for filtering buttons
    function setupFilters() {
        filterButtons.forEach(button => {
            button.addEventListener("click", (e) => {
                // Remove active class from all buttons and add to clicked button
                filterButtons.forEach(btn => btn.classList.remove("active"));
                e.target.classList.add("active");

                const filterValue = e.target.getAttribute("data-filter");

                // Filter the array
                if (filterValue === "all") {
                    displayProjects(projects);
                } else {
                    const filteredProjects = projects.filter(proj => proj.category === filterValue);
                    displayProjects(filteredProjects);
                }
            });
        });
    }
});