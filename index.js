document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Proizvod 1", price: 29.99 },
    { id: 2, name: "Proizvod 2", price: 19.99 },
    { id: 3, name: "Proizvod 3", price: 59.99 },
    { id: 4, name: "Proizvod 4", price: 25.99 },
    { id: 5, name: "Proizvod 5", price: 30.99 },
  ];

  const cart = [];

  const ProductList = document.getElementById("product-list");
  const CartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");

  // Function to render products
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `<span>${product.name} -  ${product.price.toFixed(
      2
    )} din</span>
        <button data-id="${product.id}">DODAJ U KORPU</button>`;
    ProductList.appendChild(productDiv);
  });

  ProductList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
    }
  });
});
