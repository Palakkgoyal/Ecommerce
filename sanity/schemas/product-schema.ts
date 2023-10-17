import { defineField, defineType } from "sanity"

export const product = defineType({
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
            name: "slug",
            title: "Slug",
            type: "slug",
            validation: Rule => Rule.required(),
            options: {
                source: "name",
                maxLength: 200,
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [{ type: "image" }],
            validation: Rule => Rule.required()
        },
        {
            name: "categories",
            title: "Categories",
            type: "array",
            initialValue: ['keychain'],
            of: [{ type: "string" }],
            options: {
                list: ['frames', 'jewellery', 'phone accessories', 'hoops', 'clock', 'bookmark', 'rakhi', 'string art', 'gift hamper', 'tray', 'keychain']
            },
            validation: Rule => Rule.required()
        },
        {
            name: "dimension",
            title: "Dimension",
            type: "string",
            initialValue: 'One Size',
        },
        {
            name: "description",
            title: "Description",
            type: "string",
            initialValue: "Describe your product",
            validation: Rule => Rule.required()
        },
        {
            name: "currency",
            title: "Currency",
            type: "string",
            initialValue: "INR",
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