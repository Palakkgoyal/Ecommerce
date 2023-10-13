import React from "react";
import contactImg from "@/public/contactImg.jpg"
import Image from "next/image";
import { shimmer, toBase64 } from "@/lib/image"
import { ContactInput } from "@/components/contact-inputs";
import { ContactText } from "@/components/contact-text";

export default function Page() {
    return (
        <div>
            <div className="my-20 flex flex-col items-center justify-evenly gap-7 px-3 md:flex-row md:items-start">
                <div>
                    <Image
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(255, 280))}`}
                        src={contactImg}
                        alt="Contact Mahi Craft Gallery"
                        width={400}
                        height={600}
                        className="w-300px rounded-[50px] md:h-[600px] md:w-[400px]"
                    />
                </div>
                <div className="flex w-full max-w-[500px] flex-col">
                    <ContactText />
                    <ContactInput />
                </div>
            </div>
        </div>
    )
}