"use client";
import CartCard from "@/components/shared/cart-card";
import { IoIosArrowBack } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { Textarea } from "@/components/ui/textarea";
import useStore from "@/store/cartStore";
import Image from "next/image";
import { TbShoppingCartOff } from "react-icons/tb";

import { FaUserLarge } from "react-icons/fa6";
import Link from "next/link";

export default function Cart() {
  const { cart, totalPrice } = useStore();
  const cartItemsSize = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  return (
    <>
      <div className="relative h-[180px] xl:h-[200px] w-full mb-10">
        <Image
          src={"/banner/cart.svg"}
          alt="cart-banner"
          fill
          className="object-cover"
        />

        <div className="absolute container mx-auto max-w-full top-[50%] transform -translate-y-1/2 left-0 flex flex-row items-center gap-[13px]">
          <Link href="/">
            <IoIosArrowBack className="size-6 md:size-7 xl:size-8 text-white" />
          </Link>
          <span className="text-white text-base md:text-xl xl:text-2xl font-medium">
            Checkout
          </span>
        </div>
      </div>

      {cart.length == 0 ? (
        <>
          <div className="flex flex-col items-center gap-5">
            <div className="relative p-6 rounded-full bg-[rgba(255,74,34,0.07)]">
              <div className="relative p-10 rounded-full bg-[rgba(255,211,201,0.53)]">
                <div className="absolute inset-0 border border-[rgba(255,74,34,0.7)] rounded-full animate-ping"></div>
                <div className="relative w-[70px] aspect-square">
                  <Image
                    src={"/icons/cart-off.svg"}
                    alt="cart-off-icon"
                    className="object-cover"
                    fill
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[30px] items-center">
              <div className="flex flex-col gap-2 items-center">
                <div className="text-center text-2xl text-black font-bold">
                  Your cart is empty
                </div>
                <div className="text-[#808080] text-sm font-normal">
                  Looks like you haven’t added anything to your cart yet.
                </div>
              </div>
              <Link
                href="/"
                className="text-white bg-[#16A34A] hover:bg-[#17B35A] hover:scale-[1.05] transition-transform duration-800 ease-in-out py-2 px-[25px] text-lg font-medium rounded-lg"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-20 xl:flex-row xl:justify-between mx-auto max-w-full container mb-8 md:mb-10 xl:mb-[66px] ">
          <div className="basis-[50%]">
            <ol className="relative border-s border-dotted border-black">
              <li className="mb-10 ms-11">
                <span className="absolute flex items-center justify-center p-[16px] bg-[#202020] rounded-full -start-[26px] ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <FaUserLarge className="text-white size-[20px]" />
                </span>
                <div className="flex flex-col gap-9 pb-[32px] mb-[18px] ">
                  <div className="flex flex-col gap-[1px] items-start ">
                    <div className="text-black font-bold text-2xl">Account</div>
                    <div className="text-base font-medium">
                      To place your order now, log in to your existing account
                      or sign up.
                    </div>
                  </div>
                  {/* login and signup buttons */}
                  <div className="flex flex-row gap-[23px]">
                    <button className="border border-[#16A34A] py-2.5 px-[31px] text-[#16A34A] text-sm font-medium">
                      LOG IN
                    </button>
                    <button className="bg-[#16A34A] py-2.5 px-[31px] text-white text-sm font-medium">
                      SIGN UP
                    </button>
                  </div>
                </div>
                <div className="bg-[#E3E3E3] h-[1px] w-full"></div>
              </li>
              <li className="mb-10 ms-11 ">
                <span className="shadow-xl absolute flex items-center justify-center p-[14px] bg-white rounded-full -start-[26px] ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <IoLocationSharp className="text-[#AFAFAF] size-[22px]" />
                </span>
                <div className="text-[#959595] font-semibold text-2xl py-2.5 pb-[42px]  mb-[18px]">
                  Delivery Address
                </div>
                <div className="bg-[#E3E3E3] h-[1px] w-full"></div>
              </li>
              <li className="ms-11">
                <span className="shadow-xl absolute flex items-center justify-center p-[14px] bg-white rounded-full -start-[26px] ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <MdOutlinePayment className="text-[#AFAFAF] size-[22px]" />
                </span>

                <div className="text-[#959595] font-semibold text-2xl pt-2.5">
                  Payment
                </div>
              </li>
            </ol>
          </div>

          <div className="flex flex-col gap-10 basis-[40%] xl:pl-10 xl:border-s-[0.953px] xl:border-[#B5B5B5]">
            {/* cart-header */}
            <div className="flex items-center justify-between">
              <div className="text-[#202020] text-2xl font-medium">Cart</div>
              <div className="text-[#202020] text-lg font-normal">
                {cartItemsSize} items
              </div>
            </div>
            {/* cart-cards */}
            <div className=" bg-white rounded-md flex flex-col gap-[38px]">
              {cart.map((item, index) => (
                <CartCard key={index} item={item} itemNumber={index + 1} />
              ))}
            </div>
            {/* suggestions */}
            <div className="relative">
              <div className="z-10 absolute left-5 top-5 size-6 aspect-square">
                <Image
                  src={"/icons/raphael_quote.svg"}
                  alt="quote"
                  fill
                  className="object-cover"
                />
              </div>
              <Textarea
                rows={2}
                className="relative text-black text-lg bg-[#F4F4F4] py-5 pl-[60px] pr-5 placeholder:text-[#808080] placeholder:text-base placeholder:font-normal"
                placeholder="Any suggestions? We will pass it on..."
              />
            </div>

            {/* subtotal */}
            <div className="flex flex-row justify-between">
              <div className="flex flex-col gap-1.5">
                <div className="text-black text-2xl font-medium">SubTotal</div>
                <div className="text-[#808080] text-sm font-normal">
                  Extra charges may apply
                </div>
              </div>
              <div className="text-black text-2xl font-medium">
                ₹{totalPrice()}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
