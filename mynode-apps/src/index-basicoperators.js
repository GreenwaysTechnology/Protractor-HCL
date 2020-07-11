
//operators
var firstName = "Subramanian";

//comparsion
if(firstName == "Subramanian"){
    console.log('Right Decision!!');
}else{
    console.log('Wrong Decision!!')
}
var counter = "10"; //10 is number, but its type is string
//string == number->Right comparsion 
// 10 == 10
// ===  compares value + type : recommended
if(counter === 10){
    console.log('Right Decision!!');

}else{
    console.log('Wrong Decision!!');
}

// || - true || true = true , false || true = true

var a =true;
var b = true;
var c = a || b;
console.log('The result is ' +c );

var value=0;
/**
 * if first operand(value) is truthy, the result(myvalue) will be  firstOperand itself
 * else second value
 */
var myvalue =  value || 10;
console.log("My value " + myvalue);







