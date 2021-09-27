import Product from "./Product";

export default class Catalogue{

    private _products: Product[]

    constructor(){
        this._products = [];
    }

    public add(p:Product){
        this._products.push(p);
    }

    public getAllProducts(): Product[]{
        return this._products;
    }

    public searchById(id:number): Product | undefined{
        return this._products.find(p => p.id == id);
    }

}