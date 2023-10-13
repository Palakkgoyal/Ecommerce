import React from "react"
import { contactConfig } from "@/config/site"

export function ContactText() {
    return (
        <div className="">
            <div>
                <h1 className="text-4xl">{contactConfig.name}</h1>
                <br />
                <p>{contactConfig.description1}</p>
                <br />
                <p>{contactConfig.email}</p>
                <br />
                <p>{contactConfig.address}</p>
                <br />
                <p>{contactConfig.note}</p>
                <br />
            </div>
        </div>
    )
}