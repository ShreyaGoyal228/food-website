"use client";
import useStore from "@/store/cartStore";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import useProductDialogSore from "@/store/product-dialog-store";
import ProductDetail from "./dialogs/product-detail-dialog";

export type IProduct = {
  item_id: number;
  item_image: string;
  item_name: string;
  discounted_price: number;
  original_price: number;
  rating: number;
  description: string;
};
export default function ProductCard({ product }: { product: IProduct }) {
  const { addToCart, cart, removeFromCart } = useStore();
  const { openDialog } = useProductDialogSore();
  const itemInCart = cart.find((item) => item.item_id === product.item_id);
  return (
    <>
      <div
        onClick={() => openDialog(product)}
        className="bg-white rounded-[10px] shadow-[0_1.95px_29.383px_0_rgba(224,224,236,0.40)] cursor-pointer"
      >
        {/* product image */}
        <div className="relative h-[180px] md:h-[237px] mx-auto w-full">
          <Image
            src={product.item_image}
            alt="product-image"
            fill
            className="object-cover rounded-tl-[10px] rounded-tr-[10px]"
          />
        </div>
        {/* content */}
        <div className="px-2.5 md:px-[25px] py-4 md:py-5 flex flex-col gap-2">
          {/* item name */}
          <h3 className="text-base font-semibold text-black">
            {product.item_name}
          </h3>
          {/* original and discounted price */}
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <span className="text-gray-500 text-sm md:text-base font-medium line-through">
                  ₹{product.original_price}
                </span>
                <span className="text-base md:text-xl font-semibold text-[#FF4A22]">
                  ₹{product.discounted_price}
                </span>
              </div>

              <div className="flex gap-2 items-center">
                <div className="text-[rgba(51,51,51,0.80)] text-xs md:text-sm font-medium">
                  {product.rating}
                </div>
                <Rating
                  style={{ maxWidth: 90 }}
                  value={product.rating}
                  readOnly
                />
              </div>
            </div>
            {itemInCart ? (
              <button className="text-sm flex flex-row items-center gap-1.5  cursor-pointer px-5 py-2 md:py-2.5 bg-[#FF4A22] text-white rounded-[25px]  transition-colors">
                <Minus
                  className="size-4"
                  onClick={(e) => {
                    removeFromCart(itemInCart);
                    e.stopPropagation();
                    toast.success("Item removed from cart.");
                  }}
                />
                <div className="text-white text-sm">{itemInCart.quantity}</div>
                <Plus
                  className="size-4"
                  onClick={(e) => {
                    addToCart(itemInCart);
                    e.stopPropagation();
                    toast.success("Item added to cart.");
                  }}
                />
              </button>
            ) : (
              <button
                onClick={(e) => {
                  addToCart({ ...product, quantity: 1 });
                  e.stopPropagation();
                  toast.success("Item added to cart.");
                }}
                className="text-sm cursor-pointer px-5 py-2 md:py-2.5 bg-[#FF4A22] text-white rounded-[25px]   transition-colors"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>

      <ProductDetail />
    </>
  );
}
