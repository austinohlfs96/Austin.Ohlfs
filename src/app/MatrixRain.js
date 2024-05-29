// MatrixRain.js
import React, { useEffect } from 'react';

const MatrixRain = () => {
  useEffect(() => {
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>?/\;:!@#$%^&*(){}[]'.split('');
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = Array.from({ length: columns }, () => 1);

    const draw = () => {
      // Semi-transparent background
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Semi-transparent text
      ctx.fillStyle = 'rgba(0, 216, 255, 0.6)'; // Adjust alpha value for transparency
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50); // Adjusted interval for slower drops

    return () => {
      clearInterval(interval);
    };
  }, []); // Empty dependency array to run the effect only once

  return <canvas id="matrix"></canvas>;
};

export default MatrixRain;
