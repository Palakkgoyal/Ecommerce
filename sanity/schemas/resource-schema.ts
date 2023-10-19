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
            name: "videoId",
            title: "YouTube Video Id",
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