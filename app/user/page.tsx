import React from "react"
import Link from "next/link"
import Login from "@/components/login";
import { getSession } from '@auth0/nextjs-auth0';

export default async function Page() {
    const res = await getSession();
    const user = res?.user
    
    return (
        user ? (
            <div>
                {/* <img src={user.picture} alt={user.name} /> */}
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <Link href="/api/auth/logout">Logout</Link>
            </div>
        ) : (
            <Login />
        )
    );
}

// 'use client';

// import { useUser } from '@auth0/nextjs-auth0/client';

// export default function Page() {
//   const { user, error, isLoading } = useUser();

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>{error.message}</div>;

//   return (
//       user && (
//           <div>
//             {/* <img src={user.picture} alt={user.name} /> */}
//             <h2>{user.name}</h2>
//             <p>{user.email}</p>
//           </div>
//       )
//   );
// }
// import { getSession } from '@auth0/nextjs-auth0';

// export default async function Page() {
//   const { user } = await getSession();

//   return (
//       user && (
//           <div>
//             <img src={user.picture} alt={user.name} />
//             <h2>{user.name}</h2>
//             <p>{user.email}</p>
//           </div>
//       )
//   );
// }