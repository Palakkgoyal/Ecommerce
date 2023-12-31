import React from "react"
import { SanityOffers } from "@/config/inventory"
import { XCircle } from "lucide-react"
import { shimmer, toBase64 } from "@/lib/image"
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"

interface Props {
  offers: SanityOffers[]
}


export default function Offers({ offers }: Props) {
  if (offers?.length === 0) {
    return (
      <div className="mx-auto mb-10 mt-5 grid h-40 w-full place-items-center rounded-md border-2 border-dashed bg-gray-50 py-10 text-center dark:bg-gray-900">
        <div>
          <XCircle className="mx-auto h-10 w-10 text-gray-500 dark:text-gray-200" />
          <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-500 dark:text-gray-200 sm:text-2xl">
            No Offers Found
          </h1>
        </div>
      </div>
    )
  }
  return (
    <div className="mb-10 mt-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-3 lg:gap-x-8">
      {offers.map((offer) => (
        <div key={offer._id} className="group text-sm">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg border-2 border-gray-200 bg-gray-100 group-hover:opacity-75 dark:border-gray-800">
            <Image
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(255, 280))}`}
              src={urlForImage(offer.images[0]).url()}
              alt={offer.name}
              width={225}
              height={280}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <h3 className="mt-2 font-medium">{offer.description}</h3>
        </div>
      ))}
    </div>
  )}