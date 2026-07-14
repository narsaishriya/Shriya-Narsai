// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Check for saved dark mode preference or default to light mode
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    if (darkModeToggle) darkModeToggle.textContent = 'Light Mode';
}

// Toggle dark mode
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
            darkModeToggle.textContent = 'Light Mode';
        } else {
            localStorage.setItem('dark-mode', 'disabled');
            darkModeToggle.textContent = 'Dark Mode';
        }
    });
}

// Scroll-triggered animations for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach((section) => {
    observer.observe(section);
});

// Observe all project cards
document.querySelectorAll('.project-card').forEach((card) => {
    observer.observe(card);
});
