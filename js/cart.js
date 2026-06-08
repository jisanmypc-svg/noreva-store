let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

const cartItems =
document.getElementById("cartItems");

function renderCart(){

    cartItems.innerHTML = "";

    if(cart.length === 0){

cartItems.innerHTML = `

<div class="empty-cart">

<h2>
Your Cart Is Empty
</h2>

<a href="shop.html">

<button>
Continue Shopping
</button>

</a>

</div>

`;

document
.getElementById(
"totalPrice"
).innerText = "";

return;

}

    let total = 0;

    

    cart.forEach((item,index)=>{

        const itemTotal =
        item.price *
        item.quantity;

        total += itemTotal;

        cartItems.innerHTML += `

        <div class="product-card">

            <img
            src="${item.image}">

            <h3>

                ${item.name}

            </h3>

            <p>

                ৳ ${item.price}

            </p>

            <div class="qty-box">

                <button
                onclick="decreaseQty(${index})">

                -

                </button>

                <span>

                ${item.quantity}

                </span>

                <button
                onclick="increaseQty(${index})">

                +

                </button>

            </div>

            <p>

                Total:
                ৳ ${itemTotal}

            </p>

            <button
            onclick="removeItem(${index})">

            Remove

            </button>

        </div>

        `;

    });

    document
    .getElementById(
        "totalPrice"
    ).innerText =
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

function increaseQty(index){

    cart[index].quantity++;

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    renderCart();

}

function decreaseQty(index){

    if(
        cart[index].quantity > 1
    ){

        cart[index].quantity--;

    }else{

        cart.splice(index,1);

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    renderCart();

}