// Animación suave al hacer clic en los enlaces del menú
// Loader
window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  loader.style.display = 'none';
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Mensaje cuando se envía el formulario
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Te responderé pronto.');
    this.reset();
  });

  // Máquina de escribir
const text = 'Roberth, Developer Full Stack';
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById('typewriter').innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

window.addEventListener('DOMContentLoaded', typeWriter);

  