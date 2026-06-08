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

const totalItems =
cart.reduce(
    (sum,item)=>
    sum + item.quantity,
    0
);

counter.innerText =
totalItems;

}

}

updateCartCount();