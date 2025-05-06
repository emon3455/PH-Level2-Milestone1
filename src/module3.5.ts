{
    // 

    // Access Modifiers

    class BankAccount {
        readonly accountNumber: number;
        public accountHolderName: string;
        protected _balance: number;
        constructor(accountNumber: number, accountHolderName: string, balance: number) {
            this.accountNumber = accountNumber;
            this.accountHolderName = accountHolderName;
            this._balance = balance;
        }
        public deposit(amount: number) {
            this._balance += amount;
            console.log(`Deposited ${amount}. New balance is ${this._balance}`);
        }
        public getBalance() {
            return this._balance;
        }
    }
    const account = new BankAccount(123456789, "John Doe", 1000);
    account.deposit(500);   

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

    const savingsAccount = new SavingsAccount(987654321, "Jane Doe", 2000);
    savingsAccount.deposit(1000);
    savingsAccount.withdraw(500); // New balance is 2500
    savingsAccount.withdraw(3000); // Insufficient funds

    // 
}