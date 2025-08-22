import { FinancialItem } from "../types";



const sumValues = (items: FinancialItem[] =[]) => 
    items.reduce((sum, item) => sum + (item?.value || 0), 0);

export const calculateNetWorth = (assets: FinancialItem[] =[], liabilities: FinancialItem[] = []) => 
    sumValues(assets) - sumValues(liabilities) 

export const calculateTotalAssets = sumValues;

export const calculateTotalLiabilities = sumValues;

