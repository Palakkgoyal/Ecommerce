import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Login() {
    return (
        <div className="flex w-full mt-10 items-center justify-center">
            <div className="mt-10 border-[2px] p-5 rounded-md shadow-md">
                <h1 className="text-center text-xl font-medium mb-3">Login/Signup</h1>
                <p>Please login to continue</p>
                <Link href="/api/auth/login">
                    <Button type="button"
                        className="bg-violet-600 mt-2 w-full py-6 text-base font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    >
                        Login
                    </Button>
                </Link>
            </div>
        </div>
    )
}