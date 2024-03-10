document.addEventListener('DOMContentLoaded', function() {
    let navOpen = false;
    let menuToggle = document.getElementById('menu-toggle');
    let hamBox = document.getElementById('hamBox');
    const menuLinks = document.querySelectorAll('.menu-link');
    let navOverlay = document.getElementById('nav-overlay');
    let lastClickTime = 0;

    menuToggle.addEventListener('click', function() {
        const currentTime = new Date().getTime()
        const timeSinceLastClicked = currentTime - lastClickTime;
        if (timeSinceLastClicked <= 500) {
            return;
        }

        lastClickTime = currentTime
        navOpen = !navOpen;
        toggleNavVisibility(navOpen);
    });

    function toggleNavVisibility(navOpen) {
        hamBox.classList.toggle('hamBoxOpen', navOpen);
        updateOverlay(navOpen);
        toggleMenuLinksDelayed(navOpen);
    }

    
    function toggleMenuLinksDelayed(navOpen) {
        if (navOpen) {
            setTimeout(() => {
                toggleMenuLink(navOpen)
            }, 1350);
        } else {
            toggleMenuLink(navOpen)
        }
        
    }
    function toggleMenuLink(navOpen) {
        menuLinks.forEach((link) => {
            link.style.display = navOpen ? 'block' : 'none';
        })
    }

    function updateOverlay(navOpen) {
        if (navOpen) {
            navOverlay.style.top = '0';
        } else {
            navOverlay.style.top = '-100%';
        }
    }
});
