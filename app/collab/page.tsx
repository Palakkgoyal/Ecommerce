"use client"
import React, { useRef, useState } from "react"
import { collabConfig } from "./collabConfig"
import { Input } from "@/components/ui/input"
import { CollabPageGallery } from "@/components/collab-page-gallery"
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function Page() {
    const formRef = useRef(null);
    const [email, setEmail] = useState("")
    const { toast } = useToast()

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
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
            formRef.current
        ) {
            emailjs
                .sendForm(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                    formRef.current,
                    process.env.NEXT_PUBLIC_EMAILJS_USER_ID
                )
                .then(
                    (result) => {
                        setEmail("")
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
        <div>
            <div className="mx-auto mt-[80px] flex max-w-7xl flex-col items-center px-5">
                <h1 className="max-w-[22ch] text-center text-2xl leading-normal md:text-4xl">{collabConfig.name} {collabConfig.name2}</h1>
                <p className="mt-3 max-w-[30ch] text-center text-base md:max-w-[40ch] md:text-lg">{collabConfig.description}</p>
                <p className="font-medium">{collabConfig.note}</p>
                <form ref={formRef} onSubmit={sendEmail} className="mt-5 inline-flex w-full items-center justify-center">
                    <Input
                        id="collabEmail"
                        name="collabEmail"
                        type="email"
                        placeholder="Enter Your Email"
                        className="h-9 w-full max-w-[500px] mr-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button variant="default" type="submit">
                        Send
                    </Button>
                </form>
            </div>
            <CollabPageGallery />
        </div>
    )
}