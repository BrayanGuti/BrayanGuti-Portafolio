document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const themeToggle = document.getElementById('theme-toggle');
  const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
  
  // Toggle del menú móvil
  hamburger.addEventListener('click', function() {
    this.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    
    // Bloquear el scroll del body cuando el menú está abierto
    if (mobileMenu.classList.contains('open')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
  
  // Cerrar menú al hacer clic en un enlace
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
  
  // Sincronizar el toggle de tema entre desktop y móvil
  if (themeToggle && mobileThemeToggle) {
    mobileThemeToggle.addEventListener('click', function() {
      themeToggle.click();
    });
    
    themeToggle.addEventListener('click', function() {
      // Actualizar el icono en el menú móvil para que coincida
      mobileThemeToggle.textContent = this.textContent;
    });
  }
});