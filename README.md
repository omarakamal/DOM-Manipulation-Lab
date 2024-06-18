![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)



# LAB | DOM Manipulation Lab

<br>

<br>


  This exercise allows you to practice and apply the concepts and techniques taught in class. 

  Upon completion of this exercise, you will be able to:

  - Manipulate the dom for creating websites
  - Using JS logic like forEach, if statements, for loops to manipulate the DOM

<br>
  <hr> 

  
  ## Steps:
- you have a homepage with listings for each product.

- In the js file we have a function called addToShoppingCart that takes 3 arguemnts:
 title, price, and picture

- when the button "Add To Shopping Cart" is clicked the function should be called with the values for the title, price, and picture


- Now write the code in the addToShoppingCart function to take the 3 arguements and store them in an object, add the newly create object to an array and then display the array onto the page


- Everytime we click the "Add To Shopping Cart" that listing should appear in the section below.

- Also display the total of the price of the items in the shopping cart

- BONUS 1: After clicking the "Add To Shopping Cart" button check that the item isnt already in the cart. IF it is then alert the user that they already added the item to the shopping cart

- BONUS 2: The user Should be able to add an item twice

    1. set the localStorage with the 3 argumenets **HINT** remember we can only store strings in local storage
    2. redirect the user to the listingPage.html **HINT** remember the relative pathing


- in the listingPage.js file you should see a function called showListing()

- This function is called upon the page loading with the event listener already set up

- This function should get the listing value from localStroage and display it on the page for the user to see

- The showListing() Function should do the following IN ORDER:

    1. Get the listing from the localStorage and store it in a variable **HINT** Remember we stored the object in the localStorage as a String. TURN IT BACK TO AN OBJECT

    2. Get the div with id one-item-container using getElementById or querySelector or any other method youd like

    3. Create 3 elements **Hint createElement()**: img, h2, p

    4. change the src of the image you just created to the image from the localStorage

    5. change the innerHTML of the h2 to the title from localStorage

    6. change the innerHTML of the p tag to the price of the item from localStorage

    7. append all of these elements to the page as the children of the one-item-container.

    8. Celebrate because you are Finished 🎉🥳💃🕺