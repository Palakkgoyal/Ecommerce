import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function UserDetails({ user }: any) {
    return (
        <div className='flex justify-center items-center h-[400px]'>
            <div className='border-[2px] shadow-md p-5'>
                <h2 className='text-center'>{user?.name}</h2>
                <p>{user?.email}</p>
                <Link href="/api/auth/logout">
                    <Button variant="outline" className='mt-4 mx-auto'>Logout</Button>
                </Link>
            </div>
            
            {/* <img src={user.picture} alt={user.name} /> */}
        </div>
    )
}