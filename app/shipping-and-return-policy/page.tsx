import React from "react"
import { returnConfig } from "./returnConfig"

export default function Page() {
    const { name, description, policies, note } = returnConfig
    return (
        <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-2xl lg:px-8">
            <h1 className="mb-5 text-center text-3xl font-bold tracking-tight sm:text-4xl">{name}</h1>
            <p className="mb-2 text-xl">{description}</p>
            <p className="mb-5 text-sm font-medium">Note: {note.text}</p>
            <ul>
                {policies.map((policy, idx) => <li className="mb-2">{idx+1}. {policy}</li>)}
            </ul>
        </div>
    )
}
