import { CompanyAccount } from './class/CompanyAccount'
import { EmployeeAccount } from './class/EmployeeAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount:   PeopleAccount   = new PeopleAccount(1, 'Nath', 10)
const companyAccount:  CompanyAccount  = new CompanyAccount('DIO', 20)
const employeeAccount: EmployeeAccount = new EmployeeAccount('João',22)

/* PeopleAccount */
console.log("-----------------------------------------------")
const peopleName = peopleAccount.getName();
const peopleNumberAccount = peopleAccount.getNumberAccount();
let peopleBalance = peopleAccount.getBalance();
let peopleStatus = peopleAccount.getStatus();
let returnStr = `
PeopleAccount
Name: ${peopleName},
Number Account: ${peopleNumberAccount},
Status: ${peopleStatus},
Balance: ${peopleBalance}
`
console.log(returnStr)
peopleAccount.deposit(20)
console.log("BALANCE: "+peopleAccount.getBalance())
peopleAccount.withdraw(10)
console.log("BALANCE: "+peopleAccount.getBalance())
peopleAccount.setStatus(false)
console.log("STATUS: "+peopleAccount.getStatus())
console.log("-----------------------------------------------")
/* CompanyAccount */
console.log("-----------------------------------------------")
const companyName = companyAccount.getName();
const companyNumberAccount = companyAccount.getNumberAccount();
let companyBalance = companyAccount.getBalance();
let companyStatus = companyAccount.getStatus();
returnStr = `
companyAccount
Name: ${companyName},
Number Account: ${companyNumberAccount},
Status: ${companyStatus},
Balance: ${companyBalance}
`
console.log(returnStr)
companyAccount.deposit(20)
console.log("BALANCE: "+companyAccount.getBalance())
companyAccount.withdraw(10)
console.log("BALANCE: "+companyAccount.getBalance())
companyAccount.getLoan(300)
console.log("BALANCE: "+companyAccount.getBalance())
companyAccount.setStatus(false)
console.log("STATUS: "+companyAccount.getStatus())
console.log("-----------------------------------------------")

/* EmployeeAccount */

console.log("-----------------------------------------------")
const employeeName = employeeAccount.getName();
const employeeNumberAccount = employeeAccount.getNumberAccount();
let employeeBalance = employeeAccount.getBalance();
let employeeStatus = employeeAccount.getStatus();
returnStr = `
employeeAccount
Name: ${employeeName},
Number Account: ${employeeNumberAccount},
Status: ${employeeStatus},
Balance: ${employeeBalance}
`
console.log(returnStr)
employeeAccount.deposit(20)
console.log("BALANCE: "+employeeAccount.getBalance())
employeeAccount.withdraw(10)
console.log("BALANCE: "+employeeAccount.getBalance())
employeeAccount.setStatus(false)
console.log("STATUS: "+employeeAccount.getStatus())
console.log("-----------------------------------------------")