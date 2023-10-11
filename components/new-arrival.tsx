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
    <div className="flex flex-col gap-[20px] px-4 my-[80px]">
      <h2 className="text-2xl font-bold tracking-normal">New Arrivals</h2>
      <div className="flex flex-row gap-[12px] overflow-x-scroll no-scrollbar">
        {products.map((product) => (
          <div className="shrink-0 min-w-[230px] min-h-[300px]">
            <Link key={product._id} href={`/products/${product.slug}`} className="group text-sm">
              <div className="h-[300px] w-[250px] rounded-lg border-2 border-gray-200 bg-gray-100 group-hover:opacity-75 dark:border-gray-800">
                <Image
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(255, 280))}`}
                  src={urlForImage(product.images[0]).url()}
                  alt={product.name}
                  width={230}
                  height={280}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 font-medium">{product.name}</h3>
              <p className="mt-2 font-medium">{formatCurrencyString({ currency: product.currency, value: product.price })}</p>
            </Link>
          </div>
        ))}
        <div className="shrink-0 min-w-[230px] min-h-[300px] flex justify-center">
          <Link href="/products">
            <Button
              type="button"
              className="w-full mt-[130px] bg-violet-600 py-6 text-base font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              View More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}