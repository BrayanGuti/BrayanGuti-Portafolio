const cards = document.querySelectorAll('.image-container');

cards.forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;

    const rotateX = -deltaY * 10;
    const rotateY = deltaX * 10;

    const shadowX = -deltaX * 25;
    const shadowY = -deltaY * 25;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.boxShadow = `${shadowX}px ${shadowY + 20}px 40px rgba(0, 0, 0, 0.6)`;
    card.style.transition = 'transform 0.1s ease, box-shadow 0.1s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    card.style.boxShadow = `0px 10px 20px rgba(0, 0, 0, 0.9)`; 
    card.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
  });
});
