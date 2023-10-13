import React from 'react';
import { policyConfig } from './policyConfig';
import Link from 'next/link';

export default function Page() {
    const { name, description, policies, note } = policyConfig
    return (
        <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-2xl lg:px-8">
            <h1 className="mb-3 text-center text-3xl font-bold tracking-tight sm:text-4xl">{name}</h1>
            <p className="mb-2 text-xl font-normal">{description}</p>
            <ul>
                {policies.map((policy, idx) => <li className="mb-2">{idx+1}. {policy}</li>)}
            </ul>
            <p className="mt-9 text-sm">{note.text} <Link href={note.href} className="underline">{note.hrefText}</Link></p>
        </div>
    )
}




// Terms of service

// Please note that all intellectual property rights belong to us, and customers are responsible for ensuring they do not use our products and videos without permission. If you have any further questions or concerns, please let us know."


// const faq = [
//     {
//         id: 1,
//         header: "What types of handmade gift items do you offer?",
//         text: "We offer a wide range of handmade gift items, including resin art (Frames, keychain, jewelry, home decor, name stand, phone case ) string art, embroidery, and more. Explore our website to see our full collection.",
//     },
//     {
//         id: 2,
//         header: "Can I customize a gift item to make it more personal?",
//         text: "Absolutely! Many of our products are customizable. You can add names, dates, or special messages to make your gift unique. You can even give us your memorable things to be preserved. Check the product description for customization options.",
//     },
//     {
//         id: 3,
//         header: "How do I place an order?",
//         text: "Ordering is easy! Simply browse our website, select the items you like, and add them to your cart. Then, follow the checkout process, where you'll provide your shipping information and payment details or you can simply click on Buy Now to purchase a particular product.",
//     },
//     {
//         id: 4,
//         header: "What payment methods do you accept?",
//         text: "We accept payment by phonepay, Google pay, Paytm. We also offer offline payment for the convenience of customer who pick their order directly from us .",
//     },
//     {
//         id: 5,
//         header: "What is your shipping policy?",
//         text: " We strive to ship orders as quickly as possible. Shipping times may vary based on your location and the complexity of the item. It take 6-7 days maximum in the process and average 3-4 days in shipping.",
//     },
//     {
//         id: 6,
//         header: "Do you offer international shipping?",
//         text: "Yes, we do! We offer international shipping to many countries. Shipping fees and delivery times may vary depending on your location.",
//     },
//     {
//         id: 7,
//         header: "What is your return policy?",
//         text: "We want you to be completely satisfied with your purchase. If, for any reason, you're not happy with your order, please fill a return request within 2 days of delivery.",
//     },
//     {
//         id: 8,
//         header: "What will be the shipping charges ?",
//         text: "It depands upon the weight of the order and the location. Indian courier charge 30-50 rupee for product (around 40-200 gm) light boxes 80-120(around 280 gm) etc.",
//     },
//     {
//         id: 9,
//         header: "How can I contact your customer support team?",
//         text: "You can reach our friendly customer support team by emailing [desarlamahi@gmail.com] or by filling out our contact form on the website. We're here to assist you with any questions or concerns.",
//     },
//     {
//         id: 10,
//         header: "Do you offer gift wrapping or packaging options?",
//         text: "Yes, we offer gift wrapping and personalized packaging options to make your gift extra special. During the checkout process, you can select these options if available for your chosen items.",
//     },
// ]