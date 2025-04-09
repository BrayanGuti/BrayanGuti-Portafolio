document.addEventListener("mousemove", (e) => {
  const circle = document.getElementById("cursorCircle");
  if (circle) {
    circle.style.left = `${e.clientX}px`;
    circle.style.top = `${e.clientY}px`;
  }
});
