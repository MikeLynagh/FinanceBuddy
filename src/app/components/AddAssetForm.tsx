import { FinancialItem } from "../types"
import { Dispatch, SetStateAction } from "react"

type AddAssetFormProps = {
    setAssets: Dispatch<SetStateAction<FinancialItem[]>>;
}


export default function AddAssetForm({setAssets}: AddAssetFormProps){
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const newAsset: FinancialItem = {
            // generates a unique id
            id: crypto.randomUUID(),
            name: formData.get("assetType") as string,
            value: Number(formData.get("assetTypeVal")),
        };

        setAssets(prevAssets => [...prevAssets, newAsset]);
        form.reset()
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="space-y-12 mt-2">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">Add Asset</h2>
                    <p>Track all your assets and investments</p>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="assetType" className="block text-sm/6 font-medium text-gray-900">
                            Asset Type
                            </label>
                            <div className="mt-2">
                                <input 
                                id="assetType"
                                name="assetType"
                                type="text"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="assetTypeVal" className="block text-sm/6 font-medium text-gray-900">
                            Amount (€)
                            </label>
                            <div className="mt-2">
                                <input 
                                    id="assetTypeVal"
                                    name="assetTypeVal"
                                    type="number"
                                    step="0.01"
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
                        Add New Asset + 
                    </button>

                </div>
            </div>
        </form>
    )
}