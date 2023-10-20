import { defineField, defineType } from "sanity"

export const address = defineType({
    name: "address",
    title: "Address",
    type: "document",
    fields: [
        defineField({
            name: "first_name",
            title: "First Name",
            type: "string",
            validation: Rule => Rule.required()
        }),
        {
            name: "last_name",
            title: "Last name",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            name: "email",
            title: "Email",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            name: "phone_number",
            title: "Phone Number",
            type: "string",
            validation: Rule => Rule.required()
        },
    ]   
})