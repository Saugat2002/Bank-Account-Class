const currentBalanceDiv = document.getElementById('currentBalance')
const currentBalanceBtnDiv = document.getElementById('currentBalanceBtn')
const depositDiv = document.getElementById('deposit')
const withdrawDiv = document.getElementById('withdraw')
const depositAmtDiv = document.getElementById('depositAmt')
const withdrawAmtDiv = document.getElementById('withdrawAmt')
const errorDiv = document.getElementById('error')

class bankAccount{
    constructor(name,balance){
        this.name = name
        this.balance =balance
    }

    printCurrentBalance(){
        console.log(this.balance)
    }
    deposit(amount){
        this.balance += Number(amount)
        console.log(`Deposited ${amount} dollars`)
        console.log(`Current Balance: ${this.balance} dollars`)
    }
    
    withdraw(amount){
        if(amount > this.balance){
            errorDiv.innerHTML = "You dont have enough Balance!"
            console.error(`You dont have enough Balance! (Current Balance = ${this.balance})`)
            return
        }
        this.balance -= Number(amount)
        console.log(`Withdrawn ${amount} dollars`)
        console.log(`Current Balance: ${this.balance} dollars`)
    }
}

const user = new bankAccount('saugat',0)

depositDiv.onclick = () => {
    user.deposit(depositAmtDiv.value)
    updateBalance()
}

withdrawDiv.onclick = () => {
    errorDiv.innerHTML = ""
    user.withdraw(withdrawAmtDiv.value)
    updateBalance()
}

const updateBalance = () => {
    currentBalanceDiv.innerHTML = `${user.balance} Dollars`
}




