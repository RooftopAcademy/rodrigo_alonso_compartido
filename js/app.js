let store = new Store();
store.fetchProducts();

const productCard = document.getElementById("js-product-card");
const products = store.getCatalog().allCatalog();
console.log(products);
products.forEach( (product) => {
    productCard.innerHTML += productDetail(product);
});