// VARIABLES

const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDom = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItem = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const ProductDom = document.querySelector(".product-center");


//CART
//We'll create an empty array for the cart which will handle all the cart information

let cart=[

];

//GETTING THE PRODUCTS
//It will be responsible for getting the products locally

class products{
    getProducts(){
        fetch('products.json')
    }
}


//DISPLAY PRODUCTS
//We'll have a UI class that will be responsible for displaying the products

class UI{

}


//LOCAL STORAGE
//We'll also be needing actual storage

class storage{

}


//EVENT LISTENER
//We'll then set up Event Listner and use the arrow function to call it back

document.addEventListener("DOMContentLoaded",()=>{
    const ui = new UI();
    const products = new Products();

})