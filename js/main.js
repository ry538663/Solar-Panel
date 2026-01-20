document.addEventListener('DOMContentLoaded', () => {
    console.log('Solar Business Website Loaded');

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    if (menuBtn && nav) {
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('show');
            // Check accessibility - aria-expanded
            const isExpanded = nav.classList.contains('show');
            menuBtn.setAttribute('aria-expanded', isExpanded);
            menuBtn.innerHTML = isExpanded ? '✕' : '☰'; // Toggle Icon
        });
    }
});
