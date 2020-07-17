//export statment uses {} to import 
import {firstName,lastName,city,sayHello} from './mylib';
//export default , which does not use {}
import LoginPage from './page/login.page';


console.log(firstName,lastName,city,sayHello());

async function start(){
  let lgPage = new LoginPage();
  let result = await lgPage.getTextElement();
  console.log(result);
}
start();