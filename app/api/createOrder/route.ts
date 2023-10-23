import { NextResponse, NextRequest } from "next/server";
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn, token } from "@/sanity/env"

const config = {
    dataset: dataset,
    projectId: projectId,
    useCdn: useCdn,
    apiVersion: apiVersion,
    token: token,
}

const client = createClient(config)

export const POST = async (req: NextRequest, res: NextResponse) => {
    const { data, address, orders } = await req.json();

    const { name, email, phone, total_amt, payment_id, coupon_code } = data

    try {
        const order = await client.create({
            _type: 'order',
            name,
            address,
            phone,
            email,
            orders,
            total_amt,
            payment_id,
            coupon_code,
        })

        return new NextResponse(order._createdAt, { status: 200 });
    } catch (error: any) {
        console.error(error)
        return new NextResponse(error, { status: 400 });
    }

}