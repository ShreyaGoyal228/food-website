"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
const categories = [
  {
    img: "/categories/dairy.avif",
    name: "Dairy",
  },
  {
    img: "/categories/fresh-produce.jpg",
    name: "Fresh Produce",
  },
  {
    img: "/categories/meat-and-seafood.jpg",
    name: "Meat & Seafood",
  },
  {
    img: "/categories/bakery.jpg",
    name: "Bakery",
  },
  {
    img: "/categories/frozen-food.jpg",
    name: "Frozen Foods",
  },
  {
    img: "/categories/beverages.jpg",
    name: "Beverages",
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
  const selectedCategory = searchParams.get("category");

  const handleSetSearchParms = (category: string) => {
    const params = new URLSearchParams();
    // params.delete("category");
    params.append("category", category);
    router.push(`?${params.toString()}`, { scroll: false });
  };
  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {categories.map((item, index) => (
            <CarouselItem
              onClick={() => handleSetSearchParms(item.name)}
              key={index}
              className="cursor-pointer basis-[35%] md:basis-[27%] lg:basis-[20%] xl:basis-[15%] 2xl:basis-[13.2%] flex flex-col items-center gap-[15px]erftk /"
            >
              <div className="relative w-[116px] aspect-square">
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
              <div className="text-black text-base font-medium">
                {item.name}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
