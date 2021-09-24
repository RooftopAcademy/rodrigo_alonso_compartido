class Store {
    constructor(){
        this.cart = new Cart();
        this.catalogue = new Catalogue();
    }

    getCart(){
        return this.cart;
    }
    getCatalogue(){
        return this.catalog;
    }

    async fetchProducts(productCard){
       let productData;
       await fetch("http://demo1372636.mockable.io/api/tina")
                                        .then(res => res.json())
                                        .then( json => productData = json )
                                        .catch( err => console.err("Ocurrio un error.", err));

        productData.forEach( (item) => {
            const product = new Product();
            product.setId(item.id);
            product.setName(item.ProductName); 
            product.setPrice(item.price);
            product.setDesription(item.description);
            product.setImage(item.imagen);

            this.catalogue.add(product);
        });
    }
}

