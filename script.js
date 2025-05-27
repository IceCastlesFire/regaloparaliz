// Selección de elementos
const flower = document.getElementById('flower');
const counter = document.getElementById('counter');
const counterSpan = counter.querySelector('span');
let clickCount = 0;

// Evento de clic en el corazón
flower.addEventListener('click', () => {
  clickCount++;
  counterSpan.textContent = `${clickCount} 🌸`; // Mostrar el número de clics en el contador

  // Animación de "rebote" al hacer clic
  flower.style.transform = 'scale(1.2)';
  setTimeout(() => {
    flower.style.transform = 'scale(1)';
  }, 150);

  // Crear un texto flotante según el rango de clics
  if (clickCount <= 100) {
    const floatingText = document.createElement('div');
    floatingText.classList.add('floating-heart');

    if (clickCount <= 25) {
      floatingText.textContent = 'MI CIELO 🌸';
      floatingText.classList.add('mi-cielo'); // Aplicar estilo rosa
    } else if (clickCount <= 50) {
      floatingText.textContent = 'MI NIÑA 🌸';
      floatingText.classList.add('mi-nina'); // Aplicar estilo azul clarito
    } else if (clickCount <= 75) {
      floatingText.textContent = 'MI AMOR 🌸';
      floatingText.classList.add('mi-amor'); // Aplicar estilo rojo
    } else if (clickCount <= 100) {
      floatingText.textContent = 'TE AMO ❤️';
      floatingText.classList.add('te-amo'); // Aplicar estilo rojo intenso
    }

    document.body.appendChild(floatingText);

    // Generar posiciones aleatorias dentro de la ventana
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    floatingText.style.left = `${x}px`;
    floatingText.style.top = `${y}px`;

    // Eliminar el texto después de la animación
    floatingText.addEventListener('animationend', () => {
      floatingText.remove();
    });
  }
});

// Estilo de fondo para el cuerpo
document.body.style.background = "url('/Users/yoglekchile/Desktop/regalo/fotosdejhoel/fotocorazon.jpg') no-repeat center center fixed";
document.body.style.backgroundSize = "1000% 1500%"; // Ajustar al ancho y alto de la ventana