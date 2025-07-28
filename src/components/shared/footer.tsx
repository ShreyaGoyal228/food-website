import Link from "next/link";
import Image from "next/image";
import { FiFacebook } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { TbBrandTwitter } from "react-icons/tb";

export default function Footer() {
  return (
    <>
      <div className="container max-w-full mx-auto bg-[#202020]">
        <div className="text-sm gap-10 py-[81px] lg:py-[113px]  text-white text-center flex flex-col lg:flex-row items-center lg:justify-between lg:items-start">
          <Link
            href="/"
            className="flex flex-row items-center gap-2 md:gap-2.5 "
          >
            <div className="relative aspect-square w-[150px] h-[44px]">
              <Image
                src={"/logo-footer.svg"}
                alt="food-website-logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <div className="flex flex-col lg:gap-[25px] xl:gap-[30px] items-center">
            <ul className="text-white text-sm lg:text-base font-medium flex flex-col lg:flex-row gap-[25px] lg:gap-[30px] xl:gap-[50px] 2xl:gap-[60px]">
              <li>About us</li>
              <li>Delivery</li>
              <li>Help & Support</li>
              <li>T&C</li>
            </ul>
            <div className="hidden lg:flex items-center lg:gap-5">
              <FiFacebook className="size-5 lg:size-6 hover:scale-[1.06] transition-all duration-300" />
              <IoLogoInstagram className="size-5 lg:size-6 hover:scale-[1.06] transition-all duration-300" />
              <TbBrandTwitter className="size-5 lg:size-6 hover:scale-[1.06] transition-all duration-300" />
            </div>

            {/* icons */}
          </div>

<div className="flex flex-col items-center gap-[27px]">
          <div className="text-sm lg:text-base font-normal flex items-center gap-2.5">
            Contact : <span className="font-bold">+91 1234567899</span>
          </div>

          <div className="flex flex-row gap-[30px] lg:hidden items-center">
            <FiFacebook className="size-5 lg:size-6 hover:scale-[1.06] transition-all duration-300" />
            <IoLogoInstagram className="size-5 lg:size-6 hover:scale-[1.06] transition-all duration-300" />
            <TbBrandTwitter className="size-5 lg:size-6 hover:scale-[1.06] transition-all duration-300" />
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
