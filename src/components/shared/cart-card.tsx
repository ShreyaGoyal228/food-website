import useStore, { ICartItem } from "@/store/cartStore";
import { Minus, Plus } from "lucide-react";
import { MdDeleteOutline } from "react-icons/md";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import useProductDialogSore from "@/store/product-dialog-store";
export default function CartCard({
  item,
  itemNumber,
}: {
  item: ICartItem;
  itemNumber: number;
}) {
  const router = useRouter();
  const { cart, removeFromCart, addToCart, deleteFromCart } = useStore();
  const { openDialog } = useProductDialogSore();
  return (
    <>
      <div>
        <div className="flex flex-row justify-between items-center mb-[38px]">
          <div className="flex flex-row gap-5">
            <div className="relative w-[82px] aspect-square">
              <Image
                src={item.item_image}
                alt="product-image"
                fill
                className="object-cover rounded-[9px]"
              />
            </div>
            <div className="flex flex-col gap-1 items-start">
              <div className="text-[#202020] text-lg font-medium">
                {item.item_name}
              </div>
              <div className="text-[#808080] text-lg font-normal ">
                ₹{item.discounted_price}
              </div>
            </div>
          </div>
          <button className="text-sm flex flex-row items-center gap-5  cursor-pointer py-2.5  ">
            <Minus
              className="size-[16px]"
              onClick={(e) => {
                removeFromCart(item);
                e.stopPropagation();
                toast.success("Item removed from cart.");
              }}
            />
            <div className="text-black text-base">{item.quantity}</div>
            <Plus
              className="size-[16px]"
              onClick={(e) => {
                addToCart(item);
                e.stopPropagation();
                toast.success("Item added to cart.");
              }}
            />
          </button>
        </div>

        {cart.length != itemNumber && (
          <div className="w-full h-[1px] bg-[#E3E3E3]"></div>
        )}
      </div>
    </>
  );
}
