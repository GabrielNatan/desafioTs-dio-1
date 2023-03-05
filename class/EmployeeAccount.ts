import { DioAccount } from "./DioAccount"

export class EmployeeAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (value: number): void => {
    if(this.getStatus()){
      let balance = this.getBalance();

      this.setBalance(balance + value + 10);
    }
  }

}
