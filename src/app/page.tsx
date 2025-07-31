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
