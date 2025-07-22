import { foodProducts } from "../data/index";
import ProductCard from "./shared/product-card";
export default function AllProducts() {
  return (
    <>
      <div className="container max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {foodProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </>
  );
}
