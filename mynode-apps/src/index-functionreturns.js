//how to return function from another function

function counter(){
   //inner function
    function increment(){
        console.log('increment')
    }
    increment();
}
counter();

//return the function outside and call it
// function mycounter(){
//     function increment(){
//         console.log('increment ---my');
//     }
//     return increment;
// }
// function mycounter(){
//     return function increment(){
//         console.log('increment ---my');
//     }
// }
function mycounter(){
        return function(){
            console.log('increment ---my');
        };
}
// var inc = mycounter();
// inc();
mycounter()();

//inner function

function describe(desctitle,descfunc){
    return function it(){
           console.log('test');
    }
    
}
describe()()

