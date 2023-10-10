export type PolicyConfig = typeof policyConfig

export const policyConfig = {
    name: "Privacy Policy",
    description: "To answer your questions:",
    policies: [
        "We collect personal information such as name, email, address, and mobile number from customers.",
        "The collected information is used for order processing and in the case of return or exchange of the product.",
        "We do not share customers' personal information with any third parties.",
    ],
    note: {
        text: "If you have any further questions or concerns regarding our privacy policy, feel free to let us know by",
        hrefText: "contact us",
        href: "/contact"
    }
}