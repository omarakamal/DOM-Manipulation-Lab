let cart = [];

function addToShoppingCart(title, price, picture) {
  let shoppingCartContainer = document.getElementById(
    "shopping-cart-container"
  );
  let totalPriceElement = document.getElementById("total-price");

  let item = cart.find((item) => item.title === title);
  if (item) {
    alert("This item is already in the shopping cart.");
    item.quantity++;
    updateCart();
    return;
  }

  let h3Element = document.createElement("h3");
  let priceElement = document.createElement("p");
  let pictureElement = document.createElement("img");
  let quantityElement = document.createElement("p");
  let shoppingItemDiv = document.createElement("div");

  shoppingItemDiv.classList.add("shopping-item");
  h3Element.innerHTML = title;
  priceElement.innerHTML = `Price: $${price}`;
  quantityElement.innerHTML = `Quantity: 1`;
  pictureElement.src = picture;
  pictureElement.alt = title;

  shoppingItemDiv.appendChild(pictureElement);
  shoppingItemDiv.appendChild(h3Element);
  shoppingItemDiv.appendChild(priceElement);
  shoppingItemDiv.appendChild(quantityElement);

  cart.push({ title, price, picture, quantity: 1 });
  shoppingCartContainer.appendChild(shoppingItemDiv);

  updateTotalPrice();
}

function updateCart() {
  let shoppingCartContainer = document.getElementById(
    "shopping-cart-container"
  );
  shoppingCartContainer.innerHTML = "";

  cart.forEach((item) => {
    let h3Element = document.createElement("h3");
    let priceElement = document.createElement("p");
    let pictureElement = document.createElement("img");
    let quantityElement = document.createElement("p");
    let shoppingItemDiv = document.createElement("div");

    shoppingItemDiv.classList.add("shopping-item");
    h3Element.innerHTML = item.title;
    priceElement.innerHTML = `Price: $${item.price}`;
    quantityElement.innerHTML = `Quantity: ${item.quantity}`;
    pictureElement.src = item.picture;
    pictureElement.alt = item.title;

    shoppingItemDiv.appendChild(pictureElement);
    shoppingItemDiv.appendChild(h3Element);
    shoppingItemDiv.appendChild(priceElement);
    shoppingItemDiv.appendChild(quantityElement);

    shoppingCartContainer.appendChild(shoppingItemDiv);
  });

  updateTotalPrice();
}

function updateTotalPrice() {
  let totalPriceElement = document.getElementById("total-price");
  let totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  totalPriceElement.innerHTML = `Total: $${totalPrice.toFixed(2)}`;
}
