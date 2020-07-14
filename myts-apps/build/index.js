//inheritance
/**
 * 1.class based
 *    -concrete class
 *    -abstract classes
 * 2.interface base
 */
class Account {
    constructor() {
        console.log('account is intialized');
    }
    //
    withdraw() {
        return 10;
    }
}
class SavingsAccount extends Account {
    constructor() {
        super();
        console.log('savings account is intialized');
    }
    //override
    withdraw() {
        return 1000 * super.withdraw();
    }
    deposit(amount) {
        return `${amount} has been deposited`;
    }
    calcualteInterest(amount, noofyears) {
        return amount * 9.5 / 100 * noofyears;
    }
}
let sb = new SavingsAccount();
console.log(sb.withdraw(), sb.calcualteInterest(1000, 2), sb.deposit(12000));
