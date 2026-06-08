const API_URL =
"https://script.google.com/macros/s/AKfycbxMs4s4-kMr0ziJ9I-BTFUHWhjJOCvfh4PwvoLe3LXV87zBOgMX3tqAp8prPfZETx1X/exec";

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
cart.map(item =>
item.name + " (৳" + item.price + ")"
).join(" | "),

total:
total

};

try {

const url =
API_URL +

"?action=order" +

"&order_id=" +
encodeURIComponent(order.order_id)

+

"&date=" +
encodeURIComponent(order.date)

+

"&customer_name=" +
encodeURIComponent(order.customer_name)

+

"&phone=" +
encodeURIComponent(order.phone)

+

"&address=" +
encodeURIComponent(order.address)

+

"&note=" +
encodeURIComponent(order.note)

+

"&products=" +
encodeURIComponent(order.products)

+

"&total=" +
encodeURIComponent(order.total);

await fetch(url);

alert(
"Order Placed Successfully"
);

localStorage.removeItem(
"cart"
);

window.location.href =
"index.html";

}
catch(error){

console.log(error);

alert(
"Order Failed"
);

}

});