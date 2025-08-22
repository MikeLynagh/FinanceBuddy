import { FinancialItem } from "../types"
import { Dispatch, SetStateAction } from "react"

type AddLiabilityFormProps = {
    setLiabilities: Dispatch<SetStateAction<FinancialItem[]>>;
}


export default function AddLiabilityForm({setLiabilities}: AddLiabilityFormProps){
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const newLiability: FinancialItem = {
            id: crypto.randomUUID(),
            name: formData.get("liabilityType") as string,
            value: Number(formData.get("liabilityTypeVal")),
        };
        
        setLiabilities(prevLiabilities => [...prevLiabilities, newLiability])
        form.reset()
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="space-y-12 mt-2">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">Add Liability</h2>
                    <p>Track all your debts and loans</p>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="liabilityType" className="block text-sm/6 font-medium text-gray-900">
                            Liability Type
                            </label>
                            <div className="mt-2">
                                <input 
                                id="liabilityType"
                                name="liabilityType"
                                type="text"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="assetTypeVal" className="block text-sm/6 font-medium text-gray-900">
                            Amount euro
                            </label>
                            <div className="mt-2">
                                <input 
                                    id="liabilityTypeVal"
                                    name="liabilityTypeVal"
                                    type="float"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="mt-6 flex items-center justify-center gap-x-6">
                    <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible"
                    >
                        Add New Liability + 
                    </button>

                </div>
            </div>
        </form>
    )
}