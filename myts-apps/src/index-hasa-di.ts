

//has-a : dependency injection

class Product{
    constructor(public name:string='ProductName'){ }
}
class Order{
    
    //Order has a product
    constructor(public orderId:number=1, public product:Product){
    }

}
//di
let order = new Order(2,new Product());
console.log(order);