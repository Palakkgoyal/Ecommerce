import { defineField, defineType } from "sanity"

export const offer = defineType({
    name: "product",
    title: "Products",
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
            name: "description",
            title: "Description",
            type: "string",
            initialValue: "Describe your product",
            validation: Rule => Rule.required()
        },
    ]   
})