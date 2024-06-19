
// Create an empty array to store cart items
let shoppingCart = []

// Creating a new function to update the shopping cart content displayed on the webpage
function updateShoppingCartDisplay() {

//selecting HTML element with the id - shopping-cart-container and storing it in the variable
    let cartContainer = document.getElementById('shopping-cart-container');

//clearing the current value in cart items setting to an empty string 
    cartContainer.innerHTML = ''

// initializing a variable total and assigning 0 to its value. This will help to keep track of price in the cart    
    let total = 0

// Iterate over the each shopping cart items to create HTML elements

 shoppingCart.forEach(item => {

//Creating a new div element and assigning it to the cart item   
    let cartItem = document.createElement('div')

// Adding the cart-item class to the cartItem div    
    cartItem.classList.add('cart-item')

//setting the cartItem to string property/template with heading(h4), price and quantity (p) and img with src

    cartItem.innerHTML = `<img src="${item.picture}" alt="${item.title}">
        <h4>${item.title}</h4>
        <p>$${item.price} x ${item.quantity}</p>
        <p>Subtotal: $${(item.price * item.quantity).toFixed(2)}</p>`

//Appending cartItem div to the cartContainer for display in shopping cart

    cartContainer.appendChild(cartItem)

// Increment of total price by adding the subtotal of current item value

    total += item.price * item.quantity
});

// Display the total price
// New div element created and assigned to totalPriceElement - to display total price

 let totalPriceElement = document.createElement('div')


 // Adding total-price to the totalPriceElement
 totalPriceElement.classList.add('total-price')

  //setting the string property/template 
 totalPriceElement.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`

 //Appending the totalPriceElement to cartContainer
 cartContainer.appendChild(totalPriceElement)
}

// Function to add items to the shopping cart
function addToShoppingCart(title, price, picture){


// To Check if the item already exists in the cart

    let existingItem = shoppingCart.find(item => item.title === title);

    if (existingItem) {
// If item exists, increase its quantity
        existingItem.quantity += 1;
    } else {
// If item doesn't exist, add a new item to the cart
        const newItem = {
            title: title,
            price: price,
            picture: picture,
            quantity: 1
        };
        shoppingCart.push(newItem);
    }

// Update the shopping cart display to reflect the added or updated item
    updateShoppingCartDisplay();
}
