class Product{
    constructor (name,price){
        Object.defineProperty(this,"name",{
            value:name,
            writable:false,
            enumerable:true
        });
        this.price=price;
    }
}

class ShoppingCart{
    constructor(){
        this.products=[];
    }
    addProduct(product){
        this.products.push(product)
    }
    removeProduct(productName){
        this.products=this.products.filter(p=>p.name !==productName);
    }
    calculateTotal(){
        return this.products.reduce((sum,p)=>sum+p.price,0)
    }
}
const cart=new ShoppingCart()
const p1=new Product("Laptop",50000);
const p2=new Product("phone",20000);
const p3=new Product("Headphones",2000);
cart.addProduct(p1);
cart.addProduct(p2);
cart.addProduct(p3);

console.log("Total before removal", cart.calculateTotal());
cart.removeProduct("phone");
console.log("Total after removal",cart. calculateTotal());