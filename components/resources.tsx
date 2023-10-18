import React from "react"
import { SanityResources } from "@/config/inventory"

interface Props {
    resources: SanityResources[]
  }

export default function Resources({ resources }: Props) {
    console.log(resources)
    return (
        <div>
            resources
        </div>
    )
}