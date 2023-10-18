import React from "react"
import { OfferFilters } from "@/components/offer-filter"
import Offers from "@/components/offers"
import { SanityOffers } from "@/config/inventory"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

interface Props {
    searchParams: {
        category? : string
    }
}

export default async function Page({ searchParams }: Props) {
    const { category="" } = searchParams

    const offerFilter = `_type == "offer"`
    const categoryFilter = category ? ` && category == "${category}"` : ""
    const filter = `*[${offerFilter}${categoryFilter}]`

    const offers = await client.fetch<SanityOffers[]>(groq`${filter} | order(_createdAt desc) {
        _id,
        _createdAt,
        name,
        images,
        description,
     }`)

     console.log(offers)
    return (
        <div>
            <OfferFilters />
            <Offers offers={offers} />
        </div>
    )
}