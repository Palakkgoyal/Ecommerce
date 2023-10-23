import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function UserDetails({ user }: any) {
    return (
        <div className='flex h-[400px] items-center justify-center'>
            <div className='border-[2px] p-5 shadow-md'>
                <h2 className='text-center'>{user?.name}</h2>
                <p>{user?.email}</p>
                <Link href="/api/auth/logout">
                    <Button variant="outline" className='mx-auto mt-4'>Logout</Button>
                </Link>
            </div>
            
            {/* <img src={user.picture} alt={user.name} /> */}
        </div>
    )
}