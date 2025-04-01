// // src/app/(site)/(pages)/shop-details/[slug]/page.tsx
// "use client";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import shopData from "@/components/Shop/shopData";
// import { Product } from "@/types/product";
// import Breadcrumb from "@/components/Common/Breadcrumb";
// import Newsletter from "@/components/Common/Newsletter";
// import RecentlyViewdItems from "@/components/ShopDetails/RecentlyViewd";
// import { usePreviewSlider } from "@/app/context/PreviewSliderContext";
// import { useAppSelector } from "@/redux/store";

// interface PageProps {
//   params: {
//     slug: string;
//   };
// }

// const ShopDetails = ({ params }: PageProps) => {
//   const router = useRouter();
//   const { slug } = params;

//   const [activeColor, setActiveColor] = useState("blue");
//   const { openPreviewModal } = usePreviewSlider();
//   const [previewImg, setPreviewImg] = useState(0);
//   const [storage, setStorage] = useState("gb128");
//   const [type, setType] = useState("active");
//   const [sim, setSim] = useState("dual");
//   const [quantity, setQuantity] = useState(1);
//   const [activeTab, setActiveTab] = useState("tabOne");
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   const storages = [
//     { id: "gb128", title: "128 GB" },
//     { id: "gb256", title: "256 GB" },
//     { id: "gb512", title: "512 GB" },
//   ];

//   const types = [
//     { id: "active", title: "Active" },
//     { id: "inactive", title: "Inactive" },
//   ];

//   const sims = [
//     { id: "dual", title: "Dual" },
//     { id: "e-sim", title: "E Sim" },
//   ];

//   const tabs = [
//     { id: "tabOne", title: "Description" },
//     { id: "tabTwo", title: "Additional Information" },
//     { id: "tabThree", title: "Reviews" },
//   ];

//   const colors = ["red", "blue", "orange", "pink", "purple"];

//   // Fetch product from shopData based on slug
//   const productFromData = shopData.find((item) => item.slug === slug);

//   // Redux state
//   const productFromStorage = useAppSelector((state) => state.productDetailsReducer.value);

//   // Safely get product from localStorage if available
//   const getProduct = (): Product | null => {
//     if (productFromData) return productFromData;
//     if (isClient && typeof window !== 'undefined') {
//       const localProduct = localStorage.getItem("productDetails");
//       return localProduct ? JSON.parse(localProduct) : productFromStorage;
//     }
//     return productFromStorage;
//   };

//   const product = getProduct();

//   useEffect(() => {
//     if (isClient && product) {
//       localStorage.setItem("productDetails", JSON.stringify(product));
//     }
//   }, [product, isClient]);

//   // Fallback if no product is found
//   if (!product || !product.title) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-lg font-medium text-dark">Product not found!</p>
//       </div>
//     );
//   }

//   const handlePreviewSlider = () => {
//     openPreviewModal();
//   };

//   const handleAddToCart = () => {
//     alert(`${product.title} added to cart!`);
//     router.push("/cart");
//   };

//   return (
//     <>
//       <Breadcrumb title="Shop Details" pages={["shop details"]} />

//       <section className="overflow-hidden relative pb-20 pt-5 lg:pt-20 xl:pt-28">
//         <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
//           <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-17.5">
//             <div className="lg:max-w-[570px] w-full">
//               <div className="lg:min-h-[512px] rounded-lg shadow-1 bg-gray-2 p-4 sm:p-7.5 relative flex items-center justify-center">
//                 <button
//                   onClick={handlePreviewSlider}
//                   aria-label="button for zoom"
//                   className="gallery__Image w-11 h-11 rounded-[5px] bg-gray-1 shadow-1 flex items-center justify-center ease-out duration-200 text-dark hover:text-blue absolute top-4 lg:top-6 right-4 lg:right-6 z-50"
//                 >
//                   <svg
//                     className="fill-current"
//                     width="22"
//                     height="22"
//                     viewBox="0 0 22 22"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <rect x="2" y="2" width="18" height="18" fill="currentColor" />
//                   </svg>
//                 </button>
//                 {product.imgs?.previews && (
//                   <Image
//                     src={product.imgs.previews[previewImg]}
//                     alt={product.title}
//                     width={400}
//                     height={400}
//                   />
//                 )}
//               </div>
//               <div className="flex flex-wrap sm:flex-nowrap gap-4.5 mt-6">
//                 {product.imgs?.thumbnails?.map((item, key) => (
//                   <button
//                     onClick={() => setPreviewImg(key)}
//                     key={key}
//                     className={`flex items-center justify-center w-15 sm:w-25 h-15 sm:h-25 overflow-hidden rounded-lg bg-gray-2 shadow-1 ease-out duration-200 border-2 hover:border-blue ${
//                       key === previewImg ? "border-blue" : "border-transparent"
//                     }`}
//                   >
//                     <Image width={50} height={50} src={item} alt="thumbnail" />
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="max-w-[539px] w-full">
//               <div className="flex items-center justify-between mb-3">
//                 <h2 className="font-semibold text-xl sm:text-2xl xl:text-custom-3 text-dark">
//                   {product.title}
//                 </h2>
//                 <div className="inline-flex font-medium text-custom-sm text-white bg-blue rounded py-0.5 px-2.5">
//                   30% OFF
//                 </div>
//               </div>

//               <div className="flex flex-wrap items-center gap-5.5 mb-4.5">
//                 <div className="flex items-center gap-2.5">
//                   <div className="flex items-center gap-1">
//                     {Array(5)
//                       .fill(0)
//                       .map((_, i) => (
//                         <svg
//                           key={i}
//                           className="fill-[#FFA645]"
//                           width="18"
//                           height="18"
//                           viewBox="0 0 18 18"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <rect x="2" y="2" width="14" height="14" fill="currentColor" />
//                         </svg>
//                       ))}
//                   </div>
//                   <span> ({product.reviews || 5} customer reviews) </span>
//                 </div>
//                 <div className="flex items-center gap-1.5">
//                   <svg
//                     width="20"
//                     height="20"
//                     viewBox="0 0 20 20"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <circle cx="10" cy="10" r="8" fill="#22AD5C" />
//                   </svg>
//                   <span className="text-green"> In Stock </span>
//                 </div>
//               </div>

//               <h3 className="font-medium text-custom-1 mb-4.5">
//                 <span className="text-sm sm:text-base text-dark">
//                   Price: ${product.discountedPrice}
//                 </span>
//                 <span className="line-through"> ${product.price} </span>
//               </h3>

//               <ul className="flex flex-col gap-2">
//                 <li className="flex items-center gap-2.5">
//                   <svg
//                     width="20"
//                     height="20"
//                     viewBox="0 0 20 20"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <rect x="4" y="4" width="12" height="12" fill="#800000" />
//                   </svg>
//                   Free delivery available
//                 </li>
//                 <li className="flex items-center gap-2.5">
//                   <svg
//                     width="20"
//                     height="20"
//                     viewBox="0 0 20 20"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <rect x="4" y="4" width="12" height="12" fill="#800000" />
//                   </svg>
//                   Sales 30% Off Use Code: PROMO30
//                 </li>
//               </ul>

//               <form onSubmit={(e) => e.preventDefault()}>
//                 <div className="flex flex-col gap-4.5 border-y border-gray-3 mt-7.5 mb-9 py-9">
//                   <div className="flex items-center gap-4">
//                     <div className="min-w-[65px]">
//                       <h4 className="font-medium text-dark">Color:</h4>
//                     </div>
//                     <div className="flex items-center gap-2.5">
//                       {colors.map((color, key) => (
//                         <label
//                           key={key}
//                           htmlFor={color}
//                           className="cursor-pointer select-none flex items-center"
//                         >
//                           <div className="relative">
//                             <input
//                               type="radio"
//                               name="color"
//                               id={color}
//                               className="sr-only"
//                               onChange={() => setActiveColor(color)}
//                             />
//                             <div
//                               className={`flex items-center justify-center w-5.5 h-5.5 rounded-full ${
//                                 activeColor === color && "border"
//                               }`}
//                               style={{ borderColor: `${color}` }}
//                             >
//                               <span
//                                 className="block w-3 h-3 rounded-full"
//                                 style={{ backgroundColor: `${color}` }}
//                               ></span>
//                             </div>
//                           </div>
//                         </label>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-4">
//                     <div className="min-w-[65px]">
//                       <h4 className="font-medium text-dark">Storage:</h4>
//                     </div>
//                     <div className="flex items-center gap-4">
//                       {storages.map((item, key) => (
//                         <label
//                           key={key}
//                           htmlFor={item.id}
//                           className="flex cursor-pointer select-none items-center"
//                         >
//                           <div className="relative">
//                             <input
//                               type="checkbox"
//                               name="storage"
//                               id={item.id}
//                               className="sr-only"
//                               onChange={() => setStorage(item.id)}
//                             />
//                             <div
//                               className={`mr-2 flex h-4 w-4 items-center justify-center rounded border ${
//                                 storage === item.id
//                                   ? "border-blue bg-blue"
//                                   : "border-gray-4"
//                               }`}
//                             >
//                               <span
//                                 className={
//                                   storage === item.id ? "opacity-100" : "opacity-0"
//                                 }
//                               >
//                                 <svg
//                                   width="24"
//                                   height="24"
//                                   viewBox="0 0 24 24"
//                                   fill="none"
//                                   xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                   <rect x="4" y="4" width="16" height="16" fill="#800000" />
//                                 </svg>
//                               </span>
//                             </div>
//                           </div>
//                           {item.title}
//                         </label>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-4">
//                     <div className="min-w-[65px]">
//                       <h4 className="font-medium text-dark">Type:</h4>
//                     </div>
//                     <div className="flex items-center gap-4">
//                       {types.map((item, key) => (
//                         <label
//                           key={key}
//                           htmlFor={item.id}
//                           className="flex cursor-pointer select-none items-center"
//                         >
//                           <div className="relative">
//                             <input
//                               type="checkbox"
//                               name="type"
//                               id={item.id}
//                               className="sr-only"
//                               onChange={() => setType(item.id)}
//                             />
//                             <div
//                               className={`mr-2 flex h-4 w-4 items-center justify-center rounded border ${
//                                 type === item.id
//                                   ? "border-blue bg-blue"
//                                   : "border-gray-4"
//                               }`}
//                             >
//                               <span
//                                 className={
//                                   type === item.id ? "opacity-100" : "opacity-0"
//                                 }
//                               >
//                                 <svg
//                                   width="24"
//                                   height="24"
//                                   viewBox="0 0 24 24"
//                                   fill="none"
//                                   xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                   <rect x="4" y="4" width="16" height="16" fill="#800000" />
//                                 </svg>
//                               </span>
//                             </div>
//                           </div>
//                           {item.title}
//                         </label>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-4">
//                     <div className="min-w-[65px]">
//                       <h4 className="font-medium text-dark">Sim:</h4>
//                     </div>
//                     <div className="flex items-center gap-4">
//                       {sims.map((item, key) => (
//                         <label
//                           key={key}
//                           htmlFor={item.id}
//                           className="flex cursor-pointer select-none items-center"
//                         >
//                           <div className="relative">
//                             <input
//                               type="checkbox"
//                               name="sim"
//                               id={item.id}
//                               className="sr-only"
//                               onChange={() => setSim(item.id)}
//                             />
//                             <div
//                               className={`mr-2 flex h-4 w-4 items-center justify-center rounded border ${
//                                 sim === item.id
//                                   ? "border-blue bg-blue"
//                                   : "border-gray-4"
//                               }`}
//                             >
//                               <span
//                                 className={
//                                   sim === item.id ? "opacity-100" : "opacity-0"
//                                 }
//                               >
//                                 <svg
//                                   width="24"
//                                   height="24"
//                                   viewBox="0 0 24 24"
//                                   fill="none"
//                                   xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                   <rect x="4" y="4" width="16" height="16" fill="#800000" />
//                                 </svg>
//                               </span>
//                             </div>
//                           </div>
//                           {item.title}
//                         </label>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex flex-wrap items-center gap-4.5">
//                   <div className="flex items-center rounded-md border border-gray-3">
//                     <button
//                       aria-label="button for remove product"
//                       className="flex items-center justify-center w-12 h-12 ease-out duration-200 hover:text-blue"
//                       onClick={() => quantity > 1 && setQuantity(quantity - 1)}
//                     >
//                       <svg
//                         className="fill-current"
//                         width="20"
//                         height="20"
//                         viewBox="0 0 20 20"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <rect x="4" y="9" width="12" height="2" fill="currentColor" />
//                       </svg>
//                     </button>
//                     <span className="flex items-center justify-center w-16 h-12 border-x border-gray-4">
//                       {quantity}
//                     </span>
//                     <button
//                       onClick={() => setQuantity(quantity + 1)}
//                       aria-label="button for add product"
//                       className="flex items-center justify-center w-12 h-12 ease-out duration-200 hover:text-blue"
//                     >
//                       <svg
//                         className="fill-current"
//                         width="20"
//                         height="20"
//                         viewBox="0 0 20 20"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <rect x="9" y="4" width="2" height="12" fill="currentColor" />
//                         <rect x="4" y="9" width="12" height="2" fill="currentColor" />
//                       </svg>
//                     </button>
//                   </div>

//                   <button
//                     onClick={handleAddToCart}
//                     className="inline-flex font-medium text-white bg-blue py-3 px-7 rounded-md ease-out duration-200 hover:bg-blue-dark"
//                   >
//                     Add to Cart
//                   </button>

//                   <a
//                     href="#"
//                     className="flex items-center justify-center w-12 h-12 rounded-md border border-gray-3 ease-out duration-200 hover:text-white hover:bg-dark hover:border-transparent"
//                   >
//                     <svg
//                       className="fill-current"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <rect x="4" y="4" width="16" height="16" fill="currentColor" />
//                     </svg>
//                   </a>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="overflow-hidden bg-gray-2 py-20">
//         <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
//           <div className="flex flex-wrap items-center bg-white rounded-[10px] shadow-1 gap-5 xl:gap-12.5 py-4.5 px-4 sm:px-6">
//             {tabs.map((item, key) => (
//               <button
//                 key={key}
//                 onClick={() => setActiveTab(item.id)}
//                 className={`font-medium lg:text-lg ease-out duration-200 hover:text-blue relative before:h-0.5 before:bg-blue before:absolute before:left-0 before:bottom-0 before:ease-out before:duration-200 hover:before:w-full ${
//                   activeTab === item.id
//                     ? "text-blue before:w-full"
//                     : "text-dark before:w-0"
//                 }`}
//               >
//                 {item.title}
//               </button>
//             ))}
//           </div>

//           <div>
//             <div
//               className={`flex-col sm:flex-row gap-7.5 xl:gap-12.5 mt-12.5 ${
//                 activeTab === "tabOne" ? "flex" : "hidden"
//               }`}
//             >
//               <div className="max-w-[670px] w-full">
//                 <h2 className="font-medium text-2xl text-dark mb-7">Specifications:</h2>
//                 <p className="mb-6">
//                   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                 </p>
//                 <p className="mb-6">
//                   It has survived not only five centuries, but also the leap into electronic typesetting.
//                 </p>
//                 <p>
//                   With the release of Letraset sheets containing Lorem Ipsum passages.
//                 </p>
//               </div>
//               <div className="max-w-[447px] w-full">
//                 <h2 className="font-medium text-2xl text-dark mb-7">Care & Maintenance:</h2>
//                 <p className="mb-6">
//                   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                 </p>
//                 <p>
//                   It has survived not only five centuries, but also the leap into electronic typesetting.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <RecentlyViewdItems />
//       <Newsletter />
//     </>
//   );
// };

// export default ShopDetails;