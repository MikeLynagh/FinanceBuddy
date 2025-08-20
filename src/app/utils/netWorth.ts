import { FinancialItem } from "../types";



const sumValues = (items: FinancialItem[] =[]) => 
    items.reduce((sum, item) => sum + (item?.value || 0), 0);

export const calculateNetWorth = (assets: FinancialItem[] =[], liabilities: FinancialItem[] = []) => 
    sumValues(assets) - sumValues(liabilities) 

export const calculateTotalAssets = sumValues;

export const calculateTotalLiabilities = sumValues;


// export const calculateTotalAssets = (assets: FinancialItem[] = []): number => {
//     const totalAssets = assets.reduce((sum, asset) => sum + (asset?.value || 0), 0)

//     return totalAssets
// }

// export const calculateTotalLiabilities = (liabilities: FinancialItem[] = []): number => {
//     const totalLiabilities = liabilities.reduce((sum, liability) => sum + (liability?.value || 0), 0)

//     return totalLiabilities
// }