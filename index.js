document.addEventListener('DOMContentLoaded', () => {

    const products = [
        { id: 1, name: 'Product 1', price: 29.99 },
        { id: 2, name: 'Product 2', price: 19.99 },
        { id: 3, name: 'Product 3', price: 59.99 },
        { id: 4, name: 'Product 4', price: 25.99 },
        { id: 5, name: 'Product 5', price: 30.99 },
    ];

    const cart = [];

    const ProductList = document.getElementById('product-list');
    const CartItems = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart');
    const cartTotalMessage = document.getElementById('cart-total');
    const totalPriceDisplay = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkout-btn');
});