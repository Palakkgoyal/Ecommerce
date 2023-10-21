import { defineField, defineType } from "sanity"

export const order = defineType({
    name: "order",
    title: "Order",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: Rule => Rule.required()
        }),
        {
            name: "address",
            title: "Address",
            type: "array",
            of: [
                {
                    type: "object",
                    name: "user_address",
                    fields: [
                        { type: "string", name: "city" },
                        { type: "string", name: "line1" },
                        { type: "string", name: "line2" },
                        { type: "string", name: "postal_code" },
                        { type: "string", name: "state" },
                    ]
                }
            ],
            validation: Rule => Rule.required()
        },
        {
            name: 'phone',
            title: "Phone number",
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: "orders",
            title: "Orders By Customer",
            type: 'array',
            of: [
                {
                    type: "object",
                    name: "inline",
                    fields: [
                        { type: "string", name: "orderId" },
                        { type: "string", name: "slug" },
                        { type: "number", name: "quantity" },
                    ]
                }
            ],
            validation: Rule => Rule.required()
        },
        {
            name: "total_amt",
            title: "Total Amount",
            type: 'number',
            validation: Rule => Rule.required()
        },
        {
            name: "payment_id",
            title: "Payment Id",
            type: 'string',
            validation: Rule => Rule.required()
        },
    ]
})