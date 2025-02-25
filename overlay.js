const overlay = document.querySelector('.overlay');

        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            overlay.style.maskImage = `radial-gradient(circle 200px at ${x}px ${y}px, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)`;
            overlay.style.webkitMaskImage = overlay.style.maskImage; // Для Safari
        });