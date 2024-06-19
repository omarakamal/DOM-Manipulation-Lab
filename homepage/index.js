

// ADDING EVENT LISTENER TO BUTTONS ON THE PRODUCTS

let productsListed = document.querySelector('.products > #products-container')

let productElements = productsListed.getElementsByClassName('img-container')

let copiedProducts = [...productElements]

console.log(productElements)

console.log('*** *** ***')

console.log(copiedProducts)

copiedProducts.forEach(element => {
    const buttonElement = element.querySelector('button')

    if (buttonElement) {
        buttonElement.addEventListener('click', () => {
            const title = element.querySelector('h3').innerHTML
            const price = element.querySelector('p').innerHTML
            const picture = element.querySelector('.listing-images').src
            addToShoppingCart(title, price, picture)
        })
    }
})

// INITIALIZING FUNCTION THAT WILL BE CALLED ON CLICK EVENT ON THE PRODUCT
// FUNCTION WILL ADD THE CLICKED PRODUCT TO SHOPPING CART

let quantityCount = 0

function addToShoppingCart(title, price, picture){
    console.log(title, price, picture)


    let containerForShoppings = document.querySelector('.shopping-cart-section > #shopping-cart-container')

    // CHECK FROM THE SHOPPING-CART-CONTAINER DIV IF THERE ARE ANY DIV(S)
    // INSIDE IT THAT HAS AS h3 THE TITLE OF THE ITEM TO BE ADDED    
    
    let foundChild = null

    if (Array.from(containerForShoppings.children).some(child => {
        if(child.localName === 'div' && child.querySelector('h3').innerHTML === title) {
            foundChild = child
            return true
        }
        return false
    })) {

        // BONUS 1
        alert('Item already in the shopping cart')

        // BONUS 2
        quantityCount++
        foundChild.querySelector('h5').innerHTML = quantityCount.toString()
    }
    else 
    {    

        let productsDiv = document.createElement('div')
        productsDiv.class = 'shopping-cart-product'

        titleElement = document.createElement('h3')
        priceElement = document.createElement('p')
        imageElement = document.createElement('img')
    
        titleElement.innerHTML = title
        priceElement.innerHTML = price
        imageElement.src = picture

        quantityElement = document.createElement('h5')
        quantityElement.style.color = 'red'
        quantityCount = 1
        quantityElement.innerHTML = quantityCount.toString()
    
        productsDiv.appendChild(titleElement)
        productsDiv.appendChild(priceElement)
        productsDiv.appendChild(imageElement)
        productsDiv.appendChild(quantityElement)
    
        console.log(productsDiv)
    
        containerForShoppings.appendChild(productsDiv)

    }
    

    let updatedPrice = price

    updateTotalPrice(updatedPrice)
}


// ADDING TOTAL PRICE OF SHOPPING CART

let displayingTotalPrice = document.createElement('p')

displayingTotalPrice.id = 'total-price'
displayingTotalPrice.style.display = 'none'
displayingTotalPrice.innerHTML = '$'

const shoppingsDiv = document.querySelector('.shopping-cart-section > #shopping-cart-container')

shoppingsDiv.parentNode.insertBefore(displayingTotalPrice, shoppingsDiv)

let total = 0

function updateTotalPrice(priceOfProduct) {

    // let priceOfTheProduct = productsDiv.querySelector('p')
    console.log(priceOfProduct)
    if(priceOfProduct) {
        let priceText = priceOfProduct.slice(1)
        let priceAsNumber = parseFloat(priceText)
        if (!isNaN(priceAsNumber)) {
            total += priceAsNumber
        }
    }

    displayingTotalPrice.style.display = 'block'
    displayingTotalPrice.innerHTML = `$${total.toFixed(2)}`
}
