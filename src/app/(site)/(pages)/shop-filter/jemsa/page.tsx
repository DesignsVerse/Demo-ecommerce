import React from "react";
// import ShopDetails from "@/components/ShopDetails";
import { Metadata } from "next";
import Gemstones from "@/components/product-filter/Gemstones";

export const metadata: Metadata = {
  title: "blog",
  description: "This is Shop Details Page for NextCommerce Template",
  // other metadata
};

const filter = () => {
  return (
    <main>
        <Gemstones/>
      {/* <ShopDetails /> */}
    </main>
  );
};

export default filter;
