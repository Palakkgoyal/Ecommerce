"use client"
import React from "react"
import { Input } from "@/components/ui/input"
import { useRouter, useSearchParams } from "next/navigation"

export function SearchBar() {
    const searchParams = useSearchParams()
    const router = useRouter()

    const defaultSearchQuery = searchParams.get('search') ?? ""

    function onSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const searchQuery = formData.get('search')
        router.replace(`/products?search=${searchQuery}`)
      }
    return (
        <div className="mx-auto flex justify-center mt-10">
            <form onSubmit={onSubmit} className="items-center inline-flex">
                <Input
                    id="search"
                    name="search"
                    type="search"
                    autoComplete="off"
                    defaultValue={defaultSearchQuery}
                    placeholder="Search products..."
                    className="h-9 w-[300px]"
                />
            </form>
        </div>
    )
}