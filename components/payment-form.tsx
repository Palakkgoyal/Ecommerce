"use client";
import { CardElement, useElements, useStripe, AddressElement } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import { useShoppingCart } from "use-shopping-cart"
import { useUser } from '@auth0/nextjs-auth0/client';
import Loader from "./loader"

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const { cartDetails } = useShoppingCart()
  const { user } = useUser();
  const [loading, setLoading] = useState<Boolean>(false)

  console.log(loading, "loading")

  const cartArr = Object.entries(cartDetails!)
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
  const orderAmt = cartArr.map((item) => (item[1].price / 100) * item[1].quantity).reduce((a, b) => a + b)
  const shippingAmt = 50
  const orderTotal = orderAmt + shippingAmt

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

      if (res?.paymentIntent?.status === "succeeded") {
        const address = [{ ...value?.address, _key: "address_key" }]
        const orders = orderData
        const data = {
          name: value?.name,
          phone: value?.phone,
          email: user?.email,
          payment_id: res?.paymentIntent?.id,
          total_amt: res?.paymentIntent?.amount,
        }
        await createOrder(data, address, orders)
      }

    } catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false)
    }
  };

  async function createOrder(orderData: any, address: any, orders: any) {
    const { data } = await axios.post("/api/createOrder", {
      data: orderData,
      address: address,
      orders: orders,
    });
  }

  return (
    <div className="relative mx-auto my-10 max-w-7xl rounded-lg border-[2px] border-solid py-5 ">
      <div>
        <h1 className="text-center font-semibold ">
          Pay: {orderTotal}₹
        </h1>
      </div>
      <form onSubmit={onSubmit} className="flex flex-col gap-5 p-5">
        <AddressElement options={{
          mode: 'shipping',
          allowedCountries: ['IN'],
          fields: {
            phone: "always"
          }
        }}
        />
        <label htmlFor="card-element">Credit or debit card</label>
        <div id="card-element" className="form-control">
          <CardElement className="rounded-md border-[2px] bg-white p-3" />
        </div>
        {/* <button type="submit">Submit</button> */}
        <Button variant="default" className="w-full max-w-[500px] mx-auto">Submit</Button>
      </form>
      {loading && <Loader text="Please do not refresh..." />}
    </div>
  );
}