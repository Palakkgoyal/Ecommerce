"use client"

import React from "react"
import { SanityProduct } from "@/config/inventory"
import Image from "next/image"
import Link from "next/link"
import { shimmer, toBase64 } from "@/lib/image"
import { urlForImage } from "@/sanity/lib/image"
import { formatCurrencyString } from "use-shopping-cart"
import { Button } from "@/components/ui/button"

interface Props {
  products: SanityProduct[]
}

export default function NewArrival({ products }: Props) {
  return (
    <div className="my-[80px] flex flex-col gap-[20px] px-4">
      <h2 className="text-2xl font-bold tracking-normal">New Arrivals</h2>
      <div className="no-scrollbar flex flex-row gap-[12px] overflow-x-scroll">
        {products.map((product) => {
          return (
            <div className="min-h-[300px] min-w-[230px] shrink-0" key={product._id}>
              <Link href={`/products/${product.slug}`} className="group text-sm">
                <div className="h-[300px] w-[250px] rounded-lg border-2 border-gray-200 bg-gray-100 group-hover:opacity-75 dark:border-gray-800">
                  <Image
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(255, 280))}`}
                    src={urlForImage(product.images[0]).url()}
                    alt={product.name}
                    width={230}
                    height={280}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 font-medium">{product.name}</h3>
                <p className="mt-2 font-medium">{formatCurrencyString({ currency: product.currency, value: product.price })}</p>
              </Link>
            </div>
          )
        })}
        <div className="flex min-h-[300px] min-w-[230px] shrink-0 justify-center">
          <Link href="/products">
            <Button
              type="button"
              className="mt-[130px] w-full bg-violet-600 py-6 text-base font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              View More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}