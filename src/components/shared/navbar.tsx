import { BsHandbag } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <>
      <div className="sticky top-0 z-10 bg-white shadow-[0px_2px_31.8px_0px_rgba(0,0,0,0.06)]">
        <div className="container max-w-full mx-auto py-5 lg:py-[33px] flex justify-between items-center shadow-md">
          {/* logo */}
          <Link
            href="/"
            className="flex flex-row items-center gap-2 md:gap-2.5 font-medium text-2xl text-green-500"
          >
            <div className="relative w-[150px] h-[44.45px]">
              <Image
                src={"/logo.svg"}
                alt="food-website-logo"
                fill
                className="object-contain"
                priority
                loading="eager"
              />
            </div>
            
          </Link>

          {/* cart and profile icon */}
          <div className="flex items-center gap-6">
            {/* <CiUser className="size-6" strokeWidth={1.1} /> */}
            <Link href="/cart">
              <BsHandbag className="size-5 lg:size-[23px]" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
