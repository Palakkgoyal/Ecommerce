import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FollowOn() {
    return (
        <div className="mt-[80px] flex flex-col gap-[20px] px-4">
            <h2 className="text-2xl font-bold tracking-normal">Follow On: </h2>
            <div className="flex flex-col gap-[10px] lg:flex-row">
                {/* <iframe src='https://widgets.sociablekit.com/linkedin-profile-posts/iframe/204773' frameBorder='0' scrolling='no' className="border-[2px] w-full h-[380px] md:w-[500px] md:h-[250px]"></iframe> */}
                <iframe src='https://widgets.sociablekit.com/instagram-feed/iframe/204793' frameBorder='0' scrolling='no' className="h-[380px] w-full border-[2px] md:h-[250px] md:w-[500px]"></iframe>
            </div>
            <Link href="/about">
                <Button
                    className="mt-[30px] w-40 bg-violet-600 py-6 text-base font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 md:mt-[15px]"
                >
                    About us
                </Button>
            </Link>
        </div>
    )
}