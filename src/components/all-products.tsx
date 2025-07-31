"use client";
import { useSearchParams } from "next/navigation";
import { foodProducts } from "../data/index";
import ProductCard from "./shared/product-card";
export default function AllProducts() {
  const searchParms = useSearchParams();
  const categories = searchParms.get("category") || "";
  const searchTerm = searchParms.get("search")?.toLowerCase() || "";

  const filteredProducts = foodProducts.filter(
    (item) =>
      item.category.includes(categories) &&
      (item.item_name.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm))
  );
  return (
    <>
    
      {filteredProducts.length == 0 ? (
        <div className="flex flex-col items-center justify-center w-full text-gray-500">
          <p className="text-lg font-medium">No products found</p>
          <p className="text-sm text-gray-400 mt-1">
            Try adjusting your search or filters.
          </p>
        </div>
      ) : (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}
    
    </>
  );
}
