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

// theme toggling function removed (site is permanently dark)


window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navLink.classList.add(
      'backdrop-blur-lg',
      'shadow-lg'
    );
  } else {
    navLink.classList.remove(
      'backdrop-blur-lg',
      'shadow-lg'
    );
  }
});