"use client";
import React, { Suspense, useEffect, useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Billing from "./Billing";
import { useAppSelector } from "@/redux/store";
import CashfreePopup from "@/cashfree-popup/components/CashfreePopup"
import { selectTotalPrice } from "@/redux/features/cart-slice";
import Image from "next/image";

type BillingData = {
  name: string;
  email: string;
  phone: string;
};

const CheckoutContent = () => {
  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const totalPrice = useAppSelector(selectTotalPrice);
  const shippingFee = 15;

  // const [billingData, setBillingData] = useState({
  //   id: "",       // Optional customer ID (can use email or phone if needed)
  //   email: "",
  //   phone: "",
  //   name: "",     // If needed
  // });

  const generateOrderId = () => {
    const now = new Date();
    const dateStr = now.toISOString().slice(0, 10).replace(/-/g, '');
    const timeStr = now.getTime();
    return `ORD-${dateStr}-${timeStr}`;
  };

  const order_id = generateOrderId(); 

  const handleBillingSubmit = (data) => {
    console.log("Billing data submitted:", data);
    // Update the state to use in Cashfree
    setBillingData({
      email: data.email,
      phone: data.phone,
      name: data.name,       // Optional
    });
  };
  const [billingData, setBillingData] = useState<BillingData | null>(null);

  useEffect(() => {
    const savedBillingData = localStorage.getItem("billingData");
    if (savedBillingData) {
      try {
        const parsedData = JSON.parse(savedBillingData);
        setBillingData({
          name: parsedData.name || "",
          email: parsedData.email || "",
          phone: parsedData.phone || "",
        });
      } catch (err) {
        console.error("Error parsing billing data:", err);
      }
    }
  }, []);
  

  return (
    <>
      <Breadcrumb title={"Checkout"} pages={["checkout"]} />
      <section className="overflow-hidden py-20 bg-[#FFFAF5]">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <form>
            <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-11">
              <div className="lg:max-w-[670px] w-full">
                <Billing onSubmit={handleBillingSubmit} />                
                <div className="bg-white shadow-1 rounded-[10px] p-4 sm:p-8.5 mt-7.5">
                  {/* <div>
                    <label htmlFor="notes" className="block mb-2.5">
                      Other Notes (optional)
                    </label>
                    <textarea
                      name="notes"
                      id="notes"
                      rows={5}
                      placeholder="Notes about your order, e.g. special notes for delivery."
                      className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full p-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    ></textarea>
                  </div> */}
                </div>
              </div>

              <div className="max-w-[455px] w-full">
                <div className="bg-white shadow-1 rounded-[10px]">
                  <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5">
                    <h3 className="font-medium text-xl text-dark">Your Order</h3>
                  </div>

                  <div className="pt-2.5 pb-8.5 px-4 sm:px-8.5">
                    <div className="flex items-center justify-between py-5 border-b border-gray-3">
                      <div><h4 className="font-medium text-dark">Product</h4></div>
                      <div><h4 className="font-medium text-dark text-right">Subtotal</h4></div>
                    </div>

                    <div className="space-y-4 mt-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-start justify-between gap-4 p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-4 flex-1 min-w-0">
                            <div className="flex-shrink-0 bg-white rounded-lg w-16 h-16 flex items-center justify-center overflow-hidden border border-gray-200">
                              <Image 
                                src={item.imgs?.thumbnails[0] || "/placeholder.jpg"} 
                                alt={item.title} 
                                width={64} 
                                height={64}
                                className="object-contain w-full h-full"
                              />
                            </div>
                            <div className="min-w-0">
                              <h3 className="font-medium text-gray-900 truncate">{item.title}</h3>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-sm font-medium text-[#800000]">
                                  ₹{item.discountedPrice.toLocaleString("en-IN")}
                                </span>
                                {item.discountedPrice !== item.price && (
                                  <span className="text-sm text-gray-500 line-through">
                                    ₹{item.price.toLocaleString("en-IN")}
                                  </span>
                                )}
                              </div>
                              <div className="mt-2 text-sm text-gray-600">Qty: {item.quantity}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-[#800000]">
                              ₹{(item.discountedPrice * item.quantity).toLocaleString("en-IN")}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between py-5 border-b border-gray-3 mt-6">
                      <div><p className="text-dark">Shipping Fee</p></div>
                      <div><p className="text-dark text-right">₹{shippingFee.toLocaleString("en-IN")}</p></div>
                    </div>

                    <div className="flex items-center justify-between pt-5">
                      <div><p className="font-medium text-lg text-dark">Total</p></div>
                      <div><p className="font-medium text-lg text-[#800000] text-right">
                        ₹{(totalPrice + shippingFee).toLocaleString("en-IN")}
                      </p></div>
                    </div>
                  </div>
                </div>
                {billingData && (
  <CashfreePopup
    orderId={order_id}
    amount={totalPrice + shippingFee}
    customer={{
      id: 'guest',
      email: billingData.email,
      phone: billingData.phone,
      name: billingData.name,
    }}
  />
)}

              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

const Checkout = () => {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading checkout...</div>}>
      <CheckoutContent />
    </Suspense>
  );
};

export default Checkout;