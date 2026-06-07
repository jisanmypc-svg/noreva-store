function updateCartCount() {

    let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    const counter =
    document.getElementById("cartCount");

    if (counter) {
        counter.innerText = cart.length;
    }

}

updateCartCount();

window.addEventListener(
    "pageshow",
    updateCartCount
);

window.addEventListener(
    "focus",
    updateCartCount
);
