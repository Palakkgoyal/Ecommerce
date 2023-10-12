import React from "react"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanityProduct } from "@/config/inventory"
import { cn } from "@/lib/utils"
import { ProductFilters } from "@/components/product-filters"
import { ProductGrid } from "@/components/product-grid"
import { ProductSort } from "@/components/product-sort"
import { SearchBar } from "@/components/search-bar"

interface Props {
    searchParams: {
        date?: string
        price?: string
        category?: string
        size?: string
        search?: string
    }
}


export default async function Page({ searchParams }: Props) {
    const { date = "desc", price, category, size, search } = searchParams;

    const priceOrder = price ? `| order(price ${price})` : ""
    const dateOrder = date ? `| order(_createdAt ${date})` : ""
    const order = `${priceOrder}${dateOrder}`

    const productFilter = `_type == "product"`
    const categoryFilter = category ? `&& "${category}" in categories` : ""
    const sizeFilter = size ? `&& "${size}" in sizes` : ""
    const searchFilter = search ? `&& name match "${search}"` : ""
    const filter = `*[${productFilter}${categoryFilter}${sizeFilter}${searchFilter}]`

    const products = await client.fetch<SanityProduct[]>(groq`${filter} ${order} {
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
            <main className="mx-auto max-w-6xl px-6">
                <SearchBar />
                <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-10 dark:border-gray-800">
                    <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
                        {products.length} result{products.length === 1 ? "" : "s"}
                    </h1>
                    <ProductSort />
                </div>

                <section aria-labelledby="products-heading" className="pb-24 pt-6">
                    <h2 id="products-heading" className="sr-only">
                        Products
                    </h2>
                    <div className={cn("grid grid-cols-1 gap-x-8 gap-y-10", products.length > 0 ? 'lg:grid-cols-4' : 'lg:grid-cols-[1fr_3fr]')}>
                        <div className="hidden lg:block">
                            <ProductFilters />
                        </div>
                        <ProductGrid products={products} />
                    </div>
                </section>
            </main>
        </div>
    )
}