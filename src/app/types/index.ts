

export interface FinancialItem {
    id: string;
    name: string;
    value: number;
    category?: string;
}

export type Snapshot = {
    id: string;
    date: string;
    assets: FinancialItem[];
    liabilitiles: FinancialItem[];
}
export type Asset = FinancialItem;
export type Liability = FinancialItem;