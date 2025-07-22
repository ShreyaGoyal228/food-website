import useStore, { ICartItem } from "@/store/cartStore";
import { Minus, Plus } from "lucide-react";
import { MdDeleteOutline } from "react-icons/md";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
export default function CartCard({ item }: { item: ICartItem }) {
  const router = useRouter();
  const { removeFromCart, addToCart, deleteFromCart } = useStore();
  return (
    <>
      <div
        onClick={() => router.push(`/product-detail/${item.item_id}`)}
        className="cursor-pointer relative border border-gray-500 rounded-md p-4 flex flex-row gap-3 items-center"
      >
        <div className="relative aspect-square w-[100px]">
          <Image
            src={item.item_image}
            alt="cart-product-card"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col gap-1 items-start">
          <h3 className="text-sm font-semibold text-gray-700">
            {item.item_name}
          </h3>

          <span className="text-lg font-bold text-green-600">
            ₹{item.discounted_price * item.quantity}
          </span>
          <button className="flex flex-row items-center gap-1.5 cursor-pointer px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
            <Minus
              className="size-4"
              onClick={(e) => {
                removeFromCart(item);
                e.stopPropagation();
                toast.success("Item removed from cart.");
              }}
            />
            <div className="text-white text-sm">{item.quantity}</div>
            <Plus
              className="size-4"
              onClick={(e) => {
                addToCart(item);
                e.stopPropagation();
                toast.success("Item added to cart.");
              }}
            />
          </button>
        </div>
        <div
          className="absolute top-2 right-2 cursor-pointer"
          onClick={(e) => {
            deleteFromCart(item);
            e.stopPropagation();
            toast.error("Item deleted from cart.");
          }}
        >
          <MdDeleteOutline className="size-6 text-red-600" />
        </div>
      </div>
    </>
  );
}
