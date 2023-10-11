import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FollowOn() {
    return (
        <div className="flex flex-col gap-[20px] px-4 mt-[80px]">
            <h2 className="text-2xl font-bold tracking-normal">Follow On: </h2>
            <div className="flex flex-col gap-[10px] lg:flex-row">
                <iframe src='https://widgets.sociablekit.com/linkedin-profile-posts/iframe/204773' frameBorder='0' scrolling='no' className="border-[2px] w-full h-[380px] md:w-[500px] md:h-[250px]"></iframe>
                <iframe src='https://widgets.sociablekit.com/instagram-feed/iframe/204793' frameBorder='0' scrolling='no' className="border-[2px] w-full h-[380px] md:w-[500px] md:h-[250px]"></iframe>
            </div>
            <Link href="/about">
                <Button variant="outline">
                    About us
                </Button>
            </Link>
        </div>
    )
}