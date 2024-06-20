

function addToShoppingCart(title, price, picture) {
    console.log(title, price, picture);
    let shopContainer = document.getElementById("shopping-cart-container");

    let imgElement   = document.createElement("img") 
    let titleElement = document.createElement("h1");//Creamos una variable con la función de crear h1s en html
    let priceElement = document.createElement("p");
    let newDiv = document.createElement("div");
    
    imgElement.src   = picture
    titleElement.innerHTML = title
    priceElement.innerHTML = price

    newDiv.appendChild(imgElement)
    newDiv.appendChild(titleElement)
    newDiv.appendChild(priceElement)
    shopContainer.appendChild(newDiv)
    
}