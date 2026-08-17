/**
 * An e-commerce platform receives orders from customers.
 */

type Order = {
    id: string
    customer: string
    total: number
    paid: boolean
}
const orders: Order[] = [
    {
        id: "ORD001",
        customer: "Alya",
        total: 850000,
        paid: true
    },
    {
        id: "ORD002",
        customer: "Budi",
        total: 1250000,
        paid: false
    },
    {
        id: "ORD003",
        customer: "Citra",
        total: 450000,
        paid: true
    },
    {
        id: "ORD004",
        customer: "Dimas",
        total: 2100000,
        paid: true
    }
];

/**
 * The order management system needs to process orders differently depending on the operation.
 * 1. Operation for status payment.
 * ORD001 → PAID
 * ORD002 → UNPAID
 * ...
 * 
 * 2. Determine Shipping Category.
 * Business rules:
 * - Total ≥ Rp1,500,000 → FREE SHIPPING
 * - Total ≥ Rp500,000 → STANDARD SHIPPING
 * - Otherwise → ECONOMY SHIPPING
 * 
 * 
 */

type SHIPPING_CATEGORY = "FREE SHIPPING" | "STANDARD SHIPPING" | "ECONOMY SHIPPING"
type ORDER_STATUS = "PAID" | "UNPAID"
type PaymentStatusOrder = Order & { status: ORDER_STATUS }
type ShippingCategoryOrder = Order & { shippingStatus: SHIPPING_CATEGORY }

function getPaymentStatus(selectedOrder: Order): PaymentStatusOrder {
    // implement to determine payment status order
    // this function return order data within status or order
    return;
}


function getShippingCategory(selectedOrder: Order): ShippingCategoryOrder {
    // implement to determine shipping category of order
    // this function return order data within shipping cateogory
    return;
}

function processOrder<T>(
    arr: Order[],
    callback: (order: Order) => T): T[] {
    // implement for callback
    return;
}

const orderWithPaymentStatus = processOrder(orders, getPaymentStatus)
const orderWithShippingCategory = processOrder(orders, getShippingCategory)

console.log(`====== ORDER WITH PAYMENT STATUS ======`);
console.log({ orders: orderWithPaymentStatus })
console.log(`====== ORDER WITH SHIPPING CATEGORY ======`);
console.log({ orders: orderWithShippingCategory })