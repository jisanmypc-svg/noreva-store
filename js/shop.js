// REPLACE WITH YOUR APPS SCRIPT URL

const API_URL =
"https://script.google.com/macros/s/AKfycbxMs4s4-kMr0ziJ9I-BTFUHWhjJOCvfh4PwvoLe3LXV87zBOgMX3tqAp8prPfZETx1X/exec";

let allProducts = [];

async function loadProducts(){

const response =
await fetch(API_URL);

const data =
await response.json();

allProducts = data;

const params =
new URLSearchParams(
window.location.search
);

const selectedCategory =
params.get("category");

if(selectedCategory){

document
.getElementById("category")
.value =
selectedCategory;

const filtered =
allProducts.filter(
product =>
product.category === selectedCategory
);

renderProducts(filtered);

}
else{

renderProducts(allProducts);

}

}

function renderProducts(products){

const grid =
document.getElementById(
"productGrid"
);

grid.innerHTML = "";

products.forEach(product=>{

grid.innerHTML += `

<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p>৳ ${product.price}</p>

<button onclick="addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')})">
Add To Cart
</button>

</div>

`;

});

}

document
.getElementById("search")
.addEventListener(
"input",
filterProducts
);

document
.getElementById("category")
.addEventListener(
"change",
filterProducts
);

function filterProducts(){

const search =
document
.getElementById(
"search"
)
.value
.toLowerCase();

const category =
document
.getElementById(
"category"
)
.value;

const filtered =
allProducts.filter(product=>{

const matchSearch =
product.name
.toLowerCase()
.includes(search);

const matchCategory =
!category ||
product.category === category;

return (
matchSearch &&
matchCategory
);

});

renderProducts(filtered);

}

function addToCart(product){

let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

cart.push(product);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCartCount();

alert("Added to Cart");

}

function updateCartCount(){

let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

const counter =
document.getElementById(
"cartCount"
);

if(counter){

counter.innerText =
cart.length;

}

}

updateCartCount();

loadProducts();