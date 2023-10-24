import React from "react"
import starImg from "@/public/products/star.png"
import Image from "next/image"

export default function UserPoints() {
    return (
        <div className="p-5 max-w-7xl flex justify-end items-center">
            <div className="border-[2px] shadow-md flex px-2 py-[6px] rounded-lg bg-slate-100 gap-[4px]">
                <Image
                    src={starImg}
                    width={25}
                    height={25}
                    alt="points"
                />
                <p className="font-semibold">20</p>
            </div>
        </div>
    )
}