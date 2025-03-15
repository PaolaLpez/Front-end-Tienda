// Función para manejar el envío del formulario
document.getElementById('add-lot-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Limpiar mensajes de error y éxito
  document.getElementById('message').innerHTML = '';
  document.getElementById('success-message').style.display = 'none';

  // Obtener los valores del formulario
  const productName = document.getElementById('product-name').value;
  const supplierName = document.getElementById('supplier-name').value;
  const registrationDate = document.getElementById('registration-date').value;
  const expirationDate = document.getElementById('expiration-date').value;
  const barcode = document.getElementById('barcode').value;
  const quantity = document.getElementById('quantity').value;

  // Validación simple
  if (!productName || !supplierName || !registrationDate || !expirationDate || !barcode || !quantity) {
    document.getElementById('message').innerHTML = 'Por favor complete todos los campos.';
    return;
  }

  // Si todo está bien, mostrar mensaje de éxito
  document.getElementById('success-message').style.display = 'block';
  document.getElementById('add-lot-form').reset();  // Limpiar el formulario

  // Aquí podrías agregar la lógica para guardar los datos en una base de datos o backend.
  // Por ejemplo, utilizando fetch() o XMLHttpRequest para enviar los datos al servidor.
});
