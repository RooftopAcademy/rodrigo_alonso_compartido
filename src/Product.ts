class Product{

   private _id!: number;
   private _productName!: string;
   private _price!: number;
   private _description!: string;
   private _image!: string;
   private _stock!: number;
   
   constructor(){
      this._id;
      this._productName;
      this._price;
      this._description;
      this._image;
      this._stock;
  }

  get id(){
   return this._id;
  }
  set id(v:number){
   this._id = v;
  }


  get productName(){
     return this._productName;
  }
  set productName(v:string){
     this._productName = v;
  }

  get price(){
   return this._price;
  }
  set price(v:number){
   this._price = v;
  }

  get description(){
     return this._description;
  }
  set description(v:string){
     this._description = v;
  }

  get image(){
     return this._image;
  }
  set image(v:string){
     this.image = v;
  }   

  get stock(){
     return this._stock;
  }
  set stock(v:number){
     this._stock = v;
  }
}
