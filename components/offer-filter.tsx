"use client"
import React from "react"
import { useSearchParams, useRouter } from "next/navigation"

const filters = ['all', 'seasonal', 'bulk', 'other']

export function OfferFilters() {
    const searchParams = useSearchParams()
    const router = useRouter()

    return (
        <form className="px-4 flex justify-center mt-8">
            <ul className="flex gap-8">
                {filters.map((filter) => (
                    <li className="cursor-pointer" onClick={() => {
                        const params = new URLSearchParams(searchParams.toString())
                        params.set("offer", filter)
                        router.replace(`/offers?${params.toString()}`)
                    }}
                    >{filter}</li>
                ))}
            </ul>
        </form>
    )
}