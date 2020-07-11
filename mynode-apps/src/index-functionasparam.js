//function variable declaration

/**
 * funciton is literal(value),since it is value, can be assigned to variables.
 *  ->once function is assinged, can be invoked using that variable
 * function can be passed to another function as parameter
 * function can be returned from another function.
 */

 //function declaration : anonmous functions
 var greeter = function(){
   //function body
   console.log('Greeter')
 };
 greeter();
 //pass parameters and return values
 var add = function(a=0,b=0){
     return a + b;
 }
 

console.log(add(10,10));
var x =10;
var y =90;
console.log(add(x,y));

 /************ */
 //functional style programming concepts: how to pass function as parameter.
//myfun is just variable like a and b
//myfun=function(){
    //  console.log('before each')
    // }
 function beforeEach(myfun){
     //call function using myfun
     myfun();
 }
 //call the function and pass parameter whose value is function
 beforeEach(function(){
     console.log('before each')
 });
 //passing function via variables
 var doSomething = function(){
     console.log('initalize resources before testing begins!!');
 };
 beforeEach(doSomething);
 //****************

 function describe(title,testfunc) {
    //parameter testing
    if(typeof(title) !== 'string') throw new Error('Type mismatch')
    console.log(title);
    testfunc();
 }
describe('Array', function () {
   console.log('testing  array');
});
// describe(10, function () {
//     console.log('testing  array');
// });
//////////////////////////////////////////////////////////////////////////////
//simulate it function

function it(testtitle,itfunc){
    console.log(testtitle);
    itfunc();
}
it('should return -1 when the value is not present', function () {
     console.log('array assertions');
});


















