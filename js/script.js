/* PRODUCTS */
var addToCart1 = document.getElementById("price1");
var addToCart2 = document.getElementById("price2");
var addToCart3 = document.getElementById("price3");
var addToCart4 = document.getElementById("price4");
var cart = document.getElementById("cart-total");
var total = 0;

addToCart1.onclick = function() {
    total += 17.84;
    alert("Cell-Mate added to cart. ");
    cart.innerHTML = "Cart Total = $" + total.toFixed(2);
}
addToCart2.onclick = function() {
    total += 4.98;
    alert("Velcro added to cart.");
    cart.innerHTML = "Cart Total = $" + total.toFixed(2);
}
addToCart3.onclick = function() {
    total += 6.99;
    alert("Gift wrapping added to cart.");
    cart.innerHTML = "Cart Total = $" + total.toFixed(2);
}
addToCart4.onclick = function() {
    var e = document.getElementById("dropdown");
    var value = e.options[e.selectedIndex].value; // stores value of chosen dropdown option
    total += parseInt(value, 10);
    alert("Package Deal added to cart.");
    cart.innerHTML = "Cart Total = $" + total.toFixed(2);
}

/* CONTACT */

function submitFunc() {
    if (document.getElementById("name").value == "")
        alert("Please enter your name");
    else if (document.getElementById("email").value == "")
        alert("Please enter an email");
    else if (document.getElementById("subject").value == "")
        alert("Please enter a subject");
    else if (document.getElementById("message").value == "")
        alert("Please enter a message");
    else   
        alert("Thank you for your message!");
}
