//inheritance
/**
 * 1.class based
 *    -concrete class
 *    -abstract classes
 * 2.interface base
 */

 interface InterestCalculator{
     calcualteInterest(amount:number,noofyears:number):number;
 }

 abstract class Account{
    constructor(){
        console.log('account is intialized')
    }
    abstract deposit(amount:number):string;
    //
    protected withdraw():number{
        return 10;
    }
 }
 class SavingsAccount extends Account implements InterestCalculator{
    constructor(){
        super();
        console.log('savings account is intialized')
    }
    //override
    public withdraw():number{
        return 1000 * super.withdraw();
    }
    public deposit(amount:number):string{
         return `${amount} has been deposited`
    }
    calcualteInterest(amount:number,noofyears:number):number{
           return amount * 9.5/100 * noofyears;
    }
 }
 let sb = new SavingsAccount();
 console.log(sb.withdraw(), sb.calcualteInterest(1000,2),sb.deposit(12000));