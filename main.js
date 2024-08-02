document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/api/products');
    const products = await response.json();

    const productsDiv = document.getElementById('products');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>$${product.price}</p>
            <img src="${product.imageUrl}" alt="${product.name}" width="100">
        `;
        productsDiv.appendChild(productDiv);
    });
});
