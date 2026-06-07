// REPLACE WITH YOUR APPS SCRIPT URL

const API_URL =
"https://script.google.com/macros/s/AKfycbzxKsoCcTIO27Kh9QvgT-WfHvzb7F19F17iQ8duebOh6UuUcaASjW4QudvX2MAM0A/exec";

let allProducts = [];

async function loadProducts(){

const response =
await fetch(API_URL);

const data =
await response.json();

allProducts = data;

renderProducts(data);

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

<img
src="${product.image}">

<h3>
${product.name}
</h3>

<p>
৳ ${product.price}
</p>

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

loadProducts();