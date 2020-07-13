//async..await
/**
 * async is keyword used infront of function : async function
 * async function by default may return Promise.resolve
 */
async function getDefaultData(){
    return 'Hello'; //Promise.resolve('Hello');
}
getDefaultData().then(function(res){
    console.log(res);
})
// async function getError(){
//     return Promise.reject('something went wrong');
// }
// getError().catch(function(err){
//     console.log(err);
// })
///////////////////////////////////////////////////////////////////////////////////
//callee

async function  getUser(){
      //mock data
      var user = 'admin';
      var errorMessage = 'User Not Found!';
      if(user){
          //connecting db/rest end
          //if timeout, reject
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
//caller 
async function process(){
    // getUser().then(function(res){
    //     console.log(res)
    // }).catch(function(err){
    //     console.log(err);
    // })

 try{
    var user = await getUser();
    //call login method
    var status = await login(user);
    console.log(status)
 }
 catch(err){
     console.log(err)
 }
 finally{
     console.log('finally')
 }

}
process();


