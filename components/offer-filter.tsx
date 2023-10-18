"use client"
import React from "react"
import { useSearchParams, useRouter } from "next/navigation"

const filters = ['all', 'seasonal', 'bulk', 'other']

export function OfferFilters() {
    const searchParams = useSearchParams()
    const router = useRouter()

    function setQuery(filter: string) {
        const params = new URLSearchParams(searchParams.toString())
        filter === 'all' ?  params.delete("category") : params.set("category", filter)
        router.replace(`/offers?${params.toString()}`)
    }

    return (
        <form className="px-4 flex justify-center mt-8">
            <ul className="flex gap-8">
                {filters.map((filter, idx) => (
                    <li className="cursor-pointer" key={`${filter}-${idx}`} 
                    onClick={() => setQuery(filter)}
                    >{filter}</li>
                ))}
            </ul>
        </form>
    )
}