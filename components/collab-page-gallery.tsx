import React from "react"
import c1 from "@/public/collab/c1.jpeg"
import c2 from "@/public/collab/c2.jpg"
import c3 from "@/public/collab/c3.jpg"
import c4 from "@/public/collab/c4.jpg"
import c5 from "@/public/collab/c5.jpg"
import c6 from "@/public/collab/c6.jpg"
import c7 from "@/public/collab/c7.jpg"
import Image from "next/image"
import { shimmer, toBase64 } from "@/lib/image"

export function CollabPageGallery() {
    const images = [c1, c2, c3, c4, c5, c6, c7]

    return (
        <div>
            <div className="columns-3 pt-9 mb-10 lg:mb-20 max-w-7xl mx-auto gap-0">
                {images.map(img => (
                    <Image
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(255, 280))}`}
                        src={img}
                        alt="collaboration image"
                        width={230}
                        height={280}
                        className="h-full w-full object-cover"
                    />
                ))}
            </div>
        </div>
    )
}