"use client"

import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Charts from "../components/Charts"
export default function Analytics() {
    return(
        <>
        <div className="flex">
            <Sidebar />
            <main className="flex-grow ml-64 relative">
                <Navbar />
                <Charts />
            </main>
        </div>
        </>
    )
}