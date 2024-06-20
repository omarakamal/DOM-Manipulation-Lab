let shoppingCart = document.getElementById("shopping-cart-container");

function addToShoppingCart(title, price, picture) {
    console.log(title, price, picture);

 
    const existingProducts = [...shoppingCart.getElementsByClassName('img-container')].filter(element => {
        return element.querySelector('h3.prod').innerText === title;
    });

    if (existingProducts.length < 1) {
    
        let newItem = document.createElement('div');
        newItem.classList.add('img-container');

        const newTitle = document.createElement('h3');
        newTitle.classList.add('prod');
        newTitle.innerText = title;

        const newPrice = document.createElement('p');
        newPrice.classList.add('price');
        newPrice.innerText = parseFloat(price).toFixed(2);

        const newImage = document.createElement('img');
        newImage.classList.add('prod', 'listing-images');
        newImage.src = picture;

        let quantity = document.createElement('p');
        quantity.classList.add('quantity');
        quantity.innerText = 1;

        newItem.appendChild(newImage);
        newItem.appendChild(newTitle);
        newItem.appendChild(newPrice);
        newItem.appendChild(quantity);

        shoppingCart.appendChild(newItem);

    } else {
        
        const divElement = existingProducts[0]; 
        divElement.querySelector('p.quantity').innerText++;
        divElement.querySelector('p.price').innerText = (parseFloat(price).toFixed(2)*divElement.querySelector('p.quantity').innerText).toFixed(2);
    }
}