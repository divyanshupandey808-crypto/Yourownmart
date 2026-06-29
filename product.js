const params = new URLSearchParams(window.location.search);

const code = params.get("code");

const product = products.find(p => p.name === code);

const details = document.getElementById("productDetails");

if(product){

details.innerHTML = `
<img src="${product.image}" alt="${product.name}">

<h2>${product.name}</h2>

<p><strong>Category:</strong> ${product.category}</p>

<p>Premium Quality Product</p>

<button onclick="order('${product.name}')">
Order on WhatsApp
</button>
`;

}else{

details.innerHTML = "<h2>Product Not Found</h2>";

}
