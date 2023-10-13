"use client"
import React from "react"
import { collabConfig } from "./collabConfig"
import { Input } from "@/components/ui/input"
import { CollabPageGallery } from "@/components/collab-page-gallery"

export default function Page() {
    function onSubmit() {

    }

    return (
        <div>
            <div className="mx-auto mt-[80px] flex max-w-7xl flex-col items-center px-5">
                <h1 className="max-w-[22ch] text-center text-2xl leading-normal md:text-4xl">{collabConfig.name} {collabConfig.name2}</h1>
                <p className="mt-3 max-w-[30ch] text-center text-base md:max-w-[40ch] md:text-lg">{collabConfig.description}</p>
                <p className="font-medium">{collabConfig.note}</p>
                <form onSubmit={onSubmit} className="mt-5 inline-flex w-full items-center justify-center">
                    <Input
                        id="collabEmail"
                        name="collabEmail"
                        type="email"
                        placeholder="Enter Your Email"
                        className="h-9 w-full max-w-[500px]"
                    />
                </form>
            </div>
                <CollabPageGallery/>
        </div>
    )
}