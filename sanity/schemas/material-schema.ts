import { defineField, defineType } from "sanity"

export const material = defineType({
    name: "material",
    title: "Material",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: Rule => Rule.required()
        }),
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [{ type: "image" }],
            validation: Rule => Rule.required()
        },
        {
            name: "currency",
            title: "Currency",
            type: "string",
            initialValue: "INR",
            validation: Rule => Rule.required()
        },
        {
            name: "price",
            title: "Price",
            type: "number",
            initialValue: 10000,
            validation: Rule => Rule.required()
        },
    ]   
})