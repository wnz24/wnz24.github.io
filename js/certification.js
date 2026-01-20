// Show certificate modal
function showCertificate(certId) {
    const cert = certifications.find(c => c.id === certId);
    if (!cert) return;
    
    const modal = document.getElementById('certificateModal');
    const modalBody = document.getElementById('certModalBody');
    
    if (!modal || !modalBody) return;
    
    const skillTags = cert.skills.map(skill => 
        `<span class="cert-skill-tag">${skill}</span>`
    ).join('');
    
    // Check if image exists, otherwise show placeholder
    const imageContent = cert.image ? 
        `<img src="${cert.image}" alt="${cert.title}" onerror="this.parentElement.innerHTML='<div class=\\'cert-placeholder\\'>🏆<br>Certificate</div>'">` :
        `<div class="cert-placeholder">🏆<br>Certificate</div>`;
    
    modalBody.innerHTML = `
        <div class="cert-modal-header">
            <h2 class="cert-modal-title">${cert.title}</h2>
            <p class="cert-modal-issuer">${cert.issuer}</p>
            <p class="cert-modal-date">Issued: ${cert.date}</p>
        </div>
        
        <div class="cert-image-container">
            ${imageContent}
        </div>
        
        <div class="cert-details-grid">
            <div class="cert-detail-section">
                <h4>Credential ID</h4>
                <p class="cert-credential">${cert.credentialId}</p>
            </div>
            
            <div class="cert-detail-section">
                <h4>Skills Covered</h4>
                <div class="cert-skills-list">
                    ${skillTags}
                </div>
            </div>
        </div>
        
        <div class="cert-detail-section">
            <h4>Description</h4>
            <p>${cert.description}</p>
        </div>
        
        <div class="cert-actions-bar">
            <a href="${cert.image || '#'}" download="${cert.title}.jpg" class="cert-action-btn">
                Download Certificate
            </a>
            <a href="${cert.verifyUrl}" target="_blank" class="cert-action-btn secondary">
                Verify Online
            </a>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close certificate modal
function closeCertModal() {
    const modal = document.getElementById('certificateModal');
    if (!modal) return;
    
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Initialize certificate card listeners
function initCertifications() {
    const certCards = document.querySelectorAll('.cert-card');
    
    certCards.forEach(card => {
        const btn = card.querySelector('.view-cert-btn');
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const certId = parseInt(card.getAttribute('data-cert-id'));
                showCertificate(certId);
            });
        }
    });
    
    // Close modal on outside click
    const modal = document.getElementById('certificateModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeCertModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.getElementById('certificateModal').classList.contains('active')) {
            closeCertModal();
        }
    });
}

// Initialize on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCertifications);
} else {
    initCertifications();
}