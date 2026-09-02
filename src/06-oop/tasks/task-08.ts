/**
 * An online store supports several payment methods.
 * Every payment has:
 * - Transaction ID
 * - Amount
 * 
 * But each payment method processes the transaction differently.
 * -  Credit card's processing fee is 2% of payment amount
 * -  Bank Transfer's processing fee is 5000
 * -  E Wallet's processing 1% of payment amount
 * 
 * Example transactions:
 * ---------------------
 * Credit Card
 * Transaction: TRX001
 * Amount: Rp1,000,000
 * ---------------------
 * Bank Transfer
 * Transaction: TRX002
 * Amount: Rp750,000
 * ---------------------
 * E-Wallet
 * Transaction: TRX003
 * Amount: Rp500,000
 * ---------------------
 */

class Payment {
    calculateFee(): number {
        return 0
    }
}

class CreditCardPayment extends Payment {

}

class BankTransferPayment extends Payment {

}

class EWalletPayment extends Payment {

}

const payments: Payment[] = [
    creditCardPayment,
    bankTransferPayment,
    eWalletPayment
];

for (const payment of payments) {
    console.log(payment.calculateFee());
}