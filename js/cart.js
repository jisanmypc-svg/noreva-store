let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

const cartItems =
document.getElementById("cartItems");

function renderCart(){

cartItems.innerHTML = "";

let total = 0;

cart.forEach((item,index)=>{

total += Number(item.price);

cartItems.innerHTML += `

<div class="product-card">

<img src="${item.image}" alt="${item.name}">

<h3>${item.name}</h3>

<p>৳ ${item.price}</p>

<button onclick="removeItem(${index})">
Remove
</button>

</div>

`;

});

document.getElementById("totalPrice").innerText =
"Total: ৳ " + total;

}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

renderCart();

}

renderCart();