"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMediaQuery } from "@uidotdev/usehooks";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
const categories = [
  {
    img: "/categories/dairy.avif",
    name: "Dairy",
  },
  {
    img: "/categories/beverages.jpg",
    name: "Beverages",
  },
  {
    img: "/categories/fresh-produce.jpg",
    name: "Fresh Produce",
  },
  {
    img: "/categories/bakery.jpg",
    name: "Bakery",
  },
  {
    img: "/categories/meat-and-seafood.jpg",
    name: "Meat & Seafood",
  },
  {
    img: "/categories/frozen-food.jpg",
    name: "Frozen Foods",
  },
  {
    img: "/categories/snacks-and-candy.avif",
    name: "Snacks & Candy",
  },
  {
    img: "/categories/pantry-staples.jpg",
    name: "Pantry Staples",
  },
  {
    img: "/categories/ready-meals.jpg",
    name: "Ready Meals",
  },
];
export default function CategoriesCarousel() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isSmallDevice = useMediaQuery("only screen and (max-width : 1024px)");
  const selectedCategory = searchParams.get("category");
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!api) return;

    const updateScrollButtons = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    updateScrollButtons();
    api.on("select", updateScrollButtons); // update on scroll

    return () => {
      api.off("select", updateScrollButtons);
    };
  }, [api]);

  const handleSetSearchParms = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (params.get("category") === category) {
      params.delete("category");
    } else {
      params.delete("category");
      params.append("category", category);
    }
    // params.delete("category");
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-full relative"
      >
        {canScrollNext && (
          <div className="pointer-events-none absolute top-0 right-0 bg-[linear-gradient(100deg,_rgba(255,255,255,0.00)_4.84%,_#FFF_68.96%)] h-full w-[6%] z-10"></div>
        )}
        {canScrollPrev && (
          <div className="pointer-events-none rotate-180 absolute top-0 left-0 bg-rotate-[180deg] bg-[linear-gradient(100deg,_rgba(255,255,255,0.00)_4.84%,_#FFF_68.96%)] h-full w-[10%] z-10"></div>
        )}

        <CarouselContent className="relative">
          {categories.map((item, index) => (
            <CarouselItem
              onClick={() => handleSetSearchParms(item.name)}
              key={index}
              className={`cursor-pointer basis-[27%] md:basis-[22%] lg:basis-[17%] xl:basis-[15%] 2xl:basis-[13.2%] flex flex-col items-center gap-[7px] md:gap-2.5 xl:gap-[15px]`}
            >
              <div className="relative w-[57px] md:w-[95px] xl:w-[116px] aspect-square">
                <Image
                  src={item.img}
                  alt=""
                  fill
                  className={`object-cover rounded-full ${
                    selectedCategory === item.name
                      ? `border-[4px] border-[#FF4A22]`
                      : `border-none`
                  } `}
                />
              </div>
              <div className="text-black text-sm md:text-base font-medium text-center ">
                {item.name}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {!isSmallDevice && (
          <>
            {canScrollPrev && <CarouselPrevious />}
            {canScrollNext && <CarouselNext />}
          </>
        )}
      </Carousel>
    </>
  );
}
