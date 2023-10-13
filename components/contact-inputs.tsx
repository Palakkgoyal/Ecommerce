"use client"
import React, { useState, useRef } from "react"
import { contactConfig } from "@/config/site"
import { Input } from "@/components/ui/input"
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export function ContactInput() {
    const initData = {
        name: "",
        email: "",
        message: ""
    }
    const { toast } = useToast()
    const [formData, setFormData] = useState(initData)

    const { name, email, message } = formData

    const formRef = useRef(null)
    const validateEmail = () => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const isValid = validateEmail()
        if (!isValid) {
            toast({
                title: `Invalid Email ❌`,
                description: "Please enter a valid email!",
            })
            return;
        }

        if (
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID2 &&
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
            formRef.current
        ) {
            emailjs
                .sendForm(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID2,
                    formRef.current,
                    process.env.NEXT_PUBLIC_EMAILJS_USER_ID
                )
                .then(
                    (result) => {
                        setFormData(initData)
                        toast({
                            title: `Yay! Email Sent 🥰`,
                            description: "We will contact you soon.",
                        })
                    },
                    (error) => {
                        alert("There was an error sending email!");
                    }
                );
        }
    };

    return (
        <div className="w-full max-w-[500px]">
            <form ref={formRef} onSubmit={sendEmail} className="flex w-full flex-col gap-5">
                <div>
                    <label htmlFor="name">Full Name *</label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Enter Your Name"
                        className="mr-2 mt-2 h-9 w-full max-w-[500px]"
                        value={name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email *</label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="Enter Your Email"
                        className="mr-2 mt-2 h-9 w-full max-w-[500px]"
                        value={email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="name">Message *</label>
                    <textarea name="message" id="" cols={20} rows={5} placeholder="What you wanna say?" className="mr-2 mt-2 flex w-full max-w-[500px] rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        value={message}
                    />
                </div>
                <Button
                    type="submit"
                    className="w-full bg-violet-600 py-6 text-base font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}