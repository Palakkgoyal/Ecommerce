export type ReturnConfig = typeof returnConfig

export const returnConfig = {
    name: "Return and Exchange Policy",
    description: "DEFECTIVE / WRONG / MISSING PRODUCT",
    note: {
        text: "We require a video of the product being opened and proof that it was returned in the same condition it was sent.",
    },
    policies: [
        "Customers can request a full refund if the product they received is in bad condition. The refund will be transferred to their bank account after we receive the returned product.",
        "To request a return or exchange, customers need to do so within 3 - 4 days after receiving the product.",
    ],
}