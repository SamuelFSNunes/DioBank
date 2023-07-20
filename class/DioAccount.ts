export abstract class DioAccount {
    private name: string
    private readonly accountNumber: number
    protected balance: number = 0
    private status: boolean = true
  
    constructor(name: string, accountNumber: number){
      this.name = name
      this.accountNumber = accountNumber
    }
  
    setName = (name: string): void => {
      this.name = name
      console.log('Nome alterado com sucesso!')
    }
  
    getName = (): string => {
      return this.name
    }
  
    deposit = (deposit:number): number | undefined => {
      if(this.validateStatus()){
        console.log('Voce depositou R$',deposit)
        return this.balance += deposit
      }
    }
  
    withdraw = (withdraw:number): number | undefined => {
        if(this.balance < withdraw){
            console.log("Operação inválida")
            return this.balance = this.balance
        }
        console.log('Voce sacou R$', withdraw)
        return this.balance -= withdraw
    }
  
    getBalance = (): void => {
      console.log(this.balance)
    }
  
    protected validateStatus = (): boolean => {
      if (this.status) {
        return this.status
      }
  
      throw new Error('Conta inválida')
    }
  }