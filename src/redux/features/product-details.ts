import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/types/product";

type InitialState = {
  value: Product;
};

const initialState = {
  value: {
    title: "",
    reviews: 0,
    slug:"",
    description:"",
    images: [],
    id: 0,
    imgs: { thumbnails: [], previews: [] },
    beejMantra:"",
    keyFeatures:[],
    benefits:[],
    detail:"",

  },
} as InitialState;

export const productDetails = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    updateproductDetails: (_, action) => {
      return {
        value: {
          ...action.payload,
        },
      };
    },
  },
});

export const { updateproductDetails } = productDetails.actions;
export default productDetails.reducer;
