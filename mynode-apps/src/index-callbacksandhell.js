//callback nesting
//the output of one callback, will be input to another callback.
///any code will have two things : 1. success(resolve), 2.failure(rejections)
//getuser---success---login(user,success,failure)---|
//getUser---failure --error---Stop


function getUser(resolve,reject){
 //mock data
  var user = 'admin';
  var errorMessage = 'User Not Found!';
  if(user){
        setTimeout(resolve,1000,user);
  }else{
       setTimeout(reject,1000,errorMessage)
  }

}
function login(user,resolve,reject){
    var errorMessage = 'Login failed';
    var successMessage ='Login success';
    if(user === 'admin'){
          setTimeout(resolve,1000,successMessage);
    }else{
         setTimeout(reject,1000,errorMessage)
    }
   
}

//caller
getUser(function(user){
    console.log('User api is called')
    //callback nesting
     login(user,function(success){
       console.log(success)        
     },function(failure){
        console.log(failure);
     });
} , function(err){
   console.log(err);
})

