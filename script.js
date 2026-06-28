const products = [
{ name: "YOM001", image: "yom001.jpg" },
{ name: "YOM002", image: "yom002.jpg" },
{ name: "YOM003", image: "yom003.jpg" },
{ name: "YOM004", image: "yom004.jpg" },
{ name: "YOM005", image: "yom005.jpg" },
{ name: "YOM006", image: "yom006.jpg" },
{ name: "YOM007", image: "yom007.jpg" },
{ name: "YOM008", image: "yom008.jpg" },
{ name: "YOM009", image: "yomoo9.jpg" },
{ name: "YOM010", image: "yom010.jpg" },
{ name: "YOM011", image: "yom011.jpg" },
{ name: "YOM012", image: "yom012.jpg" },
{ name: "YOM013", image: "yom013.jpg" },
{ name: "YOM014", image: "yom014.jpg" },
{ name: "YOM015", image: "yom015.jpg" }
];

function showProducts(list){
const container=document.getElementById("productList");
container.innerHTML="";

list.forEach(product=>{
container.innerHTML += `
<div class="card">
<img src="${product.image}" alt="${product.name}">
<h3>${product.name}</h3>
<button onclick="order('${product.name}')">Order on WhatsApp</button>
</div>
`;
});
}

showProducts(products);

function searchProduct(){
const value=document.getElementById("search").value.toLowerCase();

const result=products.filter(product =>
product.name.toLowerCase().includes(value)
);

showProducts(result);
}

function order(name){
const message=`Hello, I want to order ${name}`;
window.open(`https://wa.me/919507059053?text=${encodeURIComponent(message)}`);
}
