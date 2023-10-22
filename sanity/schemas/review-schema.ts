import { defineField, defineType } from "sanity"

export const review = defineType({
    name: "review",
    title: "Review",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: Rule => Rule.required()
        }),
        {
            name: "email",
            title: "Email",
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: "comment",
            title: "Comment",
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: "productRef",
            title: "Product Reference",
            type: 'reference',
            to: [{ type: 'product' }],
            validation: Rule => Rule.required()
        },
    ]
})