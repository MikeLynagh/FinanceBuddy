"use client"

import { useState, useEffect } from "react";
import AddAssetForm from "./components/AddAssetForm";
import AddLiabilityForm from "./components/AddLiabilityForm";
import { FinancialItem } from "./types";
import { FinancialSummary } from "./components/FinancialSummary";
import FinancialList from "./components/FinancialList";




export default function Home() {
  const [assets, setAssets] = useState<FinancialItem[]>([]);
  const [liabilities, setLiabilities] = useState<FinancialItem[]>([]);

  // load from localstorage on first render 
  useEffect(() => {
    const savedAssets = localStorage.getItem("assets")
    const savedLiabilities = localStorage.getItem("liabilities");

    if (savedAssets) setAssets(JSON.parse(savedAssets));
    if (savedLiabilities) setLiabilities(JSON.parse(savedLiabilities))
  }, []);

  useEffect(() => {
    localStorage.setItem("assets", JSON.stringify(assets));
  }, [assets])

  useEffect(() => {
    localStorage.setItem("liabilities", JSON.stringify(liabilities))
  }, [liabilities]);



    

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20">
      <main className="max-w-3xl">
        <h1 className="font-extrabold text-4xl leading-none tracking-tight">Net worth tracker</h1>
        <FinancialSummary assets={assets} liabilities={liabilities}/>
        <br></br>
        <div>
          <FinancialList title="Assets" items={assets} />
          <FinancialList title="Liabilities" items={liabilities} />
        </div>

        
        <AddAssetForm  />
        <AddLiabilityForm setLiabilities={setLiabilities}/>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}


