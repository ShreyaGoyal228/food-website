"use client";
import ProductCard from "@/components/shared/product-card";
import { foodProducts } from "@/data";
import { useSearchParams } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import { useState } from "react";
export default function ReorderedItems() {
  const searchParams = useSearchParams();
  const categorySelected = searchParams.get("category");
  const [api, setApi] = useState<CarouselApi>();

  return (
    <>
      {categorySelected == null && (
        <div className="py-[45px] md:py-[60px] xl:py-[70px] bg-[#F8F8F8]">
          <div className="relative mb-6 md:mb-8 xl:mb-10  flex flex-col gap-4 md:gap-6 container max-w-full mx-auto">
            <div className="flex flex-row justify-between">
              <div className="text-black font-semibold text-lg md:text-xl xl:text-2xl">
                Our Reordered Items
              </div>

              <div className="flex flex-row items-center gap-4">
                <div
                  onClick={() => api?.scrollPrev()}
                  className="cursor-pointer p-1 border border-[#FF4A22] rounded-full"
                >
                  <IoIosArrowBack className="text-lg text-[#FF4A22] size-4" />
                </div>
                <div
                  onClick={() => api?.scrollNext()}
                  className="cursor-pointer p-1 border border-[#FF4A22] rounded-full"
                >
                  <IoIosArrowForward className="text-lg text-[#FF4A22] size-4" />
                </div>
              </div>
            </div>

            <Carousel
              setApi={setApi}
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
