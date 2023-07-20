import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loan:number): number | undefined => {
    if(this.validateStatus()){
        console.log('Voce pegou um empréstimo de R$', loan)
        return this.balance += loan
    }
  }
}