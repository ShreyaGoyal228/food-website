"use client";
import AllProducts from "@/components/all-products";
import { useSearchParams } from "next/navigation";
export default function RecommendedFoodItems() {
  const searchParams = useSearchParams();
  const categorySelected = searchParams.get("category");
  return (
    <>
      <div className="mb-[66px] flex flex-col gap-6 ">
        <div className="text-black font-semibold text-2xl">
          {categorySelected == null
            ? "Recommended Food Items"
            : categorySelected}
        </div>
        <AllProducts />
      </div>
    </>
  );
}
