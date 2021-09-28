import Cart from "./Cart";
import Catalogue from "./Catalogue";
import Product from "./Product";

//NOTE: Preguntar si este tipo se puede usar fuera de esta clase.
type DatabaseProduct = {
    id: number,
    productName: string,
    image: string,
    description: string,
    price: number
}

export default class Store {

    private _cart: Cart;
    private _catalogue: Catalogue;

    constructor(){
        this._cart = new Cart();
        this._catalogue = new Catalogue();
    }

    public getCart(){
        return this._cart;
    }
    public getCatalogue(){
        return this._catalogue;
    }

    public async fetchProducts(url: string){
        
        let productData: DatabaseProduct[] = [];
        
        await fetch(url)
            .then(res => res.json())
            .then( json => productData = json )
            .catch( err => console.log("Ocurrio un error.", err));

        productData.forEach( (item) => {
            const product: Product = new Product();

            product.id = item.id;
            product.productName = item.productName;
            product.price = item.price;
            product.description = item.description;
            product.image = item.image;

            this._catalogue.add(product);
        });
    }
}

