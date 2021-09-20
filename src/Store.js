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

    fetchProducts(){

        let productData = [
            {
                id:1, 
                name:"Item 1", 
                price: 1000, 
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
                imagen: "img/details-1.jpg"
            },
            {
                id:2, 
                name:"Item 2", 
                price: 1200, 
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
                imagen: "img/details-1.jpg"
            },
            {
                id:3, 
                name:"Item 3", 
                price: 1500, 
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
                imagen: "img/details-1.jpg"
            },
            {
                id:4, 
                name:"Item 4", 
                price: 1900, 
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
                imagen: "img/details-1.jpg"
            }
        ];

        productData.forEach( (item) => {
            let product = new Product();
            product.setId(item.id);
            product.setName(item.name); 
            product.setPrice(item.price);
            product.setDesription(item.description);
            product.setImage(item.imagen);

            this.catalog.addToCatalog(product);
        });
        console.log(this.getCatalog());
    }

}

