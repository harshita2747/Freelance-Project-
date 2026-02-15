// Site uses only dark theme; no automatic theme switching.
const navbar = document.getElementById("navbar");
const navLink = document.getElementById("navLink");
const mobileMenu = document.getElementById("mobileMenu");

function openMenu() {
    mobileMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
    mobileMenu.style.transform = 'translateX(0)';
}




window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // keep navbar styling, but remove the gradient pill so background shows through
        navbar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        // add subtle outline/border to navbar when scrolled
        navbar.classList.add('border-b', 'border-gray-200', 'dark:border-white/20');
        if (navLink) {
            navLink.classList.remove('bg-gradient-to-r', 'from-[#b820e6]', 'to-[#da7d20]','dark:border');
            navLink.classList.add('bg-transparent');
        }
    } else {
        // at top: restore gradient on the nav pill
        navbar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        // remove outline at top
        navbar.classList.remove('border-b', 'border-gray-200', 'dark:border-white/20');
        if (navLink) {
            navLink.classList.remove('bg-transparent');
            navLink.classList.add('bg-gradient-to-r', 'from-[#b820e6]', 'to-[#da7d20]');
        }
    }
});