import { FinancialItem } from "../types";

type FinancialListProps = {
    title: string;
    items: FinancialItem[];
}

export default function FinancialList({title, items}: FinancialListProps) {
    return(
        <div>
        <h2 className="text-lg font-bold mb-2">{title}</h2>

        <table className="table-auto border-collapse border border-gray-300 w-full">
            <thead>
                <tr>
                    <th className="border border-gray-700 px-4 py-2 text-left">Item</th>
                    <th className="border border-gray-700 px-4 py-2 text-right">Amount</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr key={item.id}>
                        <td className="border border-gray-400 px-4 py-2">{item.name}</td>
                        <td className="border border-gray-400 px-4 py-2">{item.value}</td>

                    </tr>
                ))}
               
            </tbody>
        </table>
        </div>
    )

}