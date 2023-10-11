import React from "react"
import Image from "next/image"
import { shimmer, toBase64 } from "@/lib/image"
import ownerImg from "@/public/owner.jpeg"
import { aboutConfig } from "./aboutConfig"
import Link from "next/link"
import { Button } from "@/components/ui/button"


export default function Page() {

    return (
        <div>
            <div className="px-4 pt-20 mb-20">
                <div className="flex gap-3 flex-col items-center justify-center lg:justify-evenly lg:flex-row">
                    <div className="lg:w-1/2">
                        <Image
                            src={ownerImg}
                            width={500}
                            height={600}
                            alt=""
                            className=""
                            placeholder="blur"
                            blurDataURL={`data:image/svg+xml;base64,${toBase64(
                                shimmer(600, 600)
                            )}`}
                        />
                    </div>
                    <div className="flex flex-col max-w-[500px] lg:w-1/2">
                        <h2 className="text-2xl md:text-3xl">{aboutConfig.heading}</h2>
                        <h2 className="text-2xl md:text-3xl max-w-[25ch]">{aboutConfig.heading2}</h2>
                        <p className="mt-4 max-w-[40ch]">{aboutConfig.description}</p>
                        <Link href="/contact" className="mt-5">
                            <Button type="button" variant="default">
                                Get In Touch
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}