/**
 * Object creation:
 *  ->constructor pattern
 *     -new 
 *       -function - es 5
 *       -class
 *  ->literal pattern
 */
//literal pattern : to represent models biz objects like product,payment,customer

//Object types ;
/**
 * 1.class as type 
 * 2.interface as type
 * 3.type key word
 */

 //class type
//  class Employee{
//      id:number;
//      name:string;
//      isActive?:boolean;
//  }
// interface Employee{
//      id:number;
//      name:string;
//      isActive?:boolean; 
// }

type Employee = {
     id:number;
     name:string;
     isActive?:boolean;
}

const emp:Employee = {
    id:1,
    name:'Subramanian',
    isActive: true
}
console.log(emp)

const emp1:Employee = {
    id:1,
    name:'Subramanian',
}


