import React from "react"
import { SanityResources } from "@/config/inventory"

interface Props {
    resources: SanityResources[]
}

export default function Resources({ resources }: Props) {
    return (
        <div className="flex mx-5 my-8 gap-8 flex-wrap justify-evenly">
            {resources.map((resource) => {
                return (
                    <div key={resource._id} className="flex p-4 flex-col justify-center items-center rounded-lg w-full max-w-[400px] border-[2px]">
                        <div><h2 className="font-medium capitalize">{resource.name}</h2></div>
                        <div>
                            <iframe width="560" height="315"
                                src={`https://www.youtube.com/embed/${resource.videoId}`}
                                title="Mahi resin art tutorial"
                                frameBorder="0"
                                allow={`accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture  web-share`}
                                className="w-full max-w-[700px]"
                            >
                            </iframe>
                        </div>
                        <div>
                            <p>
                                {resource.description}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}