//Functions as parameter

function delay(callback){
    setTimeout(callback,1000,"Hello");
}
delay(function(data){
    console.log(data);
});
//pass arrow function
delay(data=>console.log(data));

//function declaration with arrow
const sleep = callback=>setTimeout(callback,1000,"Hello");
sleep(data=>console.log(data));

const getUser = (resolve,reject)=>{
    let user='subramanian';
    if(user){
        setTimeout(resolve,1000,user);
    }
    else{
        setTimeout(reject,1000,"Something went wrong!!!");
    }
}
getUser(res=>console.log(res),err=>console.log(err));