document.getElementById('addProductForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('productName').value;
    const description = document.getElementById('productDescription').value;
    const price = document.getElementById('productPrice').value;
    const imageUrl = document.getElementById('productImageUrl').value;

    const response = await fetch('/api/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description, price, imageUrl })
    });

    if (response.ok) {
        alert('Product added successfully');
    } else {
        alert('Failed to add product');
    }
});
