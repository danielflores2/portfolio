document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('.filtro-btn');
  const items = document.querySelectorAll('.video-item');
  const contador = document.getElementById('contador');

  const actualizarVista = (categoria) => {
    let visibles = 0;

    items.forEach((item) => {
      const coincide = categoria === 'todos' || item.dataset.categoria === categoria;
      item.classList.toggle('hidden', !coincide);
      if (coincide) visibles++;
    });

    if (contador) contador.textContent = visibles;
  };

  botones.forEach((boton) => {
    boton.addEventListener('click', () => {
      const categoria = boton.dataset.categoria;

      // Reset estilos
      botones.forEach((b) => b.classList.remove('bg-gray-300'));
      boton.classList.add('bg-gray-300');

      actualizarVista(categoria);
    });
  });

  actualizarVista('todos'); // Inicializar
});