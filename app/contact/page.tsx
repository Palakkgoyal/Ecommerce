import React from "react";
import contactImg from "@/public/contactImg.jpg"
import Image from "next/image";
import { shimmer, toBase64 } from "@/lib/image"
import { ContactInput } from "@/components/contact-inputs";
import { ContactText } from "@/components/contact-text";

export default function Page() {
    return (
        <div>
            <div className="flex px-3 flex-col items-center md:items-start my-20 justify-evenly gap-7 md:flex-row">
                <div>
                    <Image
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(255, 280))}`}
                        src={contactImg}
                        alt="Contact Mahi Craft Gallery"
                        width={400}
                        height={600}
                        className="w-300px md:w-[400px] md:h-[600px] rounded-[50px]"
                    />
                </div>
                <div className="w-full max-w-[500px] flex flex-col">
                    <ContactText />
                    <ContactInput />
                </div>
            </div>
        </div>
    )
}