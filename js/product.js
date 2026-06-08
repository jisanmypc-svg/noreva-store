const API_URL =
"https://script.google.com/macros/s/AKfycbxMs4s4-kMr0ziJ9I-BTFUHWhjJOCvfh4PwvoLe3LXV87zBOgMX3tqAp8prPfZETx1X/exec";

const params =
new URLSearchParams(
window.location.search
);

const productId =
params.get("id");

async function loadProduct(){

    const response =
    await fetch(API_URL);

    const products =
    await response.json();

    const product =
    products.find(
        p => p.id == productId
    );

    if(!product){

        document
        .getElementById(
            "productDetails"
        )
        .innerHTML =
        "<h2>Product Not Found</h2>";

        return;
    }

    renderProduct(product);

}

function renderProduct(product){

    document
    .getElementById(
        "productDetails"
    )
    .innerHTML = `

    <div class="product-detail">

        <img
        src="${product.image}"
        alt="${product.name}">

        <div>

            <h1>

            ${product.name}

            </h1>

            <p>

            ${product.description}

            </p>

            <h2>

            ৳ ${product.price}

            </h2>

            <button
            onclick='addToCartFromPage(
            ${JSON.stringify(product)}
            )'>

            Add To Cart

            </button>

        </div>

    </div>

    `;

}

function addToCartFromPage(product){

    let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    const existing =
    cart.find(
        item => item.id == product.id
    );

    if(existing){

        existing.quantity++;

    }else{

        product.quantity = 1;

        cart.push(product);

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();

    alert(
        "Added To Cart"
    );

}

loadProduct();