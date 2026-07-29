/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */
const freeShipping: boolean = true;
interface Product {
  productName: string;
  price: number;
  quantity: number;
  freeShipping: boolean;
}

const product1 = {
  productName: "Mechanical Keyboard",
  price: 850000,
  quantity: 1,
  freeShipping: true
};

const product2 = {
  productName: "Wireless Mouse",
  price: 275000,
  quantity: 2,
  freeShipping: true
};

const product3 = {
  productName: "Mouse Pad",
  price: 120000,
  quantity: 1,
  freeShipping: true
};

const subtotal = (product1.price * product1.quantity) + (product2.price * product2.quantity) + (product3.price * product3.quantity);
const totalItems = product1.quantity + product2.quantity + product3.quantity;
const isDiscountApplied: boolean = subtotal > 1000000;
const discount = isDiscountApplied ? subtotal * 0.1 : 0;
const shippingCost = freeShipping ? 0 : 50000;
const totalPayment = subtotal - discount + shippingCost;
const isPremiumMember: boolean = true;
const products=[product1, product2, product3];

console.log("Subtotal:", subtotal);
console.log("Total Items:", totalItems);
console.log("Discount:", discount);
console.log("Shipping Cost:", shippingCost);
console.log("Total Payment:", totalPayment);
console.log("Is Premium Member:", isPremiumMember);
console.table(products);