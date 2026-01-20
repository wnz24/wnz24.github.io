// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    initEventListeners();
});

// Load projects dynamically
function loadProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    
    projects.forEach((project, index) => {
        const card = createProjectCard(project, index);
        grid.appendChild(card);
    });
}

// Create project card
function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-project', index);
    
    const tags = project.tech.slice(0, 3).map(t => 
        `<span class="tag">${t}</span>`
    ).join('');
    
    card.innerHTML = `
        <div class="project-image">${project.icon}</div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.shortDesc}</p>
        <div class="project-tags">${tags}</div>
        <button class="view-details-btn">View Details →</button>
    `;
    
    card.addEventListener('click', () => showProjectDetails(index));
    return card;
}

// Modal functions
function showProjectDetails(index) {
    const project = projects[index];
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalBody) return;
    
    modalBody.innerHTML = generateModalContent(project);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    if (!modal) return;
    
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function generateModalContent(project) {
    const features = project.features.map(f => `<li>${f}</li>`).join('');
    const challenges = project.challenges.map(c => `<li>${c}</li>`).join('');
    const techBadges = project.tech.map(t => `<span class="tech-badge">${t}</span>`).join('');
    
    return `
        <div class="modal-header">
            <div class="modal-icon">${project.icon}</div>
            <h2 class="modal-title">${project.title}</h2>
        </div>
        
        <div class="modal-section">
            <h3>Overview</h3>
            <p>${project.fullDesc}</p>
        </div>
        
        <div class="modal-section">
            <h3>Project Details</h3>
            <p><strong style="color: #00ff88;">Role:</strong> ${project.role}</p>
            <p><strong style="color: #00ff88;">Duration:</strong> ${project.duration}</p>
            <p><strong style="color: #00ff88;">Team Size:</strong> ${project.team}</p>
        </div>
        
        <div class="modal-section">
            <h3>Key Features</h3>
            <ul>${features}</ul>
        </div>
        
        <div class="modal-section">
            <h3>Technical Challenges</h3>
            <ul>${challenges}</ul>
        </div>
        
        <div class="modal-section">
            <h3>Technology Stack</h3>
            <div class="tech-stack">${techBadges}</div>
        </div>
        
        <div class="modal-section">
            <h3>Screenshots</h3>
            <div class="screenshots">
                <div class="screenshot">📸 Screenshot 1</div>
                <div class="screenshot">📸 Screenshot 2</div>
                <div class="screenshot">📸 Screenshot 3</div>
            </div>
        </div>
        
        <div class="project-links">
            <a href="${project.github}" class="project-link">View on GitHub</a>
            <a href="${project.demo}" class="project-link">Play Demo</a>
        </div>
    `;
}

// Event listeners
function initEventListeners() {
    // CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({behavior: 'smooth'});
            }
        });
    }

    // Close modal on outside click
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Close modal with Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
e.preventDefault();
const targetId = this.getAttribute('href');
const target = document.querySelector(targetId);
if (target) {
target.scrollIntoView({ behavior: 'smooth' });
}
});
});
}