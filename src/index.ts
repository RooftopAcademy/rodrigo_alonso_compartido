import Store from './Store';
import Catalogue from './Catalogue';
import Product from './Product';
import renderProductList from './views/renderProductList';
import renderHomeView from './views/renderHomeView';

renderHomeView();

let store: Store = new Store();
const productCard: HTMLElement = document.getElementById("js-product-card") as HTMLElement; //FIXME: No puedo tipar
const homeView: HTMLElement  = document.getElementById("home-view") as HTMLElement;
const mainTag : HTMLElement = document.getElementById("main") as HTMLElement;
// mainTag.innerHTML = renderHomeView();

homeView.addEventListener("click", (e)=>{
    e.preventDefault();
    mainTag.innerHTML = renderHomeView();
})

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