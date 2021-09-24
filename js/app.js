let store = new Store();
const productCard = document.getElementById("js-product-card");

( async () => {
    await store.fetchProducts(productCard);
    const products = store.getCatalog().allCatalog();
    products.forEach((product) => {
        productCard.innerHTML += productDetail(product);
    });
})();

console.log(this.getCatalog());