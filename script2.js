// script2.js
let cartItems = [];

document.getElementById("cartButton").addEventListener("click", function() {
  document.getElementById("cart").style.right = "0";
});
document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("cart").style="display none";
  });

document.getElementById("submit").addEventListener("click", function() {
  alert("Your response has been successfully submitted.");
});

// Function to add item to cart
function addToCart(bookId) {
  let book = {}; // Create a book object to store book details
  if (bookId === 1) {
    book.title = "Camel Oil Pastel Color";
    book.author = "Available shades:48";
    book.price = 5;
    book.imageSrc = "oil-pastel.jpg";
  } else if (bookId === 2) {
    book.title = "Sticky Notes";
    book.author = "Available:Multicolored";
    book.price = 4;
    book.imageSrc = "sticky_notes.png";
  } else if (bookId === 3) {
    book.title = "Epic Stuff Friends TV Series A5";
    book.author = "Available : Combo Pack of 3 Notebook";
    book.price = 8;
    book.imageSrc = "note_book.jpg";
  }
  cartItems.push(book); // Add book object to cartItems array
  updateCart(); // Update the cart UI
}
// Function to remove item from cart
function removeFromCart(index) {
    cartItems.splice(index, 1); // Remove book object from cartItems array at given index
    updateCart(); // Update the cart UI
  }
// Function to update the cart UI
function updateCart() {
  let cartItemsElement = document.getElementById("cartItems");
  cartItemsElement.innerHTML = ""; // Clear the cart items

  let total = 0; // Variable to store total price

  // Loop through cartItems array and add cart items to the UI
  for (let i = 0; i < cartItems.length; i++) {
    let li = document.createElement("li");
    let image = document.createElement("img"); // Create image element
    
    image.src = cartItems[i].imageSrc; // Set image source based on bookId
    li.appendChild(image); // Add image to list item
    li.appendChild(document.createTextNode(cartItems[i].title +"\n" + cartItems[i].author + " - $" + cartItems[i].price));
    cartItemsElement.appendChild(li);

   
    let removeButton = document.createElement("button"); // Create "Remove" button
removeButton.style.backgroundColor = "transparent";
removeButton.style.border = "none";
removeButton.style.padding = "0"; // Set padding to 0
let removeIcon = document.createElement("i"); // Create remove icon
// removeIcon.className = "fa fa-times"; // Set class to remove icon class
removeIcon.className = "fa fa-trash";
removeIcon.style.color = "red"; // Set icon color to red
removeButton.appendChild(removeIcon); // Add remove icon to button
removeButton.addEventListener("click", function() {
  removeFromCart(i); // Call removeFromCart() function with current index
});


    li.appendChild(removeButton); // Add "Remove" button to list item
    
    total += cartItems[i].price; // Add item price to total
  }

  let totalPriceElement = document.getElementById("totalPrice");
  totalPriceElement.textContent = "Total Price: $" + total.toFixed(2); // Update total price in UI
}

// Function to handle checkout
function checkout() {
  if (cartItems.length > 0) {
    // Logic to handle checkout, e.g. sending data to a server, showing a success message, etc.
    alert("Checkout successful! Total price: $" + cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2));
    cartItems = []; // Clear the cart items after successful checkout
    updateCart(); // Update the cart UI
  } else {
    alert("Cart is empty. Add items to cart first.");
  }
}
const cartButton = document.getElementById("cartButton");
const cart = document.getElementById("cart");

cartButton.addEventListener("click", function() {
  cart.classList.toggle("open");
});

const closeButton = document.getElementById("closeButton");
closeButton.addEventListener("click", function() {
  cart.classList.remove("open");
});