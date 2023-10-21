import React from "react"
import Home from "@/components/pay-now"
import { getSession } from '@auth0/nextjs-auth0';

export default async function Page() {
    const res = await getSession();
    const user = res?.user

    if(!user) return null
    
    return (
        <div>
            <Home />
        </div>
    )
}