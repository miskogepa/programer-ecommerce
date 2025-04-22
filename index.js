document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Proizvod 1", price: 29.99 },
    { id: 2, name: "Proizvod 2", price: 19.99 },
    { id: 3, name: "Proizvod 3", price: 59.99 },
    { id: 4, name: "Proizvod 4", price: 25.99 },
    { id: 5, name: "Proizvod 5", price: 30.99 },
  ];
  

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const ProductList = document.getElementById("product-list");
  const CartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");
  if (cart.length > 0) {
    renderCart();}
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

  function addToCart(product) {
    cart.push(product);
    saveCartToLocalStorage();
    renderCart();
  }

  function renderCart() {
    CartItems.innerText = "";
    let totalPrice = 0;

    if (cart.length > 0) {
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalPrice += item.price;
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
        ${item.name} - ${item.price.toFixed(
          2
        )} din <button id="delete">DELETE</button>`;
        cartItem.querySelector("#delete").addEventListener("click", () => {
          cart.splice(index, 1);
          saveCartToLocalStorage();
          renderCart();
          if (cart.length === 0) {
            totalPriceDisplay.textContent = 0;
          }
        });
        CartItems.appendChild(cartItem);
        totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
      });
    } else {
      emptyCartMessage.classList.remove("hidden");
    }
  }
  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Korpa je prazna, ubacite proizvod!");
      return;
    } else {
      cart.length = 0;
      saveCartToLocalStorage();
      alert(`HVALA NA KUPOVINI! Ukupno: ${totalPriceDisplay.textContent} din`);
      renderCart();
      totalPriceDisplay.textContent = 0;
    }
  });

  // checkoutBtn.addEventListener("click", () => {
  //   cart.length = 0;
  //   alert("KUPLJENO");
  //   renderCart();
  //   totalPriceDisplay.textContent = 0;
  // }); ovo je bilo pre i moglo je da se kupi a da nema proizvoda u korpi

  //funkcija za pamcenje u local storage
  function saveCartToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
});
