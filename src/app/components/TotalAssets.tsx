export const TotalAssets = ({ value}: {value: number}) => {
    return(
        <div className="py-4 bg-green-200 rounded shadow-xl">
        <h2 className="font-bold">Total Assets</h2>
            <p className="text-xl">€{value}</p>
    </div>
    )
    }
