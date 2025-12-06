// Smooth scroll & active sidebar highlight
document.addEventListener("DOMContentLoaded", function() {
    const sidebarLinks = document.querySelectorAll(".sidebar nav a");
    const sections = Array.from(document.querySelectorAll(".main section"));
    const offset = 20;

    // Smooth scroll
    sidebarLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            const href = link.getAttribute("href");
            if (!href || !href.startsWith("#")) return; // ignore external links
            e.preventDefault();
            const targetId = href.replace(/.*#/, "");
            const target = document.getElementById(targetId);
            if (target) {
                window.scrollTo({
                    top: target.getBoundingClientRect().top + window.pageYOffset - 18,
                    behavior: "smooth"
                });
            }
        });
    });

    // Active link on scroll (throttled)
    let ticking = false;
    window.addEventListener("scroll", function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateActiveLink();
                ticking = false;
            });
            ticking = true;
        }
    });

    function updateActiveLink() {
        const scrollPos = window.pageYOffset;
        let currentId = null;
        for (let i = 0; i < sections.length; i++) {
            const s = sections[i];
            const top = s.getBoundingClientRect().top + window.pageYOffset - 100;
            if (scrollPos >= top) currentId = s.id;
        }
        sidebarLinks.forEach(l => l.classList.remove("active"));
        if (currentId) {
            const active = document.querySelector('.sidebar nav a[href$="#' + currentId + '"]');
            if (active) active.classList.add("active");
        }
    }

    // Initialize active link
    updateActiveLink();
});