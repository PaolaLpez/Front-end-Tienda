async function loadProducts() {
  try {
      // Obtener los productos desde la base de datos
      const response = await fetch('http://localhost:3000/api/productos');  // Ajusta la URL según tu API
      const products = await response.json();

      const tableBody = document.getElementById('product-table-body');
      tableBody.innerHTML = '';  // Limpiar cualquier fila anterior

      // Para cada producto, agregamos una nueva fila a la tabla
      products.forEach(product => {
          const row = document.createElement('tr');

          // Columna para el nombre del producto
          const nameCell = document.createElement('td');
          nameCell.textContent = product.nombreProducto;  // Usamos 'nombreProducto' del esquema
          row.appendChild(nameCell);

          // Columna para la cantidad actual en exhibición
          const quantityCell = document.createElement('td');
          quantityCell.textContent = product.stockExhibe;  // Usamos 'stockExhibe' para cantidad en exhibición
          row.appendChild(quantityCell);

          // Columna para actualizar la cantidad
          const updateCell = document.createElement('td');
          const input = document.createElement('input');
          input.type = 'number';
          input.id = `${product._id}-update`;  // Usamos el _id del producto como parte del id
          input.placeholder = 'Cantidad';
          input.min = 1;
          input.value = product.stockExhibe;  // Inicializamos con el valor actual de stockExhibe
          updateCell.appendChild(input);
          row.appendChild(updateCell);

          // Columna para las acciones (botón de actualización)
          const actionCell = document.createElement('td');
          const button = document.createElement('button');
          button.textContent = 'Actualizar';
          button.classList.add('update-btn');
          button.onclick = () => updateQuantity(product._id, input.value);  // Enviamos el _id y la cantidad actualizada
          actionCell.appendChild(button);
          row.appendChild(actionCell);

          // Añadir la fila al cuerpo de la tabla
          tableBody.appendChild(row);
      });
  } catch (error) {
      console.error('Error cargando productos:', error);
  }
}

// Función para actualizar la cantidad del producto
async function updateQuantity(productId, newQuantity) {
  if (isNaN(newQuantity) || newQuantity <= 0) {
      showNotification('Por favor ingresa una cantidad válida para actualizar.');
      return;
  }

  try {
      const response = await fetch(`http://localhost:3000/api/productos/${productId}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ stockExhibe: newQuantity })  // Actualizamos el campo 'stockExhibe'
      });
      const data = await response.json();
      if (data.success) {
          showNotification(`La cantidad del producto ha sido actualizada a ${newQuantity}.`);
          loadProducts();  // Recargar la lista de productos
      } else {
          showNotification('Error al actualizar la cantidad.');
      }
  } catch (error) {
      console.error('Error actualizando producto:', error);
      showNotification('Error al actualizar la cantidad.');
  }
}

// Mostrar notificación
function showNotification(message) {
  const notification = document.getElementById('notification');
  const notificationMessage = document.getElementById('notification-message');
  notificationMessage.textContent = message;
  notification.classList.remove('hidden');
  setTimeout(() => {
      notification.classList.add('hidden');
  }, 3000);
}

// Cargar productos al cargar la página
window.addEventListener('DOMContentLoaded', loadProducts);
