"use client";
import { BsHandbag } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import useStore from "@/store/cartStore";
export default function Navbar() {
  const { cart } = useStore();
  const cartItems = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  return (
    <>
      <div className="sticky top-0 z-10 bg-white shadow-[0px_2px_31.8px_0px_rgba(0,0,0,0.06)]">
        <div className="container max-w-full mx-auto py-5 lg:py-[33px] shadow-md">
          <div className="flex justify-between items-center">
            {/* logo */}
            <Link
              href="/"
              className="flex flex-row items-center gap-2 md:gap-2.5 font-medium text-2xl text-green-500"
            >
              <div className="relative w-[115px] h-[34px] md:w-[150px] md:h-[44.45px]">
                <Image
                  src={"/logo-header.svg"}
                  alt="food-website-logo"
                  fill
                  className="object-contain"
                  priority
                  loading="eager"
                />
              </div>
            </Link>

            {/* cart and profile icon */}
            <div className="relative flex items-center gap-6 ">
              {/* <CiUser className="size-6" strokeWidth={1.1} /> */}
              <Link href="/cart">
                <BsHandbag className="size-[18px] lg:size-[20px]" />
              </Link>
              <div className="flex items-center justify-center absolute -top-2 -right-[13px] md:-right-[17px] size-[17px] md:size-[19px] bg-[#FF4A22] rounded-full text-white text-[10px] font-semibold">
                {cartItems}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
