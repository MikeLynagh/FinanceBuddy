export const TotalLiabilities = ({ value}: {value: number}) => {
    return (
        <div className="py-4 bg-red-400 rounded shadow-xl ">
        <h2 className="font-bold">Total Liabilities</h2>
            <p className="text-xl">€{value}</p>
    </div>
    )   
}


