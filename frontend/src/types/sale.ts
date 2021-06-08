import { Seller } from "./seller"

export type Sale =  {
    id: number; 
    visited: number;
    deals: number;
    amount: number;
    date: String; 
    seller: Seller;
}

export type SalePage = {
    content: Sale[];
    last: boolean; 
    totalElements: number; 
    totalPages: number; 
    size: number; 
    number: number; 

    numberOfElements: number; 
    first: boolean; 
    empty: boolean; 
}


export type SaleSum =  {
    sellerName: string;
    sum: number;
}

export type SaleSucess = {
    sellerName: String;
    visited: number;
    deals: number;
}