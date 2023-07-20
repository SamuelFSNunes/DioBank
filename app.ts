import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(10)
peopleAccount.withdraw(5)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.getLoan(10000)
companyAccount.withdraw(200)
console.log(companyAccount)

const specialAccount: SpecialAccount = new SpecialAccount ('Blessed', 30)
specialAccount.deposit(100)
specialAccount.withdraw(10)
console.log(specialAccount)