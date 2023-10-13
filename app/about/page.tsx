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
            <div className="mb-20 px-4 pt-20">
                <div className="flex flex-col items-center justify-center gap-3 lg:flex-row lg:justify-evenly">
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
                    <div className="flex max-w-[500px] flex-col lg:w-1/2">
                        <h2 className="text-2xl md:text-3xl">{aboutConfig.heading}</h2>
                        <h2 className="max-w-[25ch] text-2xl md:text-3xl">{aboutConfig.heading2}</h2>
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