/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

interface Product {
  productCode: string;
  productName: string;
  sellingPrice: number;
  stockQuantity: number;
  productWeight: number;
  averageCustomerRating: number;
  isDiscounted: boolean;
}

const product1: Product = {
  productCode: "PRD-001",
  productName: "Laptop",
  sellingPrice: 1000000,
  stockQuantity: 10,
  productWeight: 2.5,
  averageCustomerRating: 4.5,
  isDiscounted: true,
};

const product2: Product = {
  productCode: "PRD-002",
  productName: "Smartphone",
  sellingPrice: 500000,
  stockQuantity: 20,
  productWeight: 1.2,
  averageCustomerRating: 4.2,
  isDiscounted: false,
};  

const product3: Product = {
  productCode: "PRD-003",
  productName: "Tablet",
  sellingPrice: 300000,
  stockQuantity: 15,
  productWeight: 0.8,
  averageCustomerRating: 4.0,
  isDiscounted: true,
}

console.log(product1);
console.log(product2);
console.log(product3);