![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)



# LAB | localStorage Lab

<br>

<br>


  This exercise allows you to practice and apply the concepts and techniques taught in class. 

  Upon completion of this exercise, you will be able to:

  - Manipulate the dom for creating websites
  - Using localStorage to persist data
  - Switch pages based on clicking events

<br>
  <hr> 

  
  ## Steps:
- you have a homepage with listings for each product.

- In the js file we have a function called seeListing that takes 3 arguemnts:
 title, price, and picture

- when the button "see listing" is clicked the function should be called with the values for the title, price, and picture
![alt text](<Screenshot 2024-06-17 220632-1.png>)

![alt text](<Screenshot 2024-06-17 220649.png>)

- Now write the code in the seeListing function to get the values and save the value into localStorage. The key should be "listing". Remember that localStorage only takes strings.


- The last thing this function should do is relocate us to the listingPage.html. Remember to use relative pathing

- In order the seeListing() function should do the following

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