const API_URL =
"https://script.google.com/macros/s/AKfycbxMs4s4-kMr0ziJ9I-BTFUHWhjJOCvfh4PwvoLe3LXV87zBOgMX3tqAp8prPfZETx1X/exec";

const params =
new URLSearchParams(
window.location.search
);

const productId =
params.get("id");

let currentProduct = null;

async function loadProduct(){

    try{

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

        currentProduct = product;

        renderProduct(product);

    }
    catch(error){

        console.log(error);

        document
        .getElementById(
            "productDetails"
        )
        .innerHTML =
        "<h2>Failed To Load Product</h2>";

    }

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
            onclick="addCurrentProductToCart()">

            Add To Cart

            </button>

        </div>

    </div>

    `;

}

function addCurrentProductToCart(){

    if(!currentProduct){

        return;

    }

    let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    const existing =
    cart.find(
        item => item.id == currentProduct.id
    );

    if(existing){

        existing.quantity++;

    }
    else{

        const productToAdd = {
            ...currentProduct,
            quantity: 1
        };

        cart.push(productToAdd);

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