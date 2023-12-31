import React from "react"
import { User, Home, GraduationCap } from "lucide-react"
import Link from "next/link"

export function SiteFooterMenu() {
    return (
        <header className="sticky bottom-0 z-40 w-full rounded-lg bg-background  sm:hidden">
            <div className="mx-auto flex h-12 max-w-6xl items-center justify-between rounded-[inherit] border-t">
                <Link href="/" className="flex h-full w-full flex-col items-center justify-center">
                    <Home className="h-5" />
                    <p className="text-[10px]">Home</p>
                </Link>
                <Link href="/resources" className="flex h-full w-full flex-col items-center justify-center">
                    <GraduationCap  />
                    <p className="text-[10px]">Learn</p>
                </Link>
                <Link href="/products" className="mb-4 flex h-full w-full items-center justify-center">
                    <span className="fit-content rounded-full border-[5px] border-solid bg-[hsl(var(--background))] p-2"><Store /></span>
                </Link>
                <Link href="/offers" className="flex h-full w-full flex-col items-center justify-center">
                    <BadgePercent />
                    <p className="text-[10px]">Offers</p>
                </Link>
                <Link href="/user" className="flex h-full w-full flex-col items-center justify-center">
                    <User className="h-5" />
                    <p className="text-[10px]">Me</p>
                </Link>
            </div>
        </header>
    )
}


function BadgePercent() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-percent"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="m15 9-6 6" /><path d="M9 9h.01" /><path d="M15 15h.01" /></svg>
    )
}

function Store() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-store"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" /><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" /><path d="M2 7h20" /><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" /></svg>
    )
}