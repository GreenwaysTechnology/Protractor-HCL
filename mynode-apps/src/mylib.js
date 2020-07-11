
var firstName = 'foo';

//code
//share code via exports keyword
exports.doSomething =  function (){
    console.log('doSomething')
};
exports.saySomething = function(message){
    console.log(message);
}
exports.calculate = function(a=1,b=2){
    return a + b;
}
//simple variable is packed and returned
exports.appName = 'Protractor app';

//object 

exports.address =  {
    city: 'coimbatore'
};
