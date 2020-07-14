/**
 * Object creation:
 *  ->constructor pattern
 *     -new 
 *       -function - es 5
 *       -class
 *  ->literal pattern
 */

 //es 5 Object : state + methods
 function Employee(){
     //state
     this.id =1;
     this.firstname='subramanian';
     //methods
     this.calculateSalary = function(){
         return 1000;
     }
 }
 //create /instante object
 let emp = new Employee();
 console.log(emp.id,emp.firstname,emp.calculateSalary());

 //es 6 class/type script class
 /**
 class User{
     //state
     firstName:string='Subramanian';
     lastName:string ='Murugan';
     id:number = 1;
     //methods
     login():boolean{
        return true;
     }
 }
 let user = new User();
console.log(`${user.id}  ${user.firstName} ${user.lastName}`)
**/
//how to initalize the state variables
///hardcoded,after object creation , through constructors
/**
class User{
    //state
    firstName:string='Subramanian';
    lastName:string ='Murugan';
    id:number = 1;
    //methods
    login():boolean{
       return true;
    }
}
let user = new User();
//state reinitalize
user.id =90;
user.firstName="John";
user.lastName="James"
console.log(`${user.id}  ${user.firstName} ${user.lastName}`)
**/
class User{
    //state
    firstName:string;
    lastName:string;
    id:number;
    constructor(id:number,firstName:string,lastName?:string){
       //initalize through constructor
       this.id = id;
       this.firstName= firstName;
       this.lastName = lastName;
    }
    //methods
    login():boolean{
       return true;
    }
}
// //state reinitalize
let user = new User(12,'Subramanian','Murugan');
console.log(`${user.id}  ${user.firstName} ${user.lastName}`)