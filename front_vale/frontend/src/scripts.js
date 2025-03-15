function updateQuantity(product) {
  const productId = `${product}-quantity`;
  const inputId = `${product}-update`;

  const quantityElement = document.getElementById(productId);
  const inputElement = document.getElementById(inputId);

  const newQuantity = parseInt(inputElement.value, 10);

  if (!isNaN(newQuantity)) {
      quantityElement.textContent = newQuantity;
  } else {
      alert("Por favor ingresa una cantidad válida.");
  }

  // Limpiar el campo de entrada después de la actualización
  inputElement.value = '';
}
