

export interface FinancialItem {
    id: string;
    name: string;
    value: number;
    category?: string;
}

export type Asset = FinancialItem;
export type Liability = FinancialItem;