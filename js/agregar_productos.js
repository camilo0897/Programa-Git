document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const productFields = {
        id: form.querySelector('input[placeholder="ID del producto"]'),
        name: form.querySelector('input[placeholder="Nombre del producto"]'),
        description: form.querySelector('input[placeholder="Descripción del producto"]'),
        category: form.querySelector('input[placeholder="Categoría"]'),
        price: form.querySelector('input[placeholder="Precio"]'),
        quantity: form.querySelector('input[placeholder="Cantidad"]'),
        warehouse: form.querySelector('select'),
    };

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Validate form
        if (!validateForm(productFields)) {
            alert("Por favor, complete todos los campos correctamente.");
            return;
        }

        // Simulate product addition
        const newProduct = {
            id: productFields.id.value,
            name: productFields.name.value,
            description: productFields.description.value,
            category: productFields.category.value,
            price: parseFloat(productFields.price.value),
            quantity: parseInt(productFields.quantity.value),
            warehouse: productFields.warehouse.value
        };

        console.log("Producto agregado:", newProduct);
        alert("Producto agregado con éxito!");

        // Clear the form
        form.reset();
    });

    function validateForm(fields) {
        for (const key in fields) {
            if (fields[key].value.trim() === "") {
                return false;
            }

            // Validate price and quantity
            if (key === 'price' && isNaN(fields[key].value)) {
                return false;
            }
            if (key === 'quantity' && isNaN(fields[key].value)) {
                return false;
            }
        }
        return true;
    }
});
