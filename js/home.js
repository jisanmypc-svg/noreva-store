const API_URL =
"https://script.google.com/macros/s/AKfycbxMs4s4-kMr0ziJ9I-BTFUHWhjJOCvfh4PwvoLe3LXV87zBOgMX3tqAp8prPfZETx1X/exec";

async function loadFeaturedProducts(){

    try{

        const response =
        await fetch(API_URL);

        const products =
        await response.json();

        const featured =
        products.slice(0,4);

        const container =
        document.getElementById(
            "featuredProducts"
        );

        container.innerHTML = "";

        featured.forEach(product=>{

            container.innerHTML += `

            <div
class="product-card"
onclick="
window.location.href=
'product.html?id=${product.id}'
">

                <img
                src="${product.image}"
                alt="${product.name}">

                <h3>${product.name}</h3>

                <p>৳ ${product.price}</p>

            </div>

            `;

        });

    }

    catch(error){

        console.log(error);

    }

}

loadFeaturedProducts();