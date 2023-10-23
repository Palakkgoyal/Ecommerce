'use client'
import React, { useEffect, useState } from "react"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { SanityProduct } from "@/config/inventory"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function UserOrders() {
    const email = 'palakgoyal0304@gmail.cm'
    const [orders, setOrders] = useState<SanityProduct[]>([])

    async function getOrders() {
        const orders = await client.fetch<SanityProduct[]>(groq`*[_type=="order" && email == '${email}'] {
            _id,
            _createdAt,
            name,
            address,
            phone,
            orders,
            total_amt,
            coupon_code,
          }`)
        setOrders(orders)
    }

    useEffect(() => {
        getOrders()
    }, [])

    console.log(orders)

    return (
        <div className="my-10 flex items-center justify-center border-[2px] p-5">
            <div className="flex w-full flex-col">
                <div>
                    <h2 className="text-lg font-bold">Your Orders</h2>
                </div>
                <div>
                    {orders.length === 0 ? (
                        <div className="mt-8">
                            <Link href="/products">
                                <Button variant="default">Let{`'`}s do some shopping 🛒</Button>
                            </Link>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </div>
    )
}