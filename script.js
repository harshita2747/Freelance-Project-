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
      'bg-white/70',
      'backdrop-blur-lg',
      'shadow-lg'
    );
    navLink.classList.remove('bg-gradient-to-r', 'from-[#b820e6]', 'to-[#da7d20]');
  } else {
    navLink.classList.remove(
      'bg-white/70',
      'backdrop-blur-lg',
      'shadow-lg'
    );
    navLink.classList.add('bg-gradient-to-r', 'from-[#b820e6]', 'to-[#da7d20]');
  }
});