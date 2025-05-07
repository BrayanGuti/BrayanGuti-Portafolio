import { useEffect, useRef } from 'react';

export default function AboutMeCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let nodes = [];
    let mouse = { x: null, y: null };
    let animationFrameId;

    function resizeCanvas() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function initNodes(count = 50) {
      nodes = Array.from({ length: count }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: 2 + Math.random() * 2
      }));
    }

    function drawLines() {
      nodes.forEach((a, i) => {
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(58, 124, 165, ${1 - dist / 120})`;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        if (mouse.x && mouse.y) {
          const dx = a.x - mouse.x;
          const dy = a.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139, 183, 211, ${1 - dist / 150})`;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
            a.vx += (mouse.x - a.x) * 0.0001;
            a.vy += (mouse.y - a.y) * 0.0001;
          }
        }
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1;
        if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1;
        ctx.beginPath();
        ctx.fillStyle = "#3a7ca5";
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      drawLines();
      animationFrameId = requestAnimationFrame(animate);
    }

    resizeCanvas();
    initNodes();
    animate();

    canvas.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    canvas.addEventListener("mouseleave", () => {
      mouse.x = null;
      mouse.y = null;
    });

    window.addEventListener("resize", () => {
      resizeCanvas();
      initNodes();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas ref={canvasRef} id="neural-net-canvas" />
  );
}
