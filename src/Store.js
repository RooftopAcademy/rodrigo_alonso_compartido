class Store {
    constructor(){
        this.cart = new Cart();
        this.catalog = new Catalog();
    }

    getCart(){
        return this.cart;
    }
    getCatalog(){
        return this.catalog;
    }

    async fetchProducts(productCard){
       let productData;
       await fetch("http://demo1372636.mockable.io/api/tina")
                                        .then(res => res.json())
                                        .then( json => productData = json )
                                        .catch( () => console.log("Ocurrio un error"));

        productData.forEach( (item) => {
            let product = new Product();
            product.setId(item.id);
            product.setName(item.ProductName); 
            product.setPrice(item.price);
            product.setDesription(item.description);
            product.setImage(item.imagen);

            this.catalog.addToCatalog(product);
        });

        const products = store.getCatalog().allCatalog();
        products.forEach( (product) => {
        productCard.innerHTML += productDetail(product);
});

        console.log(this.getCatalog());
    }

}
