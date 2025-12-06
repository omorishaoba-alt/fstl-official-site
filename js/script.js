// Smooth Scroll & Active Sidebar Highlight
document.addEventListener("DOMContentLoaded", function() {
    const sidebarLinks = document.querySelectorAll(".sidebar nav a");
    const sections = document.querySelectorAll(".main section");

    // Smooth scroll for sidebar links
    sidebarLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 20,
                    behavior: "smooth"
                });
            }
        });
    });

    // Update active link on scroll
    window.addEventListener("scroll", function() {
        let currentSection = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 30;
            if (pageYOffset >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        sidebarLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    });
});