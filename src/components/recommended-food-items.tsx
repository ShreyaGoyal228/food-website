"use client";
import AllProducts from "@/components/all-products";
import { useSearchParams } from "next/navigation";
import Filters from "./shared/filters/filter";
export default function RecommendedFoodItems() {
  const searchParams = useSearchParams();
  const categorySelected = searchParams.get("category");
  return (
    <>
      <div className="container max-w-full mx-auto py-10 md:py-[50px]">
        <div className="flex flex-col gap-6 ">
          <div className="text-black font-semibold text-lg md:text-xl xl:text-2xl">
            {categorySelected == null ? "Food Items" : categorySelected}
          </div>
          <Filters />
          <AllProducts />
        </div>
      </div>
    </>
  );
}
