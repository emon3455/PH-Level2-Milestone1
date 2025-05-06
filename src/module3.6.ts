{
  // getter and setter

  class BankAccount {
    readonly id: number;
    public userName: string;
    protected _balance: number;

    constructor(id: number, userName: string, _balance: number) {
      this.id = id;
      this.userName = userName;
      this._balance = _balance;
    }

    get getBalance() {
      return this._balance;
    }

    set depositBalance(balance: number) {
      this._balance += balance;
    }
  }

  const newUser = new BankAccount(1, "Mr. Boss", 500)

//   calling getter
  const oldBalance = newUser.getBalance
  console.log("Old Balance: ", oldBalance);
  
//   calling setter
  newUser.depositBalance = 1000

  const newBalance = newUser.getBalance
  console.log("New Balance: ", newBalance);
}
