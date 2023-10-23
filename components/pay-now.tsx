"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./payment-form";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart"

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!
);

export default function Home() {
  const { cartCount } = useShoppingCart()

  if (cartCount === 0) return (
    <div className="flex justify-center items-center">
      <Link href="/">Back to Home</Link>
    </div>
  )
  return (
    <div className="">
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
}