"use client";
import AllProducts from "@/components/all-products";
import { useSearchParams } from "next/navigation";
import Filters from "./shared/filters/filter";
import Image from "next/image";
export default function RecommendedFoodItems() {
  const searchParams = useSearchParams();
  const categorySelected = searchParams.get("category");
  return (
    <>
      <div className="bg-[#F2F2F2] py-10 lg:py-[88px] overflow-x-hidden">
        <div className="z-0 bg-[rgba(255,50,5,0.76)] relative mb-10">
          <div className="py-10 lg:py-[88px] container max-w-full mx-auto relative">
            <div className="flex flex-col gap-2.5 lg:gap-[14px] text-white lg:w-[58%] xl:w-[60%]">
              <div className="font-bold lg:font-extrabold text-xl xl:text-2xl">
                From Our Chef’s Hands to Your Table.
              </div>
              <div className="text-base xl:text-xl">
                Our head chef brings fine dining standards to your daily meals.
                Handpicked ingredients, perfected recipes, and cooked fresh —
                every time
              </div>
            </div>
          </div>
          <div className="z-10 hidden lg:block absolute -top-9 xl:-top-[101.5px] -right-12 w-[524px] h-[312px] xl:w-[624px] xl:h-[412px] ">
            <Image
              src={"/chef-image.svg"}
              alt="chef-image"
              className="object-contain"
              fill
            />
          </div>
        </div>
        <div className="container max-w-full mx-auto ">
          <div className="flex flex-col gap-6 ">
            <div className="text-black font-semibold text-lg md:text-xl xl:text-2xl">
              {categorySelected == null ? "Food Items" : categorySelected}
            </div>
            <Filters />
            <AllProducts />
          </div>
        </div>
      </div>
    </>
  );
}
