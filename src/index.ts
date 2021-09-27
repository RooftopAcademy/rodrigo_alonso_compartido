import Store from './Store';
import Catalogue from './Catalogue';
import Product from './Product';
import renderProductList from './views/renderProductList';

let store: Store = new Store();
const productCard: HTMLElement | null = document.getElementById("js-product-card"); //FIXME: No puedo tipar
let url: string = "http://demo1372636.mockable.io/api/tina";

( async () => {

    await store.fetchProducts(url);

    const catalogue: Catalogue = store.getCatalogue();
    const products: Product[] = catalogue.getAllProducts();

    products.forEach((product) => {
        if(!productCard){
            throw new Error("there is not a product card")
            return;
        }
        productCard.innerHTML += renderProductList(product);
    });
    
})();