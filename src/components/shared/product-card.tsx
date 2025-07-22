"use client";
import useStore from "@/store/cartStore";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type IProduct = {
  item_id: number;
  item_image: string;
  item_name: string;
  discounted_price: number;
};
export default function ProductCard({ product }: { product: IProduct }) {
  const { addToCart, cart, removeFromCart } = useStore();
  const router = useRouter();
  const itemInCart = cart.find((item) => item.item_id === product.item_id);
  return (
    <>
      <div
        onClick={() => router.push(`/product-detail/${product.item_id}`)}
        className="border border-gray-400 rounded-lg py-3 flex flex-col gap-2 cursor-pointer"
      >
        {/* product image */}
        <div className="relative w-[60%] aspect-square mx-auto">
          <Image
            src={product.item_image}
            alt="product-image"
            fill
            className="object-cover rounded-md"
          />
        </div>
        {/* content */}
        <div className="px-2">
          <h3 className="text-sm font-semibold text-gray-700">
            {product.item_name}
          </h3>

          <div className="flex items-center justify-between mt-2">
            <span className="text-lg font-bold text-green-600">
              ₹{product.discounted_price}
            </span>

            {itemInCart ? (
              <button className="flex flex-row items-center gap-1.5 cursor-pointer px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
                <Minus
                  className="size-4"
                  onClick={(e) => {
                    removeFromCart(itemInCart);
                    e.stopPropagation();
                     toast.success("Item removed from cart.")
                  }}
                />
                <div className="text-white text-sm">{itemInCart.quantity}</div>
                <Plus
                  className="size-4"
                  onClick={(e) => {
                    addToCart(itemInCart);
                    e.stopPropagation();
                    toast.success("Item added to cart.")

                  }}
                />
              </button>
            ) : (
              <button
                onClick={(e) => {
                  addToCart({ ...product, quantity: 1 });
                  e.stopPropagation();
                  toast.success("Item added to cart.")
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
