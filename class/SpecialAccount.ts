import { DioAccount } from "./DioAccount"

export class SpecialAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
    this.balance = 0
  }

  deposit = (deposit:number): number | undefined => {
    if(this.validateStatus()){
      console.log('Voce depositou R$',deposit)
      return this.balance += (deposit + 10) 
    }
  }
}