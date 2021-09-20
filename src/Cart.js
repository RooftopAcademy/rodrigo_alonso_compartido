class Cart{
    constructor(){
        this.products = [];
    }
    addProduct(p){
        if (p instanceof Product) this.products.push(p);
        else throw new Error("El 1 debe ser de tipo producto");
    }
}