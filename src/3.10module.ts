{
    /* Encapsulation -> It means hide or restric the access of the data members and methods from outside the class.
     It is a way of restricting access to certain parts of an object, so that only the object itself can modify its internal state. */
    // In TypeScript, encapsulation is achieved through the use of access modifiers.

    class BankAccount {
        constructor(public readonly accountNumber: number, public accountHolderName: string, protected _balance: number = 0) {
            this.accountNumber = accountNumber;
            this.accountHolderName = accountHolderName;
            this._balance = _balance;
        }
        set setBalance(value: number) {
            this._balance = value;
            console.log(`New balance is ${this._balance}`);
        }
        get getBalance() {
            return this._balance;
        }
        public deposit(amount: number) {
            this._balance += amount;
            console.log(`Deposited ${amount}. New balance is ${this._balance}`);
        }
    }

    class SavingsAccount extends BankAccount {
        constructor(accountNumber: number, accountHolderName: string, balance: number) {
            super(accountNumber, accountHolderName, balance);
        }
        public withdraw(amount: number) {
            if (this._balance >= amount) {
                this._balance -= amount;
                console.log(`Withdrew ${amount}. New balance is ${this._balance}`);
            } else {
                console.log("Insufficient funds");
            }
        }
    }
    const account = new SavingsAccount(123456789, "John Doe", 1000);

    account.deposit(500); // Deposited 500. New balance is 1500
    account.setBalance = 2000; // This will work because balance is a public property
    console.log(account.getBalance); // 2000
    account.withdraw(500); // Withdrew 500. New balance is 1500
    account.withdraw(2000); // Insufficient funds


}