/**
 * Encapsulation :
 *   private,public protected ; state + methods
 *  private : within class
 * public : any where
 *  protected : private within class and public in inheritance
 * Note: default modifier is public with keyword
 */

 //public , private 
 /** 
 class User{
    //state
    public firstName:string='Subramanian';
    public lastName:string ='Murugan';
    id:number = 1;
    private token:string ='ABBB#$#A4A';
    //methods
    public login():boolean{
       if(this.token){
           return true;
       }
       return false;
    }
}
let user = new User();
console.log(`${user.id}  ${user.firstName} ${user.lastName} ${user.login()}`)
**/

//state declartion elemination in using access modifiers
//constructor args are in general is local variables , ts offers a facility that
//local variables can be converted into instance variables , by adding access modifiers
//since these variables are instance variables , we can remove initalization
class User{
      
    constructor(public id:number = 1,public firstName:string='Subramanian', public lastName:string ='Murugan';
    private token:string ='ABBB#$#A4A'){ }
    //methods
    public login():boolean{
       if(this.token){
           return true;
       }
       return false;
    }
}
let user = new User(23,'foo','bar','token');
console.log(`${user.id}  ${user.firstName} ${user.lastName} ${user.login()}`)
