import React from "react"


export default function FollowOn() {
    return (
        <div className="flex flex-col gap-[20px] px-4">
            <h2 className="text-2xl font-bold tracking-normal">Follow On: </h2>
            <div className="flex flex-col gap-[10px] lg:flex-row">
                <iframe src='https://widgets.sociablekit.com/linkedin-profile-posts/iframe/204773' frameborder='0' scrolling='no' className="border-[2px] w-full h-[380px] md:w-[500px] md:h-[250px]"></iframe>
                <iframe src='https://widgets.sociablekit.com/instagram-feed/iframe/204793' frameborder='0' scrolling='no' className="border-[2px] w-full h-[380px] md:w-[500px] md:h-[250px]"></iframe>
            </div>
        </div>
    )
}