import React from "react"
import Resources from "@/components/resources"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanityResources } from "@/config/inventory"

export default async function Page() {
    const resources = await client.fetch<SanityResources[]>(groq`*[_type == "resource"] | order(_createdAt desc) [0...7] {
        _id,
        _createdAt,
        name,
        videoLink,
        description,
     }`)
    return (
        <div>
            <Resources resources={resources} />
        </div>
    )
}
// {/* <iframe width="320" height="560" src="https://www.youtube.com/embed/XcQjmB0Y7z0" title="Resin Art Tutorial For Beginners - How To Use Epoxy Resin" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}