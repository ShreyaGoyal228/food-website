"use client";
import { foodProducts } from "@/data";
import useStore from "@/store/cartStore";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = foodProducts.find((i) => i.item_id === Number(id));
  const { addToCart, cart, removeFromCart } = useStore();
  const itemInCart = cart.find((item) => item.item_id === Number(id));
  if (!product) {
    return;
  }

  return (
    <>
      <div className="max-w-full container mx-auto mt-5 ">
        <Link href="/" className=" mb-5 flex flex-row gap-2 items-center">
          <MdOutlineKeyboardArrowLeft className="size-5" />
          <span className="text-sm text-gray-600 font-medium">Back to Home Page</span>
        </Link>
        <div className="flex flex-row gap-3 md:gap-5 lg:gap-10 items-start md:items-center bg-green-100 p-4 rounded-md">
          <div className="relative w-[150px] lg:w-[300px] aspect-square">
            <Image
              src={product.item_image}
              alt="product-image"
              className="object-cover"
              fill
            />
          </div>
          <div className="flex flex-col gap-2 items-start ">
            <div className="rounded-md bg-green-500 p-2 text-white">
              Restaurant Name: <span>{product.restaurant}</span>
            </div>
            <div className="font-semibold text-lg">{product.item_name}</div>
            <div className="text-base font-normal">{product.description}</div>
            <div className="flex flex-row gap-2 items-center">
              <div className="font-medium text-base text-gray">
                ₹{product.discounted_price}
              </div>
              <div className="text-sm line-through font-medium text-gray-500">
                {" "}
                ₹{product.original_price}
              </div>
            </div>

            {itemInCart ? (
              <button className="flex flex-row items-center gap-1.5 cursor-pointer px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
                <Minus
                  className="size-4"
                  onClick={(e) => {
                    removeFromCart(itemInCart);
                    e.stopPropagation();
                  }}
                />
                <div className="text-white text-sm">{itemInCart.quantity}</div>
                <Plus
                  className="size-4"
                  onClick={(e) => {
                    addToCart(itemInCart);
                    e.stopPropagation();
                  }}
                />
              </button>
            ) : (
              <button
                onClick={(e) => {
                  addToCart({ ...product, quantity: 1 });
                  e.stopPropagation();
                }}
                className="cursor-pointer px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
