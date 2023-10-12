import React from "react"
import collabImg from "@/public/products/collab.png"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Collab() {
    return (
        <div className="md:bg-[#fffbfc] md:py-8">
            <div className="flex max-w-7xl mx-auto justify-between items-center gap-5 relative h-96">
                <div className="absolute opacity-30 -z-10 md:z-0 w-full md:opacity-100 md:w-96 h-96 md:relative shrink-0 ">
                    <Image
                        placeholder="blur"
                        src={collabImg}
                        alt="collaborate with craft"
                        width={230}
                        height={280}
                        className="w-full h-full object-cover md:rounded-lg"
                    />
                </div>
                <div className="items-center w-full md:max-w-[500px] flex flex-col px-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-center max-w-[30ch]">
                        Connect, learn and share your artistic venture by collaborating with me.
                    </h2>
                    <Link href="/collab">
                        <Button
                            type="button"
                            className="w-40 mt-[30px] md:mt-[15px] bg-violet-600 py-6 text-base font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
                        >
                            View More
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}