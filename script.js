/*
Navigation Toggle Script

This script handles the behavior of the navigation menu toggle button,
preventing rapid double-clicks and providing a smooth toggle effect.
It also manages the visibility of menu links and updates the overlay
based on the navigation state.

Author: [Henrry Aguiar]
Date: [10/03/2024]
*/
document.addEventListener('DOMContentLoaded', function () {
    let navOpen = false;
    let menuToggle = document.getElementById('menu-toggle');
    let hamBox = document.getElementById('hamBox');
    const menuLinks = document.querySelectorAll('.menu-link');
    let navOverlay = document.getElementById('nav-overlay');
    let lastClickTime = 0;

    // Event listener for the menu toggle button with double-click prevention
    menuToggle.addEventListener('click', function () {
        // Get the current time to track the click timestamp
        const currentTime = new Date().getTime()

        // Calculate the time since the last click
        const timeSinceLastClicked = currentTime - lastClickTime;

        // Prevent rapid double-clicks (within 500ms) to avoid unintended behavior
        if (timeSinceLastClicked <= 500) {
            return;
        }

        // Update the last click timestamp to the current time
        lastClickTime = currentTime

        // Toggle the navigation state (open/close) and trigger the visibility update
        navOpen = !navOpen;
        toggleNavVisibility(navOpen);
    });

    // Function to toggle the visibility of the navigation
    function toggleNavVisibility(navOpen) {
        hamBox.classList.toggle('hamBoxOpen', navOpen);
        updateOverlay(navOpen);
        toggleMenuLinksDelayed(navOpen);
    }

    // Function to toggle the display of menu links with a delay
    function toggleMenuLinksDelayed(navOpen) {
        if (navOpen) {
            setTimeout(() => {
                toggleMenuLink(navOpen)
            }, 1400);
        } else {
            toggleMenuLink(navOpen)
        }
    }

    // Function to toggle the display of menu links
    function toggleMenuLink(navOpen) {
        menuLinks.forEach((link) => {
            link.style.display = navOpen ? 'block' : 'none';
        })
    }

    // Function to update the overlay based on navigation state
    function updateOverlay(navOpen) {
        if (navOpen) {
            navOverlay.style.top = '0';
        } else {
            navOverlay.style.top = '-100%';
        }
    }
});
