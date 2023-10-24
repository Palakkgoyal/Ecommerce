"use client";
import { CardElement, useElements, useStripe, AddressElement } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { useUser } from '@auth0/nextjs-auth0/client';
import { Input } from "@/components/ui/input";
import Loader from "./loader"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const { cartDetails, cartCount, clearCart } = useShoppingCart()
  const { user } = useUser();
  const [loading, setLoading] = useState<Boolean>(false)
  const [code, setCode] = useState("")
  const [orderTotal, setOrderTotal] = useState<Number>(0)
  const [applied, setApplied] = useState<boolean>(false)
  const { toast } = useToast()
  const router = useRouter()
  const cartArr = Object.entries(cartDetails!)

  function applyCoupon(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (applied) return

    let discount = 0
    if (code === 'HAPPYUS') {
      discount = 20
    }
    else if (code === 'BIG20' && cartCount && cartCount > 10) {
      discount = 20
    }
    else {
      toast({
        title: `Uh Oh!`,
        description: "No such coupon code available",
        variant: "destructive"
      })
      return
    }

    const discountAmt = (discount / 100) * (+orderTotal)
    const finalAmt = +orderTotal - discountAmt
    setApplied(true)
    setOrderTotal(finalAmt)
  }
  const orderData = cartArr.map((item) => ({
    orderId: {
      _type: 'reference',
      _ref: item[0],
    },
    slug: item[1].slug,
    quantity: item[1].quantity,
    _key: item[0]
  }))

  //Get the total amount of the items purchased
  useEffect(() => {
    const orderArr = cartArr.map((item) => (item[1].price / 100) * item[1].quantity)
    const orderAmt = orderArr.length > 0 ? orderArr.reduce((a, b) => a + b) : 0
    const shippingAmt = 50
    setOrderTotal(orderAmt + shippingAmt)
  }, [])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    const cardElement = elements?.getElement("card");
    const addressElement = elements?.getElement("address")

    const addressData = await addressElement?.getValue();
    const complete = addressData?.complete
    const value = addressData?.value
    try {
      if (!stripe || !cardElement || !complete) {
      // if (!stripe || !complete) {
        setLoading(false)
        return null
      }
      const { data } = await axios.post("/api/checkout", {
        data: { amount: orderTotal },
        address: value,
      });
      const clientSecret = data;

      const res = await stripe?.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement },
      });

      console.log(res, "res")

      if (res?.paymentIntent?.status === "succeeded") {
      const address = [{ ...value?.address, _key: "address_key" }]
      const orders = orderData
      const data: any = {
        name: value?.name,
        phone: value?.phone,
        email: user?.email,
        payment_id: "temp_id",
        total_amt: orderTotal,
        coupon_code: code,
      }
      await createOrder(data, address, orders)
        .then(async () => {
          await clearCart()
        })
        .then(() => {
          toast({
            title: `Order placed`,
            description: "We will contact you soon regarding payment",
          })
        })
      }

    } catch (error) {
      console.log(error);
      toast({
        title: `Uh Oh!`,
        description: "There was an error placing order!",
        variant: "destructive"
      })
    }
    finally {
      setLoading(false)
      // router.push("/")
    }
  };

  async function createOrder(orderData: any, address: any, orders: any) {
    await axios.post("/api/createOrder", {
      data: orderData,
      address: address,
      orders: orders,
    })
      .catch(() => {
        toast({
          title: `Error while saving address`,
          description: "Please contact seller for this",
          variant: "destructive",
          action: (
            <Link href="https://wa.me/+918989517165">
              <Button variant="link" className="gap-x-2 whitespace-nowrap" >
                <span>Contact Seller</span>
              </Button>
            </Link>
          )
        })
      })
  }

  return (
    <div className="relative mx-auto my-10 max-w-7xl rounded-lg border-[2px] border-solid py-5 ">
      <div>
        <h1 className="text-center font-semibold ">
          Pay: {+orderTotal}₹
        </h1>
      </div>
      <form onSubmit={applyCoupon} className="p-5">
        <label htmlFor="coupon" className="block">Have a coupon code?</label>
        {/* <input type="text" className="p-[3px] mr-2" disabled={applied} onChange={(e) => setCode(e.target.value)}/> */}
        <Input
          id="coupon"
          name="coupon"
          type="text"
          required
          placeholder="Enter Coupon Code"
          className="mr-2 mt-2 inline-block h-9 w-[210px]"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          disabled={applied}
        />
        <Button variant="secondary">Apply Now</Button>
      </form>
      <form onSubmit={onSubmit} className="flex flex-col gap-5 p-5">
        <AddressElement options={{
          mode: 'shipping',
          allowedCountries: ['IN'],
          fields: {
            phone: 'always'
          }
        }}
        />
        <label htmlFor="card-element">Credit or debit card</label>
        <div id="card-element" className="form-control">
          <CardElement className="rounded-md border-[2px] bg-white p-3" />
        </div>
        <Button variant="default" type="submit" className="mx-auto w-full max-w-[500px]">Place Order</Button>
      </form>
      {loading && <Loader text="Please do not refresh..." />}
    </div>
  );
}