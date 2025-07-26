"use client";
import ProductCard from "@/components/shared/product-card";
import { foodProducts } from "@/data";
import { useSearchParams } from "next/navigation";
export default function ReorderedItems() {
  const searchParams = useSearchParams();
  const categorySelected = searchParams.get("category");
  return (
    <>
      {categorySelected == null && (
        <div className="mb-[66px] flex flex-col gap-6 ">
          <div className="text-black font-semibold text-2xl">
            Our Reordered Items
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
            {foodProducts.slice(0, 4).map((item, index) => (
              <ProductCard key={index} product={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
