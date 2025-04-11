const nav = document.getElementById('main-nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    nav.classList.add('nav-scrolled');
  } else {
    nav.classList.remove('nav-scrolled');
  }
});