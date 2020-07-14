//function declaration.

//es5 old syntax
let greeter = function(){
   console.log('Greeter');
};
greeter();
//Arrow functions 
let greetMe = () => {
    //function body
    console.log('greetMe -arrow ');
 };
 greetMe();
//Flavours of arrow function
//1.if function body has only one line of code, drop {}
let sayHello = () =>console.log('sayHello '); 
sayHello();
//functions with two args,with default /optional parameters,single line of body
let sayHai = (message:string='Hai',name?:string)=>console.log(`${message} ${name}`);
sayHai('Hello','Subramanian');

//functions with return value:
let sum;
sum =():number=>{
    return 10  +10;
};
console.log(sum())

//if function body has only return statement. drop return statement and {}
sum =():number=>30+10;
console.log(sum())

//single variable parameter no type,no default, return the same: drop ()
let getStock = stock =>stock;
console.log(getStock(10))

//*********************************************************************************










