// Función para calcular el subtotal inicial de todas las filas al cargar la página
function inicializarSubtotales() {
    const filas = document.querySelectorAll('tbody tr'); // Selecciona todas las filas del cuerpo de la tabla
  
    filas.forEach((fila) => {
      const precioUnitario = parseFloat(
        fila.querySelector('.precio-unitario').textContent.replace('$', '')
      ); // Obtiene el precio unitario como número
      const cantidad = parseInt(
        fila.querySelector('input[type="number"]').value,
        10
      ); // Obtiene la cantidad inicial
      const subtotal = precioUnitario * cantidad; // Calcula el subtotal inicial
      fila.querySelector('.subtotal').textContent = `$${subtotal.toFixed(2)}`; // Lo establece en la celda del subtotal
    });
  
    actualizarTotal(); // Calcula el total inicial
  }
  
  // Función para actualizar el subtotal cuando cambia la cantidad
  function actualizarSubtotal(input) {
    const fila = input.closest('tr'); // Encuentra la fila padre del input
    const precioUnitario = parseFloat(
      fila.querySelector('.precio-unitario').textContent.replace('$', '')
    ); // Obtiene el precio unitario como número
    const cantidad = parseInt(input.value, 10); // Obtiene la cantidad como número entero
    const subtotal = precioUnitario * cantidad; // Calcula el subtotal
    fila.querySelector('.subtotal').textContent = `$${subtotal.toFixed(2)}`; // Actualiza el subtotal
  
    actualizarTotal(); // Llama a la función para actualizar el total
  }
  
  // Función para eliminar una fila
  function eliminarFila(elemento) {
    const fila = elemento.closest('tr'); // Encuentra la fila padre del ícono
    fila.remove(); // Elimina la fila
  
    actualizarTotal(); // Llama a la función para actualizar el total
  }
  
  // Función para calcular el total general
  function actualizarTotal() {
    const subtotales = document.querySelectorAll('.subtotal'); // Selecciona todas las celdas de subtotal
    let total = 0;
  
    subtotales.forEach((celda) => {
      total += parseFloat(celda.textContent.replace('$', '')); // Suma cada subtotal al total
    });
  
    document.getElementById('total').textContent = `$${total.toFixed(2)}`; // Actualiza la celda del total
  }
  
  // Inicializa los subtotales al cargar la página
  window.onload = inicializarSubtotales;
  