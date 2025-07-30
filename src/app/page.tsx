import CategoriesCarousel from "@/components/categories-carousel";
import RecommendedFoodItems from "@/components/recommended-food-items";
import ReorderedItems from "@/components/reordered-items";
import ClearFilter from "@/components/shared/clear-filter";
import HeroSection from "@/components/shared/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="container max-w-full mx-auto">
        {/* whats on your mind */}
        <div className="flex flex-col gap-[20px] mb-5 md:mb-[34px] mt-8 md:mt-10 xl:mt-[66px]">
          {/* <div className="flex flex-row items-center justify-between">
            <div className="text-[#202020] text-base md:text-xl font-bold">
              What’s on your mind?
            </div>
            <ClearFilter />
          </div> */}
          <CategoriesCarousel />
        </div>
      </div>
      {/* reordered food items */}
      <ReorderedItems />
      {/* Recommended Food Items */}
      <RecommendedFoodItems />
    </>
  );
}
