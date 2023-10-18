"use client"
import React, { useState, useEffect } from "react"
import { SanityOffers } from "@/config/inventory"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { shimmer, toBase64 } from "@/lib/image"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { urlForImage } from "@/sanity/lib/image"

export default function OfferSlider() {
  const [current, setCurrent] = useState<Number>(0)
  const [offers, setOffers] = useState([])

  useEffect(() => {
    const moveSlider = setInterval(slideRight, 3000)

    async function orderOffers() {
      const tempOffers:any = await getOffers()
      console.log(tempOffers, "offers")
      setOffers(tempOffers)
    }

    orderOffers()

    return () => clearInterval(moveSlider)
  }, [])

  function slideRight() {
    if(+current >= (offers.length - 1)) {
      setCurrent(0)
      return
    }
    setCurrent(curr => +curr + 1)
  }
  function slideLeft() {
    if(current === 0) {
      setCurrent(offers.length - 1)
      return
    }
    setCurrent(curr => +curr - 1)
  }

  return (
    <div className="max-w-7xl overflow-hidden relative mx-auto">
      <div className="w-full my-8 h-full mx-auto max-h-[700px] flex relative transition-transform ease-in-out"
        style={{
          transform: `translateX(-${+current * 100}%)`
        }}
      >
        {offers.map((offer:any) => (
        <div className="min-w-full max-h-full overflow-hidden" key={offer._id}>
          <Image
            src={urlForImage(offer.images[0]).url()}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(400, 700))}`}
            alt="demo Image"
            width={400}
            height={700}
            className="min-w-full max-w-full max-h-full aspect-video"
          />
        </div>
        ))}
      </div>
      <div className="flex w-full h-full justify-between items-center top-0 left-0 absolute bg-black-300 z-[4]">
        <ChevronLeft className="cursor-pointer" onClick={slideLeft} />
        <ChevronRight className="cursor-pointer" onClick={slideRight} />
      </div>
    </div>
  )
}

async function getOffers() {
  const offers = await client.fetch<SanityOffers[]>(groq`*[_type == "offer"] | order(_createdAt desc) [0...4] {
      _id,
      _createdAt,
      name,
      images,
      description,
   }`)

  return offers
}