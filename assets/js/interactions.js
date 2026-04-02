document.addEventListener('DOMContentLoaded', () => {

    // Destacar en el menú la página activa actual
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const menuLinks = document.querySelectorAll('.menu-item');
    
    menuLinks.forEach(link => {
        const targetPage = link.getAttribute('href');
        link.classList.remove('active');
        if (targetPage === currentPage || (currentPage === '' && targetPage === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Toggle de Tema Global (Persistencia)
    const savedTheme = localStorage.getItem('nexa-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const themeCheckbox = document.getElementById('theme-toggle-check');
    if (themeCheckbox) {
        themeCheckbox.checked = (savedTheme === 'light');
        
        themeCheckbox.addEventListener('change', (e) => {
            const newTheme = e.target.checked ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('nexa-theme', newTheme);
        });
    }
});
