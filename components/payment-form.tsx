"use client";
import { CardElement, useElements, useStripe, AddressElement } from "@stripe/react-stripe-js";
import axios from "axios";
import React from "react";
import { Button } from "@/components/ui/button"
import { useShoppingCart } from "use-shopping-cart"

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const { cartDetails } = useShoppingCart()

  
  const cartArr = Object.entries(cartDetails!)
  console.log(cartArr)
  
  //Get the total amount of the items purchased
  const orderAmt = cartArr.map((item) => (item[1].price / 100) * item[1].quantity).reduce((a, b) => a + b)
  const shippingAmt = 50
  const orderTotal = orderAmt + shippingAmt

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cardElement = elements?.getElement("card");
    const addressElement = elements?.getElement("address")

    const { complete, value } = await addressElement?.getValue();
    try {
      if (!stripe || !cardElement || !complete) {
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

      console.log(res, 'res')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border-[2px] rounded-lg max-w-7xl py-5 my-10 mx-auto border-solid ">
      <div>
        <h1 className="text-center">
          Pay: {orderAmt}(Order Amount) + {shippingAmt}(Shipping) = {orderTotal}₹
        </h1>
      </div>
      <form onSubmit={onSubmit} className="p-5 flex flex-col gap-5">
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
          <CardElement className="border-[2px] p-3 rounded-md bg-white" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}