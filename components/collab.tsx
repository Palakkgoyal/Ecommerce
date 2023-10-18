import React from "react"
import collabImg from "@/public/products/collab.png"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Collab() {
    return (
        <div className="md:bg-[#fffbfc] md:py-8">
            <div className="relative mx-auto flex h-96 max-w-7xl items-center justify-between gap-5">
                <div className="absolute -z-10 h-96 w-full shrink-0 opacity-30 md:relative md:z-0 md:w-96 md:opacity-100 ">
                    <Image
                        placeholder="blur"
                        src={collabImg}
                        alt="collaborate with craft"
                        width={230}
                        height={280}
                        className="h-full w-full object-cover md:rounded-lg"
                    />
                </div>
                <div className="flex w-full flex-col items-center px-3 md:max-w-[500px]">
                    <h2 className="max-w-[30ch] text-center text-2xl font-bold md:text-3xl">
                        Connect, learn and share your artistic venture by collaborating with me.
                    </h2>
                    <Link href="/collab">
                        <Button
                            type="button"
                            className="z-[4] mt-[30px] w-40 bg-violet-600 py-6 text-base font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 md:mt-[15px]"
                        >
                            {"Let's Collab"}
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}