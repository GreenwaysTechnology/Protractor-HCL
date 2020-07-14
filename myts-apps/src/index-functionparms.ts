//functions and types: Advanced functions

//args and returns

function sayHello(name:string):string {
   //console.log(`Name ${name}`);
   return `Hello ${name}`;
}
sayHello('Subramanian');
//sayHello();
//sayHello(10)
//default args : from es6
// optional args ; from typescript ? 
function greeter(name:string,message:string='Hai',location?:string):string{
    return `${message} ${name}  ${location}`;
}
let result;
result=greeter('Bhava',"Hello")
console.log(result);
//
result=greeter('Bhava');
console.log(result);

function doStuff(myvar:string|number){
     console.log(myvar);
}
doStuff("10");
doStuff(10);
//doStuff(true);

function calculate(a:number|string,b:number|string){
    let result :any;
    if(typeof a ==='string' && typeof b ==='string'){
        result = a + b;
    }
    //dosomething
    result = a + b;
    return result;
}
    
console.log(calculate(10,"10"));
