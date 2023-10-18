import { defineField, defineType } from "sanity"

export const resource = defineType({
    name: "resource",
    title: "Resource",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: Rule => Rule.required()
        }),
        {
            name: "videoLink",
            title: "YouTube Video Link",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            name: "description",
            title: "Resource Description",
            type: "string"
            
        }
    ]   
})