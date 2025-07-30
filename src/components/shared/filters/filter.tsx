import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
export default function Filters() {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  return (
    <>
      <div className="flex flex-row ">
        <div
          onClick={() => setOpenDialog(true)}
          className="cursor-pointer flex flex-row items-center justify-between border-[1.65px] border-[#BDBDBD] bg-[rgba(0,0,0,0.12)] p-[6px] rounded-[164.96px]"
        >
          <div className="flex flex-row items-center gap-2 ">
            <div className="rounded-full bg-[#FF3B30] w-5 h-5 flex items-center justify-center text-xs font-normal text-white">
              1
            </div>
            <div className="font-normal text-base text-[rgba(0,0,0,0.87)] ">
              Filters
            </div>
          </div>
          <div className="relative w-7 aspect-square">
            <Image
              src={"/icons/filter.svg"}
              alt="filter-icon"
              className="object-cover"
              fill
            />
          </div>
        </div>
      </div>

      {/* filter dialog */}

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogOverlay className="bg-black/70">
          <DialogContent className="bg-white ">
            <DialogHeader className="">
              <DialogTitle className="text-left p-5">Filter</DialogTitle>
              <div className="h-[2px] bg-[#E9E9E9] w-full"></div>
            </DialogHeader>

            <Tabs defaultValue="sort" className="flex flex-row ">
              <TabsList className="bg-[rgb(248,248,248)] w-[40%] border-r-[2px] border-[#E9E9E9] flex flex-col gap-1.5 items-start pb-20">
                <TabsTrigger value="sort" className="mt-2 py-3">
                  Sort
                </TabsTrigger>
                <TabsTrigger value="ratings" className=" py-3">
                  Ratings
                </TabsTrigger>
                <TabsTrigger value="veg/nonVeg" className=" py-3">
                  Veg/Non-Veg
                </TabsTrigger>
              </TabsList>
              <div className="px-10">
                <TabsContent value="sort" className="mt-4">
                  <div className="text-base font-medium mb-3">SORT BY</div>
                  <RadioGroup
                    defaultValue="default"
                    className="flex flex-col gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="default" id="r1" />
                      <Label htmlFor="r1" className="">
                        Default
                      </Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="rating" id="r2" />
                      <Label htmlFor="r2">Rating</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="low-to-high" id="r3" />
                      <Label htmlFor="r3">Cost: Low to High</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="high-to-low" id="r3" />
                      <Label htmlFor="r3">Cost: High to Low</Label>
                    </div>
                  </RadioGroup>
                </TabsContent>
                <TabsContent value="ratings" className="mt-4">
                  <div className="text-base font-medium mb-3">Filter By</div>
                  <RadioGroup defaultValue="" className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="4.5+" id="r1" className="" />
                      <Label htmlFor="r1">Ratings 4.5+</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="4.0+" id="r2" />
                      <Label htmlFor="r2">Ratings 4.0+</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="3.5+" id="r3" />
                      <Label htmlFor="r3">Ratings 3.5+</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="3.0+" id="r3" />
                      <Label htmlFor="r3">Ratings 3.0+</Label>
                    </div>
                  </RadioGroup>
                </TabsContent>
                <TabsContent value="veg/nonVeg" className="mt-4">
                  <div className="text-base font-medium mb-3">
                    Veg / Non-Veg
                  </div>
                  <RadioGroup defaultValue="" className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="veg" id="r1" className="" />
                      <Label htmlFor="r1">Veg</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="non-veg" id="r2" />
                      <Label htmlFor="r2">Non-Veg</Label>
                    </div>
                  </RadioGroup>
                </TabsContent>
              </div>
            </Tabs>
            <div className="h-[2px] bg-[#E9E9E9] w-full"></div>
            <DialogFooter className="flex flex-row gap-4 justify-end pr-2 py-4">
              <DialogClose>
                <div className="absolute right-6 top-6 md:top-4 md:right-3 size-6 md:size-8 xl:size-6 cursor-pointer">
                  <Image
                    src={"/icons/cross.svg"}
                    alt="cross-icon"
                    fill
                    className="object-cover"
                  />
                </div>
              </DialogClose>
              <button
                onClick={() => setOpenDialog(false)}
                className="text-[#FF4A22] text-base font-normal bg-white"
              >
                Clear Filters
              </button>
              <button className="text-white text-base font-normal py-[8px] px-[40.5px] bg-[#FF4A22] rounded-[33px]">
                Apply
              </button>
            </DialogFooter>
          </DialogContent>
        </DialogOverlay>
      </Dialog>
    </>
  );
}
