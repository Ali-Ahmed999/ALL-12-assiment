#!usr/bin/env node
import inquirer from 'inquirer';
class BankAccount {
    constructor(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    getAccountNumber() {
        return this.accountNumber;
    }
    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.balance}`);
        }
        else {
            console.log('Invalid amount for deposit.');
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        }
        else {
            console.log('Invalid amount for withdrawal or insufficient funds.');
        }
    }
}
class Bank {
    constructor() {
        this.accounts = [];
    }
    createAccount(accountNumber, initialBalance) {
        const account = new BankAccount(accountNumber, initialBalance);
        this.accounts.push(account);
        console.log(`Account created: ${accountNumber}`);
        return account;
    }
    getAccount(accountNumber) {
        return this.accounts.find((account) => account.getAccountNumber() === accountNumber);
    }
}
const bank = new Bank();
async function main() {
    console.log('Welcome to the Bank System!\n');
    while (true) {
        console.log('Options:');
        console.log('1. Create Account');
        console.log('2. Access Account');
        console.log('3. Quit');
        const { choice } = await inquirer.prompt([
            {
                type: 'input',
                name: 'choice',
                message: 'Enter your choice:',
            },
        ]);
        switch (choice) {
            case '1':
                const { accountNumber, initialBalance } = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'accountNumber',
                        message: 'Enter the account number:',
                    },
                    {
                        type: 'input',
                        name: 'initialBalance',
                        message: 'Enter the initial balance:',
                    },
                ]);
                bank.createAccount(accountNumber, parseFloat(initialBalance));
                break;
            case '2':
                const { accountNumberToAccess } = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'accountNumberToAccess',
                        message: 'Enter your account number:',
                    },
                ]);
                const account = bank.getAccount(accountNumberToAccess);
                if (account) {
                    console.log(`Account Number: ${account.getAccountNumber()}`);
                    console.log(`Balance: $${account.getBalance()}`);
                    const { action } = await inquirer.prompt([
                        {
                            type: 'list',
                            name: 'action',
                            message: 'Choose an action:',
                            choices: ['Deposit', 'Withdraw'],
                        },
                    ]);
                    if (action === 'Deposit') {
                        const { depositAmount } = await inquirer.prompt([
                            {
                                type: 'input',
                                name: 'depositAmount',
                                message: 'Enter the deposit amount:',
                            },
                        ]);
                        account.deposit(parseFloat(depositAmount));
                    }
                    else if (action === 'Withdraw') {
                        const { withdrawAmount } = await inquirer.prompt([
                            {
                                type: 'input',
                                name: 'withdrawAmount',
                                message: 'Enter the withdrawal amount:',
                            },
                        ]);
                        account.withdraw(parseFloat(withdrawAmount));
                    }
                    else {
                        console.log('Invalid action.');
                    }
                }
                else {
                    console.log('Account not found.');
                }
                break;
            case '3':
                console.log('Goodbye!');
                return;
            default:
                console.log('Invalid choice. Please choose a valid option.');
        }
    }
}
main();
