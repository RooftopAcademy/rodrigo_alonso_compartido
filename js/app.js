let store = new Store();
const productCard = document.getElementById("js-product-card");
let url = "http://demo1372636.mockable.io/api/tina";

( async () => {

    await store.fetchProducts(url);

    const catalogue = store.getCatalogue();
    const products = catalogue.allCatalog();

    products.forEach((product) => {
        productCard.innerHTML += renderProductList(product);
    });
    
})();