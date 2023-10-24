'use client'
import React, { useEffect, useState } from "react"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { SanityProduct } from "@/config/inventory"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useUser } from '@auth0/nextjs-auth0/client';

export default function UserOrders() {
    const [allOrders, setAllOrders] = useState<SanityProduct[]>([])
    const { user } = useUser();

    async function getOrders() {
        const orders = await client.fetch<SanityProduct[]>(groq`*[_type=="order" && email == '${user?.email}'] {
            _id,
            _createdAt,
            name,
            address,
            phone,
            orders,
            total_amt,
            coupon_code,
          }`)
        setAllOrders(orders)
    }

    useEffect(() => {
        getOrders()
    }, [])

    console.log(allOrders)


    return (
        <div className="my-10 flex items-center justify-center border-[2px] p-5">
            <div className="flex w-full flex-col">
                <div>
                    <h2 className="text-lg font-bold">Your Orders</h2>
                </div>
                <div>
                    {allOrders.length === 0 ? (
                        <div className="mt-8">
                            <Link href="/products">
                                <Button variant="default">Let{`'`}s do some shopping 🛒</Button>
                            </Link>
                        </div>
                    ) : (
                        <div className="mt-8 flex gap-4 flex-wrap text-sm">
                            {allOrders.map((order, idx) => {
                                const { _id, orders, total_amt, address } = order
                                return (
                                    <div key={_id} className="border-[2px] flex flex-col gap-2 w-full max-w-[400px] shadow-sm p-5 rounded-lg">
                                        <dl className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <dt className="text-base">Total Amount: </dt>
                                                <dd className="text-base font-medium">{total_amt}₹</dd>
                                            </div>
                                        </dl>
                                        <p className="text-sm"><span className="font-semibold">Address: </span>{address[0].line1}, {address[0].city}...</p>
                                        <div>
                                            <h3 className="text-center font-semibold mb-2">Items</h3>
                                            <div className="flex flex-wrap gap-3">
                                                {orders.map((item: any) => (
                                                    <div key={item._key} className="shadow-md p-2 border-[1px] rounded-md">
                                                        <p>Quantity: {item.quantity}</p>
                                                        <Link href={`/products/${item.slug}`} className="text-blue-500 underline">{item.slug}</Link>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}