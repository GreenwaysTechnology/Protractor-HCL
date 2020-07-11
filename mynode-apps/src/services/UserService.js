const users = require('../mock-data/UserMock');

//used to create object
function UserService(){
    console.log('UserService is initalized')

    //methods
    this.findAll = function findAll(){
         return  JSON.stringify(users.USER);
    }
}
module.exports = UserService;