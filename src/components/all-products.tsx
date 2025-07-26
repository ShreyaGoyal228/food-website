"use client";
import { useSearchParams } from "next/navigation";
import { foodProducts } from "../data/index";
import ProductCard from "./shared/product-card";
export default function AllProducts() {
  const searchParms = useSearchParams();
  const categories = searchParms.get("category") || "";

  const filteredProducts = foodProducts.filter((item) =>
    item.category.includes(categories)
  );
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </>
  );
}
