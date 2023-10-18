import { defineField, defineType } from "sanity"

export const offer = defineType({
    name: "offer",
    title: "Offer",
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
            validation: Rule => Rule.required()
        },
        {
            name: "type",
            title: "Type",
            type: "string",
            options: {
                list: ['seasonal', 'all', 'bulk', 'other']
            },
        },
        {
            name: "showOnHomePage",
            title: "Show On Home Page",
            type: "string",
            initialValue: "false",
            validation: Rule => Rule.required(),
            options: {
                list: ['y', 'n']
            }
        },
    ]   
})