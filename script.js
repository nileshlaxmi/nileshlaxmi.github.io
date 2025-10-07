// Theme: respect system & persist to localStorage
(function () {
    const root = document.documentElement;
    const body = document.body;
    const btn = document.getElementById('toggleTheme');
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    let dark = saved ? saved === 'dark' : prefersDark;
    function apply() {
        if (dark) {
            document.documentElement.classList.add('dark');
            btn.setAttribute('aria-pressed', 'true');
            btn.textContent = '☀️';
        } else {
            document.documentElement.classList.remove('dark');
            btn.setAttribute('aria-pressed', 'false');
            btn.textContent = '🌙';
        }
    }
    apply();
    btn.addEventListener('click', function () {
        dark = !dark;
        localStorage.setItem('theme', dark ? 'dark' : 'light');
        apply();
    });
})();

// Tiny progressive enhancement for form: show friendly message if using Formspree
(function () {
    const form = document.getElementById('contactForm');
    const msg = document.getElementById('formMessage');
    form.addEventListener('submit', function (e) {
        // If Formspree placeholder hasn't been changed, show a hint and let the user proceed
        const action = form.getAttribute('action') || '';
        if (action.includes('formspree.io/f/your-id')) {
            e.preventDefault();
            msg.textContent = 'Replace the form action with your Formspree endpoint (or your server). Example: https://formspree.io/f/abcd1234';
            msg.style.color = 'orange';
            return;
        }
        msg.textContent = 'Sending…';
        // Let the browser handle the submit (progressive)
    });
})();

// Small reveal on scroll for .fade-up
(function () {
    const els = document.querySelectorAll('.fade-up');
    const on = (el) => el.classList.add('visible');
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) { on(e.target); io.unobserve(e.target); }
            });
        }, { rootMargin: '-10% 0px' });
        els.forEach(el => io.observe(el));
    } else {
        els.forEach(on);
    }
})();