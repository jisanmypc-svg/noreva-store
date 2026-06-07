const products = [

{
name:"Premium Shirt",
price:"1890",
image:"https://picsum.photos/400/500"
},

{
name:"Luxury Polo",
price:"1590",
image:"https://picsum.photos/401/500"
},

{
name:"Signature Fragrance",
price:"2490",
image:"https://picsum.photos/402/500"
},

{
name:"Women's Top",
price:"1390",
image:"https://picsum.photos/403/500"
}

];

const grid = document.getElementById("productGrid");

products.forEach(product=>{

grid.innerHTML += `
<div class="product-card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>৳ ${product.price}</p>

</div>
`;

});