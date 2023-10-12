import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanityProduct } from "@/config/inventory"
import { siteConfig } from "@/config/site"
import FollowOn from "@/components/followOn"
import Testimonials from "@/components/testimonials"
import NewArrival from "@/components/new-arrival"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function Page() {
  const products = await client.fetch<SanityProduct[]>(groq`*[_type == "product"] | order(_createdAt desc) [0...7] {
    _id,
    _createdAt,
    name,
    sku,
    images,
    currency,
    price,
    description,
    "slug": slug.current
 }`)

  return (
    <div>
      <div className="px-4 pt-20 text-center">
        <h1 className="text-4xl font-extrabold tracking-normal">{siteConfig.name}</h1>
        <p className="mx-auto mt-4 max-w-3xl text-base">{siteConfig.description1}</p>
        <p className="mx-auto max-w-3xl text-base">{siteConfig.description2}</p>
        <Link href="/products">
          <Button variant="default" className="mt-7">
            Get Now
          </Button>
        </Link>
      </div>
      <div>
        <NewArrival products={products} />
        <FollowOn />
        <Testimonials />
      </div>
    </div>
  )
}
