import React from "react"
import { SanityResources } from "@/config/inventory"

interface Props {
    resources: SanityResources[]
}

export default function Resources({ resources }: Props) {
    return (
        <div className="mx-5 my-8 flex flex-wrap justify-evenly gap-8">
            {resources.map((resource) => {
                return (
                    <div key={resource._id} className="flex w-full max-w-[400px] flex-col items-center justify-center rounded-lg border-[2px] p-4">
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