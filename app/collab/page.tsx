"use client"
import React from "react"
import { collabConfig } from "./collabConfig"
import { Input } from "@/components/ui/input"

export default function Page() {
    function onSubmit() {

    }

    return (
        <div>
            <div className="max-w-7xl mx-auto my-[80px] flex flex-col items-center px-5">
                <h1 className="text-2xl md:text-4xl text-center leading-normal max-w-[22ch]">{collabConfig.name} {collabConfig.name2}</h1>
                <p className="text-center text-base md:text-lg mt-3 max-w-[30ch] md:max-w-[40ch]">{collabConfig.description}</p>
                <p className="font-medium">{collabConfig.note}</p>
                <form onSubmit={onSubmit} className="items-center inline-flex mt-5 w-full justify-center">
                    <Input
                        id="collabEmail"
                        name="collabEmail"
                        type="email"
                        placeholder="Enter Your Email"
                        className="h-9 w-full max-w-[500px]"
                    />
                </form>
            </div>
        </div>
    )
}