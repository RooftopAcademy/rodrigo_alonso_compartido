class Catalog{
    constructor(){
        this.products = [];
    }
    searchById(id){
        return this.catalog.find(p => p.id == id);
    }

    allCatalog(){
        return this.products;
    }
    addToCatalog(p){
        this.products.push(p);
    }
}