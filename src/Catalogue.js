class Catalogue{
    constructor(){
        this.products = [];
    }
    searchById(id){
        return this.catalog.find(p => p.id == id);
    }

    getCatalogue(){
        return this.products;
    }
    add(p){
        this.products.push(p);
    }
}