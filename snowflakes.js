document.addEventListener('mousemove', (e) => {
  const flake = document.createElement('span');
  flake.textContent = '❄';
  flake.style.cssText = `
    position: fixed;
    left: ${e.clientX}px;
    top: ${e.clientY}px;
    pointer-events: none;
    font-size: ${10 + Math.random() * 14}px;
    color: #a8d8f0;
    opacity: 1;
    transform: translate(-50%, -50%);
    transition: transform 1s ease-out, opacity 1s ease-out;
    z-index: 9999;
  `;
  document.body.appendChild(flake);
  requestAnimationFrame(() => {
    flake.style.transform = `translate(${-50 + (Math.random() - 0.5) * 60}%, ${-50 + 40 + Math.random() * 40}px) rotate(${Math.random() * 360}deg)`;
    flake.style.opacity = '0';
  });
  setTimeout(() => flake.remove(), 1000);
});
