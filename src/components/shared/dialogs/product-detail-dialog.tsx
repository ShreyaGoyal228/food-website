import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
} from "@/components/ui/dialog";
import useStore from "@/store/cartStore";
import Image from "next/image";
import useProductDialogSore from "@/store/product-dialog-store";
import { Rating } from "@smastrom/react-rating";
import { Minus, Plus } from "lucide-react";
import { toast } from "sonner";

export default function ProductDetail() {
  const { isOpen, closeDialog, productDetail } = useProductDialogSore();
  const { cart, addToCart, removeFromCart } = useStore();
  const itemInCart = cart.find(
    (item) => item.item_id === productDetail.item_id
  );

  return (
    <>
      <Dialog open={isOpen} onOpenChange={() => closeDialog()}>
        <DialogContent className="bg-white max-h-screen overflow-y-auto">
          <div className="p-2.5 md:p-[12px] xl:p-[15px] ">
            <div className="relative h-[250px] lg:h-[331px] w-full">
              <Image
                src={productDetail.item_image}
                alt="product-image"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 px-5 pb-5 md:px-[25px] md:pb-[25px] lg:px-[35px] lg:pb-[35px]">
            {/* item name */}
            <h3 className="text-base lg:text-xl font-semibold text-black">
              {productDetail.item_name}
            </h3>
            {/* original and discounted price */}
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 lg:gap-2">
                  <span className="text-gray-500 text-base lg:text-xl font-medium line-through">
                    ₹{productDetail.original_price}
                  </span>
                  <span className="text-base md:text-xl lg:text-2xl font-semibold text-[#FF4A22]">
                    ₹{productDetail.discounted_price}
                  </span>
                </div>

                <div className="flex gap-2 items-center">
                  <div className="text-[rgba(51,51,51,0.80)] text-sm font-medium">
                    {productDetail.rating}
                  </div>
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={productDetail.rating}
                    readOnly
                  />
                </div>
              </div>
              {itemInCart ? (
                <button className="text-sm flex flex-row items-center gap-1.5  cursor-pointer px-5 py-2.5 bg-[#FF4A22] text-white rounded-[25px]  transition-colors">
                  <Minus
                    className="size-4"
                    onClick={(e) => {
                      removeFromCart(itemInCart);
                      e.stopPropagation();
                      toast.success("Item removed from cart.");
                    }}
                  />
                  <div className="text-white text-sm">
                    {itemInCart.quantity}
                  </div>
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
                    addToCart({ ...productDetail, quantity: 1 });
                    e.stopPropagation();
                    toast.success("Item added to cart.");
                  }}
                  className="text-sm cursor-pointer px-5 py-2.5 bg-[#FF4A22] text-white rounded-[25px]   transition-colors"
                >
                  Add to Cart
                </button>
              )}
            </div>
            {/* description */}
            <div className="flex flex-col gap-[3px]">
              <div className="text-lg font-medium ">Description</div>
              <div className=" text-[rgba(128,128,128,1)] text-base font-medium">
                {productDetail.description}
              </div>
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <div className="absolute right-6 top-6 md:top-[30px] md:right-[32px] size-6 md:size-8 xl:size-9 cursor-pointer">
                <Image
                  src={"/icons/cross.svg"}
                  alt="cross-icon"
                  fill
                  className="object-cover"
                />
              </div>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
