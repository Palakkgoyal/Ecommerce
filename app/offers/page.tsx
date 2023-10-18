import React from "react"
import { OfferFilters } from "@/components/offer-filter"
import Offers from "@/components/offers"

export default function Page() {
    return (
        <div>
            <OfferFilters />
            <Offers />
        </div>
    )
}