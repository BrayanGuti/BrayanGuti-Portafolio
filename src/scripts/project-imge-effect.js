const cards = document.querySelectorAll('.image-container');

cards.forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // posición X dentro del elemento
    const y = e.clientY - rect.top;  // posición Y dentro del elemento

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = (x - centerX) / centerX; // rango -1 a 1
    const deltaY = (y - centerY) / centerY;

    const rotateX = -deltaY * 10; // invertir para que sea intuitivo
    const rotateY = deltaX * 10;

    // sombra ajustada dinámicamente según el ángulo
    const shadowX = -deltaX * 25;
    const shadowY = -deltaY * 25;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.boxShadow = `${shadowX}px ${shadowY + 20}px 40px rgba(0, 0, 0, 0.6)`;
    card.style.transition = 'transform 0.1s ease, box-shadow 0.1s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    card.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
  });
});