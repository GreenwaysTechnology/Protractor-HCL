//Promise
/**
 * 1.create Promise object using factory apis
 * 
 */

 //callback success only
//  function getData(callback){
//    setTimeout(callback,0,"some data");
//  }
//  getData(function(data){
//      console.log(data)
//  })

//Promise success only
function getData(){
    return Promise.resolve('Some data');
}
console.log('start')
getData().then(function(res){
    console.log(res);
});
console.log('end');

//error only
function getError(){
    return Promise.reject('Some error');
}
getError().catch(function(res){
    console.log(res);
});

//how to return success/failure

function getUser(){
    //mock data
     var user = 'admin';
     var errorMessage = 'User Not Found!';
     if(user){
          return Promise.resolve(user)
     }
     return Promise.reject(errorMessage)   
   
}

function login(user){
    var errorMessage = 'Login failed';
    var successMessage ='Login success';
    if(user === 'admin'){
        return Promise.resolve(successMessage)
    }
    return Promise.reject(errorMessage)      
}
getUser()
  .then(function(res){
      console.log('user api is called!!!');
      return login(res)
  })
  .then(function(res){
      console.log(res)
  })
  .catch(function(res){
    console.log(res);
 })
 .finally(function(){
     console.log('finally')
 });
//////////////////////////////////////////////////////////////////////////////////
//Promise constructors : to convert exsiting callback apis to promise powered.

function getCustomer(){
    //mock data
     var user = 'customer';
     var errorMessage = 'Customer Not Found!';
     return new Promise(function(resolve,reject){
        if(user){
            setTimeout(resolve,2000,user);
        }else{
            setTimeout(reject,2000,errorMessage)
        }
     });
   
}
getCustomer().then(function(res){
    console.log(res);
}).catch(function(res){
    console.log(res);
 })
 .finally(function(){
     console.log('customer finally')
 });

