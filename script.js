const products = [
{
name: "Designer Suit",
price: 499,
code: "YOM015",
image: "images/yom015.jpg"
},
{
name: "Premium Suit",
price: 599,
code: "YOM014",
image: "images/yom014.jpg"
},
{
name: "Cotton Suit",
price: 1049,
code: "YOM013",
image: "images/yom013.jpg"
},
{
name: "Blue Suit",
price: 650,
code: "YOM012",
image: "images/yom012.jpg"
},
{
name: "Floral Suit",
price: 699,
code: "YOM011",
image: "images/yom011.jpg"
},
{
name: "Purple Suit",
price: 549,
code: "YOM010",
image: "images/yom010.jpg"
}
];

function showProducts(list){
const container=document.getElementById("productList");
container.innerHTML="";

list.forEach(product=>{

container.innerHTML += `
<div class="card">

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p class="price">₹${product.price}</p>

<p class="code">${product.code}</p>

<button onclick="orderProduct('${product.name}','${product.code}','${product.price}')">
Order on WhatsApp
</button>

</div>
`;

});

}

showProducts(products);

function searchProduct(){

let value=document.getElementById("search").value.toLowerCase();

let result=products.filter(product=>

product.name.toLowerCase().includes(value) ||

product.code.toLowerCase().includes(value)

);

showProducts(result);

}

function orderProduct(name,code,price){

let message=`Hello, I want to order

Product : ${name}

Code : ${code}

Price : ₹${price}`;

window.open(`https://wa.me/919507059053?text=${encodeURIComponent(message)}`);

}
