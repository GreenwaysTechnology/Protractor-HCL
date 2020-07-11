
//functions 

//declaration and invocation.

//declaration
function sayHello(){
    //function body
   console.log('Hello function!!!')
}
//invoke function
sayHello();
//declare function which is having some logic

function doSomething(){
    var a =10;
    var b=20;
    var c = a + b;
    console.log("The result is" + c);
}
doSomething();
///////////////////////////////////////////////////////////////////////////////
//function parameters and args

//a and b are args
function add(a=0,b=0){
  //computation
  var c  = a + b;
  console.log("The result is " + c);

}
//10,10 are parameters
add(10,10)
//undefined , undefined
add();
///////////////////////////////////////////////////////////////////////////////////
//Return value
function substract(a=0,b=0){
    var c =  a -b;
    return c;
}
var result = substract(10,2);
console.log("Substract Result " + result);
//*************************************************************************************
function getToken(){
   var token;
   if(token){
       return token
   }
   return;
}
if(getToken()){
    console.log('Token Present')
}else{
    console.log('Token not present')
}
//tenary operator
getToken() ? console.log('Token Present') : console.log('Token not present')
////////////////////////////////////////////////////////////////////////////

