var UserService = require('../services/UserService');


function UserComponent(){
    console.log('User Component is initalized')
    //create User Service instance
    this.service = new UserService();

    //define component method
    this.findAll = function(){
        //call service class method
        return this.service.findAll();
    }
   
}
module.exports = UserComponent;