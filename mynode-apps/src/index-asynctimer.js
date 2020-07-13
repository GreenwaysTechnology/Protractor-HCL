//async programming.

//using timer

function  delay(callback){
  setTimeout(callback,1000);
}
console.log('start')
delay(function handler(){
    console.log('Delay');
});
console.log('end');

//
function handle(handler){
    setTimeout(handler,2000,"Welcome to Non blocking World!!!")
}

handle(function handler(data){
    console.log(data);
});