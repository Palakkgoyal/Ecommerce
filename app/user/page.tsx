import React from "react"
import Link from "next/link"

export default function Page() {
    return (
        <div>
            <Link href="/api/auth/login">Login</Link>
            {" "}
            <Link href="/api/auth/logout">Logout</Link>
        </div>
    )
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
import { getSession } from '@auth0/nextjs-auth0';

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