class Catalogue{

    private _products: Array<Product>

    constructor(){
        this._products = [];
    }

    public add(p:Product){
        this._products.push(p);
    }

    public getCatalogue(): Array<Product>{
        return this._products;
    }

    public searchById(id:number): Product | undefined{
        return this._products.find(p => p.id == id);
    }

}