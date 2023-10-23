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

// 1. First Time customer discount= Get 10% on first purchase from our website.Use code "FIRSTBUY" to redeem the discount.

// 2. Special offer for website launch= Get 20% off till date 30 October. Use code "HAPPYUS" to redeem the discount.

// 3. Bulk order=Discounted price on bulk order that will be 25% on total.( 10+ items) Use code"BIG20"

// 4. Loyalty Program=Customer can earn points with each purchase that they can redeem in the next purchase.5 points on each purchase. Login is must for this program.

// 5. Bundle discount = 5% on purchasing related products together. Use code "RELATED3"

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