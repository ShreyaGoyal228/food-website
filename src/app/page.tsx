import CategoriesCarousel from "@/components/categories-carousel";
import RecommendedFoodItems from "@/components/recommended-food-items";
import ReorderedItems from "@/components/reordered-items";
import ClearFilter from "@/components/shared/clear-filter";

export default function Home() {
  return (
    <>
      {/* whats on your mind */}
      <div className="container max-w-full mx-auto">
        <div className="flex flex-col gap-[20px] my-[66px]">
          <div className="flex flex-row items-center justify-between">
            <div className="text-[#202020] text-xl font-bold">
              What’s on your mind?
            </div>
            <ClearFilter />
          </div>
          <CategoriesCarousel />
        </div>
        {/* reordered food items */}
        <ReorderedItems />

        {/* Recommended Food Items */}
        <RecommendedFoodItems />
      </div>
    </>
  );
}
