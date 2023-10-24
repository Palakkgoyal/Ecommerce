import React from "react"
import Login from "@/components/login";
import UserDetails from "@/components/user-details"
import UserOrders from "@/components/user-orders";
import { getSession } from '@auth0/nextjs-auth0';

export default async function Page() {
    const res = await getSession();
    const user = res?.user
    console.log(user, "user")
    return (
        user ? (
            <div>
                <UserDetails user={user} />
                <UserOrders />
            </div>
        ) : (
            <div>
                <Login />
            </div>
        )
    );
}

// 1. First Time customer discount= Get 10% on first purchase from our website.Use code "FIRSTBUY" to redeem the discount.

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