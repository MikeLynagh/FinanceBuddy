export const TotalNetWorth = ({ value}: {value: number}) => {
    return(
        <div className="justify-center p-4 bg-gray-100 rounded shadow-xl">
            <h3 className="font-bold">Net Worth</h3>
            <p className="text-xl">€{value}</p>

        </div>
    )
}