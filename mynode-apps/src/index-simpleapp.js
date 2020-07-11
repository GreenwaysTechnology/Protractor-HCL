//index--->UserComponent--->UserService
//Ui 
var UserComponent = require('./components/UserComponent');

//flow
function bootApp(){
  //create Component
  console.log('User UI is initalized!!!');
  var component = new UserComponent();
  //call component findAll method
  console.log(component.findAll());
}
bootApp();
