"use client";
import ProductCard from "@/components/shared/product-card";
import { foodProducts } from "@/data";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
export default function ReorderedItems() {
  const searchParams = useSearchParams();
  const categorySelected = searchParams.get("category");
  return (
    <>
      {categorySelected == null && (
        <div className="py-[45px] md:py-[60px] xl:py-[70px] relative">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={"/banner/reordered-food-items.svg"}
              alt="reordered-food-items"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative mb-6 md:mb-8 xl:mb-10  flex flex-col gap-4 md:gap-6 container max-w-full mx-auto">
            <div className="text-white font-semibold text-lg md:text-xl xl:text-2xl">
              Our Reordered Items
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="">
                {foodProducts.slice(0, 5).map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-[340px] md:basis-[381px]"
                  >
                    <ProductCard key={index} product={item} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      )}
    </>
  );
}
