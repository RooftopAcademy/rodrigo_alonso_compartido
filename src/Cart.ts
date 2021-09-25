class Cart{

    private _products: Product[];

    constructor(){
        this._products = [];
    }

    public addProduct(p: Product){
        this._products.push(p);
    }
}