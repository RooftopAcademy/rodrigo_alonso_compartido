class Store {

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
        
        let productData: Product[] = [];
        
        await fetch(url)
            .then(res => res.json())
            .then( json => productData = json )
            .catch( err => console.log("Ocurrio un error.", err));

        productData.forEach( (item) => {
            const product = new Product();
            product.id = item.id;
            product.productName = item.productName;
            product.price = item.price;
            product.description = item.description;
            product.image = item.image;

            this._catalogue.add(product);
        });
    }
}

