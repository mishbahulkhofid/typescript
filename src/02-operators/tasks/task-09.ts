/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

interface Product {
  product: string;
  price: number;
  quantity: number;
}
interface customer {
  voucher: number;
  premiumMember: boolean;
  rewardPointRate: 1;
}

const product1: Product = {
  product: "Mechanical Keyboard",
  price: 850000,
  quantity: 1,
};
const product2: Product = {
  product: "Wireless Mouse",
  price: 275000,
  quantity: 2,
};
const product3: Product = {
  product: "Monitor Stand",
  price: 420000,
  quantity: 1,
};
const customer: customer = {
  voucher: 100000,
  premiumMember: true,
  rewardPointRate: 1,
};

const subtotal =
  product1.price * product1.quantity +
  product2.price * product2.quantity +
  product3.price * product3.quantity;
const membershipDiscount = customer.premiumMember ? subtotal * 0.1 : 0;
const voucherDeduction =
  customer.voucher > 0 ? Math.min(subtotal, customer.voucher) : 0;
const paymentBeforeTax = subtotal - membershipDiscount - voucherDeduction;
const tax = paymentBeforeTax * 0.11;
const finalPayment = paymentBeforeTax + tax;
const rewardPoints = Math.floor(finalPayment / 50000);
const freeShipping = customer.premiumMember || finalPayment > 1500000;

console.log("Product Subtotal:", subtotal);
console.log("Membership Discount:", membershipDiscount);
console.log("Voucher Deduction:", voucherDeduction);
console.log("Payment Before Tax:", paymentBeforeTax);
console.log("Tax:", tax);
console.log("Final Payment:", finalPayment);
console.log("Reward Points:", rewardPoints);
console.log("Free Shipping Eligibility:", freeShipping);
