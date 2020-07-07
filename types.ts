export interface Product {
    id: string;
    name: string;
    description: string;
    variants: Variant[];
}

export interface Variant {
    id: string;
    imageSrc: string;
    color: Color;
    size: Size;
    price: Price;
}

export enum Color {
    black = 'black',
    pink = 'pink',
}

export enum Size {
    S = 'S',
    L = 'L',
}

export interface Price {
    amount: number;
    currency: Currency;
}

export enum Currency {
    GBP = 'GBP',
    PLN = 'PLN',
}

//---
// 2:
//---

export interface Cart {
    lineItems: LineItem[];
    subtotal: Price;
    shippingPrice: Price;
    total: Price;
}

export interface LineItem {
    variant: Variant;
    quantity: number;
}

//---
// 3:
//---

export interface Order extends Cart {
    dateOrdered: Maybe<DateString>;
    datePaid: Maybe<DateString>;
    dateShipped: Maybe<DateString>;
}

export type DateString = string;

export type Maybe<T> = T | null;
