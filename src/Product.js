class Product{
    constructor(){
        this.id = Number;
        this.name = String;
        this.price = Number;
        this.description = String;
        this.category = String;
        this.imagen = String;
        this.stock = Number;
    }

    setId(n){
        this.id = n;
    }
    setName(n){
        this.name = n;
    }
    getName(){
        return this.name;
    }
    setPrice(n){
        this.price = n;
    }
    getPrice(){
        return this.price;
    }
    setDesription(n){
        this.description = n;
    }
    getDescription(){
        return this.description;
    }
    setImage(n){
        this.imagen = n;
    }
    getImage(){
        return this.imagen;
    }
}