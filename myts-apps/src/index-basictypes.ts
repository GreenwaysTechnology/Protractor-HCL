//type system : basic types - string,numbers,booleans

let firstName:string ="Hello";
console.log(firstName)
firstName ="tst";
let age:number =18;
let isActive:boolean=true;

//without explicit type
//type inference: if variable is declared and intialized with
//value of some type, the same to be used later assignements
let lastName="Murugan";
//lastName=90 ; which causes error.
lastName ="M";

//with implicit undefined initally and later if you assign any type , it works like 
//vannila js.

//i want like js : syntax 1 ; but which is not readable
let salary;
salary =90;
console.log(salary);
salary ="test";
console.log(salary);

//i want like js : syntax 2 ; but which is  readable
let myvar:any;
myvar ="test";
myvar =90;





