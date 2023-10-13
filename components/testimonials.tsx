import React from "react"
import Image from "next/image"
import { shimmer, toBase64 } from "@/lib/image"
import tm1 from "@/public/products/tm1.jpg"
import tm2 from "@/public/products/tm2.jpg"
import tm3 from "@/public/products/tm3.jpg"
import tm4 from "@/public/products/tm4.jpg"
import tm5 from "@/public/products/tm5.jpg"
import tm6 from "@/public/products/tm6.jpg"
import tm7 from "@/public/products/tm7.jpg"


export default function Testimonials() {
    const testimonialsArr = [tm1, tm2, tm3, tm4, tm5, tm6, tm7]
    return (
        <div className="my-[80px] flex flex-col gap-[20px] px-4">
            <h2 className="text-2xl font-bold tracking-normal">What Other Say About Us</h2>
            <div className="no-scrollbar flex flex-row gap-[12px] overflow-x-scroll">
                {testimonialsArr.map((img) => (
                    <Image
                        src={img}
                        width={300}
                        height={400}
                        alt=""
                        className="rounded-lg"
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(
                            shimmer(200, 200)
                        )}`}
                    />
                ))}
            </div>
        </div>
    )
}