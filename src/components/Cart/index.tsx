"use client";
import React from "react";
import Discount from "./Discount";
import OrderSummary from "./OrderSummary";
import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import SingleItem from "./SingleItem";
import Breadcrumb from "../Common/Breadcrumb";
import Link from "next/link";
import { toast } from "react-toastify";

type CartItem = {
  id: number;
  title: string;
  slug: string;
  price: number;
  discountedPrice: number;
  quantity: number;
  imgs: { thumbnails: string[]; previews: string[] };
};

const Cart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useAppSelector((state) => state.cartReducer.items) as CartItem[];

  return (
    <>
      {/* Breadcrumb Section */}
      <section>
        <Breadcrumb title={"Cart"} pages={["Cart"]} />
      </section>

      {cartItems.length > 0 ? (
        <section className="py-10 md:py-20 bg-[#FFFAF5]">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mb-7.5">
              <h2 className="font-medium text-dark text-xl sm:text-2xl">Your Cart</h2>
            </div>

            <div className="bg-white rounded-[10px] shadow-1">
              {/* Mobile-friendly table */}
              <div className="block md:table w-full">
                {/* Table header - hidden on mobile */}
                <div className="hidden md:flex items-center py-5.5 px-4 sm:px-7.5 bg-gray-100">
                  <div className="flex-1 min-w-0">
                    <p className="text-dark font-medium">Product</p>
                  </div>
                  <div className="w-24 sm:w-32 text-center">
                    <p className="text-dark font-medium">Price</p>
                  </div>
                  <div className="w-32 sm:w-40 text-center">
                    <p className="text-dark font-medium">Quantity</p>
                  </div>
                  <div className="w-24 sm:w-32 text-center">
                    <p className="text-dark font-medium">Subtotal</p>
                  </div>
                  <div className="w-16 text-right">
                    <p className="text-dark font-medium">Action</p>
                  </div>
                </div>

                {/* Cart items */}
                {cartItems.map((item) => (
                  <SingleItem item={item} key={item.id} />
                ))}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-11 mt-9">
              <Discount /> {/* Uncommented as per request */}
              <OrderSummary />
            </div>
          </div>
        </section>
      ) : (
        <section className="py-10 md:py-20 text-center">
          <div className="mx-auto pb-7.5">
            <svg
              className="mx-auto"
              width="80"
              height="80"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="50" cy="50" r="50" fill="#F3F4F6" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M36.1693 36.2421C35.6126 36.0565 35.0109 36.3574 34.8253 36.9141C34.6398 37.4707 34.9406 38.0725 35.4973 38.258L35.8726 38.3831C36.8308 38.7025 37.4644 38.9154 37.9311 39.1325C38.373 39.3381 38.5641 39.5036 38.6865 39.6734C38.809 39.8433 38.9055 40.0769 38.9608 40.5612C39.0192 41.0726 39.0208 41.7409 39.0208 42.751L39.0208 46.5361C39.0208 48.4735 39.0207 50.0352 39.1859 51.2634C39.3573 52.5385 39.7241 53.6122 40.5768 54.4649C41.4295 55.3176 42.5032 55.6844 43.7783 55.8558C45.0065 56.0209 46.5681 56.0209 48.5055 56.0209H59.9166C60.5034 56.0209 60.9791 55.5452 60.9791 54.9584C60.9791 54.3716 60.5034 53.8959 59.9166 53.8959H48.5833C46.5498 53.8959 45.1315 53.8936 44.0615 53.7498C43.022 53.61 42.4715 53.3544 42.0794 52.9623C41.9424 52.8253 41.8221 52.669 41.7175 52.4792H55.7495C56.3846 52.4792 56.9433 52.4793 57.4072 52.4292C57.9093 52.375 58.3957 52.2546 58.8534 51.9528C59.3111 51.651 59.6135 51.2513 59.8611 50.8111C60.0898 50.4045 60.3099 49.891 60.56 49.3072L61.2214 47.7641C61.766 46.4933 62.2217 45.4302 62.4498 44.5655C62.6878 43.6634 62.7497 42.7216 62.1884 41.8704C61.627 41.0191 60.737 40.705 59.8141 40.5684C58.9295 40.4374 57.7729 40.4375 56.3903 40.4375L41.0845 40.4375C41.0806 40.3979 41.0765 40.3588 41.0721 40.3201C40.9937 39.6333 40.8228 39.0031 40.4104 38.4309C39.998 37.8588 39.4542 37.4974 38.8274 37.2058C38.2377 36.9315 37.4879 36.6816 36.6005 36.3858L36.1693 36.2421ZM41.1458 42.5625C41.1458 42.6054 41.1458 42.6485 41.1458 42.692L41.1458 46.4584C41.1458 48.1187 41.1473 49.3688 41.2262 50.3542H55.6975C56.4 50.3542 56.8429 50.3528 57.1791 50.3165C57.4896 50.2829 57.6091 50.2279 57.6836 50.1787C57.7582 50.1296 57.8559 50.0415 58.009 49.7692C58.1748 49.4745 58.3506 49.068 58.6273 48.4223L59.2344 47.0057C59.8217 45.6355 60.2119 44.7177 60.3951 44.0235C60.5731 43.3488 60.4829 43.1441 60.4143 43.0401C60.3458 42.9362 60.1931 42.7727 59.5029 42.6705C58.7927 42.5653 57.7954 42.5625 56.3047 42.5625H41.1458Z"
                fill="#8D93A5"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M40.4375 60.625C40.4375 62.3855 41.8646 63.8125 43.625 63.8125C45.3854 63.8125 46.8125 62.3855 46.8125 60.625C46.8125 58.8646 45.3854 57.4375 43.625 57.4375C41.8646 57.4375 40.4375 58.8646 40.4375 60.625ZM43.625 61.6875C43.0382 61.6875 42.5625 61.2118 42.5625 60.625C42.5625 60.0382 43.0382 59.5625 43.625 59.5625C44.2118 59.5625 44.6875 60.0382 44.6875 60.625C44.6875 61.2118 44.2118 61.6875 43.625 61.6875Z"
                fill="#8D93A5"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M56.375 63.8126C54.6146 63.8126 53.1875 62.3856 53.1875 60.6251C53.1875 58.8647 54.6146 57.4376 56.375 57.4376C58.1354 57.4376 59.5625 58.8647 59.5625 60.6251C59.5625 62.3856 58.1354 63.8126 56.375 63.8126ZM55.3125 60.6251C55.3125 61.212 55.7882 61.6876 56.375 61.6876C56.9618 61.6876 57.4375 61.212 57.4375 60.6251C57.4375 60.0383 56.9618 59.5626 56.375 59.5626C55.7882 59.5626 55.3125 60.0383 55.3125 60.6251Z"
                fill="#8D93A5"
              />
            </svg>
          </div>

          <p className="pb-6 text-dark-2 text-base sm:text-lg">Your cart is empty!</p>

          <Link
            href="/shop"
            className="inline-flex justify-center font-medium text-white bg-dark py-3 px-6 rounded-md ease-out duration-200 hover:bg-opacity-95 w-full sm:w-96"
          >
            Continue Shopping
          </Link>
        </section>
      )}
    </>
  );
};

export default Cart;