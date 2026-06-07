const API_URL =
"https://script.google.com/macros/s/AKfycbzxKsoCcTIO27Kh9QvgT-WfHvzb7F19F17iQ8duebOh6UuUcaASjW4QudvX2MAM0A/exec";

let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

let total = 0;

cart.forEach(item=>{

total += Number(item.price);

});

document
.getElementById(
"checkoutTotal"
)
.innerText =
"Total: ৳ " + total;

function generateOrderId(){

return "NRV-" +
Date.now();

}

document
.getElementById(
"checkoutForm"
)
.addEventListener(
"submit",
async function(e){

e.preventDefault();

const order = {

order_id:
generateOrderId(),

date:
new Date()
.toLocaleString(),

customer_name:
document
.getElementById(
"name"
)
.value,

phone:
document
.getElementById(
"phone"
)
.value,

address:
document
.getElementById(
"address"
)
.value,

note:
document
.getElementById(
"note"
)
.value,

products:
JSON.stringify(cart),

total:
total

};

try{

const response =
await fetch(API_URL,{

method:"POST",

headers:{
"Content-Type":
"application/json"
},

body:
JSON.stringify(order)

});

const result =
await response.json();

if(result.success){

alert(
"Order Placed Successfully"
);

localStorage.removeItem(
"cart"
);

window.location.href =
"index.html";

}

}catch(error){

alert(
"Order Failed"
);

console.log(error);

}

});