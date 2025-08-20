import { TotalNetWorth } from "./TotalNetWorth"
import { FinancialItem } from "../types"
import { calculateNetWorth } from "../utils/netWorth"
import { calculateTotalAssets } from "../utils/netWorth"
import { calculateTotalLiabilities } from "../utils/netWorth"
import { TotalAssets } from "./TotalAssets"
import { TotalLiabilities } from "./TotalLiabilities"
import FinancialList from "./FinancialList"

type Props = {
    assets: FinancialItem[];
    liabilities: FinancialItem[];
}


export const FinancialSummary = ({ assets, liabilities }: Props) => {
    const networth = calculateNetWorth(assets, liabilities);
    const totalAssets = calculateTotalAssets(assets);
    const totalLiabilities = calculateTotalLiabilities(liabilities);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <TotalNetWorth value={networth} />
            <TotalAssets value={totalAssets} />
            <TotalLiabilities value={totalLiabilities} />
        </div>
        
    )
}