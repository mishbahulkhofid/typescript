/**
 * An e-commerce platform is preparing a flash sale event. Before the discount calculation begins, 
 * the system temporarily stores several pieces of information as individual variables.
 * A customer wants to purchase a Mechanical Keyboard RGB with the product code KBR-001. 
 * The original price of the product is 850000 rupiahs, 
 * and the flash sale offers a 25% discount. The customer plans to buy 2 keyboards. 
 * Because the customer is a premium member, they are eligible for free shipping. 
 * The current stock available in the warehouse is 18 units.
 * 
 * Task:
 * 1. Identify every value that should become a variable.
 * 2. Choose an appropriate variable name for each value.
 * 3. Determine the correct data type.
 * 4. Declare all variables in TypeScript.
 * 5. Display the product data using console.log.
 */

interface keyboardRGB {
  productCode: string;
  productName: string;
  price: number;
  discount: number;
  quantity: number;
  isFreeShipping: boolean;
  stock: number;
}

const product: keyboardRGB = {
  productCode: "KBR-001",
  productName: "Mechanical Keyboard RGB",
  price: 850000,
  discount: 0.25,
  quantity: 2,
  isFreeShipping: true,
  stock: 18,
};

console.log("=== Product Data ===");
console.log("Product Name : ", product.productName);
console.log("Product Code : ", product.productCode);
console.log("Product Price : ", product.price);
console.log("Discount : ", product.discount);
console.log("Quantity : ", product.quantity);
console.log("Free Shipping : ", product.isFreeShipping);
console.log("Stock : ", product.stock);