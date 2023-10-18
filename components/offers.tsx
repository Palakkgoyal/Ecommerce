import React from "react"
import { SanityOffers } from "@/config/inventory"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

export default function Offers() {
    return (
        <div>
            All the offers
        </div>
    )
}

async function getOffers() {
    const offers = await client.fetch<SanityOffers[]>(groq`*[_type == "offer"] | order(_createdAt desc) {
        _id,
        _createdAt,
        name,
        images,
        description,
     }`)
  
    return offers
  }