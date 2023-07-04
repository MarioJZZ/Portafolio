  const formulario = document.getElementById('formulario');
  const mensajeExitoContainer = document.getElementById('mensaje-exito-container');

  formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Realiza aquí cualquier lógica adicional necesaria para enviar el formulario
    
    // Muestra el contenedor del mensaje de éxito
    mensajeExitoContainer.style.display = 'block';
  });
